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

import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.LienzoBoundsPanel;
import com.google.gwt.user.client.ui.IsWidget;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoCanvas;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoPanel;
import org.kie.workbench.common.stunner.client.lienzo.util.StunnerStateApplier;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.service.ServiceCallback;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.client.util.WindowJSType;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.DiagramParsingException;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.sw.client.services.ClientDiagramService;
import org.kie.workbench.common.stunner.sw.client.services.IncrementalMarshaller;
import org.kie.workbench.common.stunner.sw.dom.DomConsole;
import org.uberfire.backend.vfs.Path;
import org.uberfire.backend.vfs.PathFactory;
import org.uberfire.client.promise.Promises;
import org.uberfire.mvp.PlaceRequest;
import org.uberfire.workbench.model.bridge.Notification;

import static org.kie.workbench.common.stunner.sw.marshall.Marshaller.IS_STRUCTURAL_PROFILING_ENABLED;

@ApplicationScoped
public class DiagramEditor {

    public static final String EDITOR_ID = "SWDiagramEditor";

    private final Promises promises;
    private final StunnerEditor stunnerEditor;
    private final ClientDiagramService diagramService;
    private final IncrementalMarshaller incrementalMarshaller;

    @Inject
    public DiagramEditor(Promises promises,
                         StunnerEditor stunnerEditor,
                         ClientDiagramService diagramService,
                         IncrementalMarshaller incrementalMarshaller) {
        this.promises = promises;
        this.stunnerEditor = stunnerEditor;
        this.diagramService = diagramService;
        this.incrementalMarshaller = incrementalMarshaller;
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
    }

    public IsWidget asWidget() {
        return stunnerEditor.getView();
    }

    public Promise<String> getPreview() {
        // TODO
        close();
        return promises.resolve("");
    }

    public Promise validate() {
        return Promise.resolve(new Notification[0]);
    }

    public Promise<String> getContent() {
        return diagramService.transform(stunnerEditor.getDiagram());
    }

    public Promise<Void> setContent(final String path, final String value) {
        if (true) {
            return updateContent(path, value);
        } else {
            return putContent(path, value);
        }
    }

    public Promise<Void> putContent(final String path, final String value) {
        if (IS_STRUCTURAL_PROFILING_ENABLED) {
            DomConsole.getInstance().time("SWF_VIEWER_E2E");
            DomConsole.getInstance().timeStamp("T_SWF_VIEWER_E2E");
        }
        close();
        return promises.create((success, failure) -> {
            if (IS_STRUCTURAL_PROFILING_ENABLED) {
                DomConsole.getInstance().time("TRANSFORM");
                DomConsole.getInstance().timeStamp("T_TRANSFORM");
            }
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<Diagram>() {

                                         @Override
                                         public void onSuccess(final Diagram diagram) {
                                             if (IS_STRUCTURAL_PROFILING_ENABLED) {
                                                 DomConsole.getInstance().timeEnd("TRANSFORM");
                                                 DomConsole.getInstance().time("OPEN");
                                                 DomConsole.getInstance().timeStamp("T_OPEN");
                                             }
                                             stunnerEditor
                                                     .close()
                                                     .open(diagram, new SessionPresenter.SessionPresenterCallback() {
                                                         @Override
                                                         public void onSuccess() {
                                                             if (IS_STRUCTURAL_PROFILING_ENABLED) {
                                                                 DomConsole.getInstance().timeEnd("OPEN");
                                                             }
                                                             onDiagramOpenSuccess();
                                                             success.onInvoke((Void) null);
                                                         }

                                                         @Override
                                                         public void onError(ClientRuntimeError error) {
                                                             stunnerEditor.handleError(error);
                                                             failure.onInvoke(error);
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

    public Promise<Void> updateContent(final String path, final String value) {
        if (IS_STRUCTURAL_PROFILING_ENABLED) {
            DomConsole.getInstance().time("SWF_VIEWER_E2E");
            DomConsole.getInstance().timeStamp("T_SWF_VIEWER_E2E");
        }
        // TODO close();
        return promises.create((success, failure) -> {
            if (IS_STRUCTURAL_PROFILING_ENABLED) {
                DomConsole.getInstance().time("TRANSFORM");
                DomConsole.getInstance().timeStamp("T_TRANSFORM");
            }
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<Diagram>() {

                                         @Override
                                         public void onSuccess(final Diagram diagram) {
                                             if (IS_STRUCTURAL_PROFILING_ENABLED) {
                                                 DomConsole.getInstance().timeEnd("TRANSFORM");
                                                 DomConsole.getInstance().time("OPEN");
                                                 DomConsole.getInstance().timeStamp("T_OPEN");
                                             }
                                             stunnerEditor
                                                     // TODO .close()
                                                     .open(diagram, new SessionPresenter.SessionPresenterCallback() {
                                                         @Override
                                                         public void onSuccess() {
                                                             if (IS_STRUCTURAL_PROFILING_ENABLED) {
                                                                 DomConsole.getInstance().timeEnd("OPEN");
                                                             }
                                                             onDiagramOpenSuccess();
                                                             success.onInvoke((Void) null);
                                                         }

                                                         @Override
                                                         public void onError(ClientRuntimeError error) {
                                                             stunnerEditor.handleError(error);
                                                             failure.onInvoke(error);
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

    private void onDiagramOpenSuccess() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        Metadata metadata = diagram.getMetadata();
        String title = metadata.getTitle();
        Path path = PathFactory.newPath(title, "/" + title + ".sw");
        metadata.setPath(path);
        incrementalMarshaller.run(diagramService.getMarshaller());
        initJsTypes();
        if (IS_STRUCTURAL_PROFILING_ENABLED) {
            DomConsole.getInstance().timeEnd("SWF_VIEWER_E2E");
        }
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
