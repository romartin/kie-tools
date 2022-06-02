/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.kie.workbench.common.stunner.sw.client.editor;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.ait.lienzo.client.core.Context2D;
import com.ait.lienzo.client.core.shape.Layer;
import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.LienzoBoundsPanel;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import com.ait.lienzo.client.widget.panel.util.PanelTransformUtils;
import com.google.gwt.user.client.ui.IsWidget;
import elemental2.dom.DomGlobal;
import elemental2.promise.IThenable;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoCanvas;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoPanel;
import org.kie.workbench.common.stunner.client.lienzo.canvas.wires.WiresCanvas;
import org.kie.workbench.common.stunner.client.lienzo.util.StunnerStateApplier;
import org.kie.workbench.common.stunner.client.widgets.canvas.ScrollableLienzoPanel;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.CanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.util.CanvasFileExport;
import org.kie.workbench.common.stunner.core.client.canvas.command.ClearAllCommand;
import org.kie.workbench.common.stunner.core.client.canvas.controls.CanvasRegistrationControl;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandManager;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.service.ServiceCallback;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.client.util.WindowJSType;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.command.util.CommandUtils;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.DiagramParsingException;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.sw.client.services.ClientDiagramService;
import org.kie.workbench.common.stunner.sw.client.services.IncrementalMarshaller;
import org.uberfire.backend.vfs.Path;
import org.uberfire.backend.vfs.PathFactory;
import org.uberfire.client.promise.Promises;
import org.uberfire.mvp.ParameterizedCommand;
import org.uberfire.mvp.PlaceRequest;
import org.uberfire.workbench.model.bridge.Notification;

@ApplicationScoped
public class DiagramEditor {

    public static final String EDITOR_ID = "SWDiagramEditor";

    private final Promises promises;
    private final StunnerEditor stunnerEditor;
    private final ClientDiagramService diagramService;
    private final IncrementalMarshaller incrementalMarshaller;
    private final CanvasFileExport canvasFileExport;


    @Inject
    public DiagramEditor(Promises promises,
                         StunnerEditor stunnerEditor,
                         ClientDiagramService diagramService,
                         IncrementalMarshaller incrementalMarshaller,
                         CanvasFileExport canvasFileExport) {
        this.promises = promises;
        this.stunnerEditor = stunnerEditor;
        this.diagramService = diagramService;
        this.incrementalMarshaller = incrementalMarshaller;
        this.canvasFileExport = canvasFileExport;
    }

    public void onStartup(final PlaceRequest place) {
        stunnerEditor.setReadOnly(true);
    }

    public void onOpen() {
    }

    public void onClose() {
        close();
    }

    private void close() {
        stunnerEditor.close();
        diagramService.getMarshaller().clearContext();
    }

    public IsWidget asWidget() {
        return stunnerEditor.getView();
    }

    public Promise<String> getPreview() {
        if (true) {
            close();
            // testPromisesConcurrency();
            return promises.resolve("");
        }

        CanvasHandler canvasHandler = stunnerEditor.getCanvasHandler();
        if (canvasHandler != null) {
            return promises.resolve(canvasFileExport.exportToSvg((AbstractCanvasHandler) canvasHandler));
        } else {
            return promises.resolve("");
        }
    }

    private void testPromisesConcurrency() {

        Promise<String> p1 = promises.create((success, failure) -> {
            DomGlobal.console.log("Running P1");
            DomGlobal.console.time("fib");
            computeSomeTime();
            DomGlobal.console.timeEnd("fib");
            DomGlobal.console.log("Complete P1");
            success.onInvoke("p1");
        });

        p1.then(new IThenable.ThenOnFulfilledCallbackFn<String, String>() {
            @Override
            public IThenable<String> onInvoke(String s) {
                return promises.resolve(s);
            }
        });
    }

    private static void computeSomeTime() {
        fib(35); // Logarithmic computation time. It takes about 250ms in my laptop.
    }

    private static int fib(int n) {
        if (n < 1) {
            return 0;
        }
        if (n <= 2) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    }

    public Promise validate() {
        return Promise.resolve(new Notification[0]);
    }

    public Promise<String> getContent() {
        return diagramService.transform(stunnerEditor.getDiagram());
    }

    /*
        TODO: SetVsUpdate content
        - Decouple lifecycle from actual StunnerEditor
        - Set logic
            - Marshalling
            - new Session
            - Auto-fit
        - Update logic
            - Session.saveState*
            - Session.clearState
            - Marshalling - preserve UUIDs <-> state name
            - Update graph command
                - clear canvas / handler
                - clear memory model
                - clear caches
                - re-populate
                - canvas root UUID
            - Session. restoreState*
            - DO NOT auto-fit

        - TODO: Apply in conjunction with other proposed actions (Handrey)
        - TODO: Sync with Jaime/Wagner on vscode integration issues
        - TODO: Tooling Channels -> ensure closing / different states for each tab
     */

    public Promise<Void> updateContent(final String path, final String value) {
        DomGlobal.console.log("UPDATING CONTENT");
        return promises.create((success, failure) -> {
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<Diagram>() {

                                         @Override
                                         public void onSuccess(final Diagram diagram) {
                                             updateDiagram(diagram);
                                         }

                                         @Override
                                         public void onError(final ClientRuntimeError error) {
                                             stunnerEditor.handleError(new ClientRuntimeError(new DiagramParsingException()));
                                             failure.onInvoke(error);
                                         }
                                     });
        });
    }

    public void updateDiagram(Diagram diagram) {
        DomGlobal.console.log("UPDATING DIAGRAM");
        ViewerSession session = (ViewerSession) stunnerEditor.getSession();
        AbstractCanvasHandler canvasHandler = session.getCanvasHandler();
        CanvasCommandManager<AbstractCanvasHandler> commandManager = session.getCommandManager();


        // TODO: Clear ALL controls state
        ((CanvasRegistrationControl) session.getSelectionControl()).clear();

        commandManager.execute(canvasHandler, new ClearAllCommand());

        canvasHandler.draw(diagram,
                           (ParameterizedCommand<CommandResult<?>>) result -> {
                               if (!CommandUtils.isError(result)) {
                                   DomGlobal.console.log("(RE)DRAW DONE!!!");
                               } else {
                                   DomGlobal.console.error("An error occurred while drawing the diagram [result=" + result + "]");
                               }
                           });

        // TODO: Restore previous controls state??

    }

    public Promise<Void> setContent(final String path, final String value) {
        if (stunnerEditor.isClosed()) {
            return setNewContent(path, value);
        } else {
            return updateContent(path, value);
        }
    }

    public Promise<Void> setNewContent(final String path, final String value) {
        close();
        return promises.create((success, failure) -> {
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<Diagram>() {

                                         @Override
                                         public void onSuccess(final Diagram diagram) {
                                             stunnerEditor
                                                     .close()
                                                     .open(diagram, new SessionPresenter.SessionPresenterCallback() {
                                                         @Override
                                                         public void onSuccess() {
                                                             onDiagramOpenSuccess();
                                                             scaleToFitWorkflow(stunnerEditor);
                                                             success.onInvoke((Void) null);
                                                         }

                                                         @Override
                                                         public void onError(ClientRuntimeError error) {
                                                             stunnerEditor.handleError(error);
                                                             failure.onInvoke(error);
                                                         }

                                                         @Override
                                                         public void afterCanvasInitialized() {
                                                             WiresCanvas canvas = (WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas();
                                                             ScrollableLienzoPanel lienzoPanel = (ScrollableLienzoPanel) canvas.getView().getLienzoPanel();

                                                             Layer bgLayer = new Layer() {
                                                                 @Override
                                                                 public Layer draw(Context2D context) {
                                                                     super.draw(context);
                                                                     context.setFillColor("#f2f2f2");
                                                                     context.fillRect(0, 0, getWidth(), getHeight());

                                                                     return this;
                                                                 }
                                                             };
                                                             lienzoPanel.setBackgroundLayer(bgLayer);
                                                         }
                                                     });
                                         }

                                         @Override
                                         public void onError(final ClientRuntimeError error) {
                                             stunnerEditor.handleError(new ClientRuntimeError(new DiagramParsingException()));
                                             failure.onInvoke(error);
                                         }
                                     });
        });
    }

    static void scaleToFitWorkflow(StunnerEditor stunnerEditor) {
        WiresCanvas canvas = (WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas();
        ScrollablePanel lienzoPanel = ((ScrollableLienzoPanel) canvas.getView().getLienzoPanel()).getView();

        lienzoPanel.setPostResizeCallback((panel) -> {
            double scale = PanelTransformUtils.computeZoomLevelFitToWidth(panel);
            if (scale > 0) {
                PanelTransformUtils.setScaleLevel(panel.getViewport(), scale);
            }
            panel.setPostResizeCallback(null);
        });
    }

    private void onDiagramOpenSuccess() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        Metadata metadata = diagram.getMetadata();
        String title = metadata.getTitle();
        Path path = PathFactory.newPath(title, "/" + title + ".sw");
        metadata.setPath(path);
        // TODO: Finally leaking DiagramImpl or not?
        //  initJsTypes();
    }

    private void initJsTypes() {
        LienzoCanvas canvas = (LienzoCanvas) stunnerEditor.getCanvasHandler().getCanvas();
        if (canvas != null) {
            LienzoPanel panel = (LienzoPanel) canvas.getView().getPanel();
            LienzoBoundsPanel lienzoPanel = panel.getView();

            JsCanvas jsCanvas = new JsCanvas(lienzoPanel, lienzoPanel.getLayer(), new StunnerStateApplier() {
                @Override
                public Shape getShape(String uuid) {
                    return stunnerEditor.getCanvasHandler().getCanvas().getShape(uuid);
                }
            });

            WindowJSType.linkCanvasJS(jsCanvas);
        }
    }
}
