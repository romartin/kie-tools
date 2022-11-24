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

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import com.ait.lienzo.client.widget.panel.util.PanelTransformUtils;
import com.google.gwt.user.client.ui.IsWidget;
import elemental2.core.JsRegExp;
import elemental2.core.RegExpResult;
import elemental2.dom.DomGlobal;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.client.lienzo.canvas.wires.WiresCanvas;
import org.kie.workbench.common.stunner.client.widgets.canvas.ScrollableLienzoPanel;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.client.api.SessionManager;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.CanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.controls.SelectionControl;
import org.kie.workbench.common.stunner.core.client.canvas.util.CanvasFileExport;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandManager;
import org.kie.workbench.common.stunner.core.client.command.ClearAllCommand;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.service.ServiceCallback;
import org.kie.workbench.common.stunner.core.client.session.impl.AbstractSession;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.command.util.CommandUtils;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.core.definition.property.PropertyMetaTypes;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.DiagramParsingException;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.sw.SWDomainInitializer;
import org.kie.workbench.common.stunner.sw.client.services.ClientDiagramService;
import org.kie.workbench.common.stunner.sw.client.services.IncrementalMarshaller;
import org.kie.workbench.common.stunner.sw.marshall.Message;
import org.kie.workbench.common.stunner.sw.marshall.ParseResult;
import org.uberfire.backend.vfs.Path;
import org.uberfire.backend.vfs.PathFactory;
import org.uberfire.client.promise.Promises;
import org.uberfire.mvp.ParameterizedCommand;
import org.uberfire.mvp.PlaceRequest;
import org.uberfire.workbench.model.bridge.Notification;

@ApplicationScoped
public class DiagramEditor {

    public static final String EDITOR_ID = "SWDiagramEditor";
    public static final String BACKGROUND_COLOR = "#f2f2f2";

    static String ID_SEARCH_PATTERN = "(?:\\\"|\\')(?<id>[^\"]*)(?:\\\"|\\')(?=:)(?:\\:\\s*)(?:\\\"|\\')" +
            "?(?<value>true|false|[0-9a-zA-Z\\+\\-\\,\\.\\$]*)";
    static JsRegExp jsRegExp = new JsRegExp(ID_SEARCH_PATTERN, "i"); //case insensitive

    private final Promises promises;
    private final StunnerEditor stunnerEditor;
    private final ClientDiagramService diagramService;
    private final IncrementalMarshaller incrementalMarshaller;
    private final CanvasFileExport canvasFileExport;

    JsCanvas jsCanvas;

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
        this.jsCanvas = null;
    }

    @Inject
    private SWDomainInitializer domainInitializer;

    public void onStartup(final PlaceRequest place) {
        domainInitializer.initialize();
        stunnerEditor.setReadOnly(true);
    }

    public IsWidget asWidget() {
        return stunnerEditor.getView();
    }

    public Promise<String> getPreview() {
        if (true) {
            return logJsDefinitions();
        }

        CanvasHandler canvasHandler = stunnerEditor.getCanvasHandler();
        if (canvasHandler != null) {
            return promises.resolve(canvasFileExport.exportToSvg((AbstractCanvasHandler) canvasHandler));
        } else {
            return promises.resolve("");
        }
    }

    @Inject
    private SessionManager sessionManager;

    @Inject
    private DefinitionManager definitionManager;

    public Promise<String> logJsDefinitions() {
        ViewerSession session = sessionManager.getCurrentSession();
        String selectedUUID = session.getSelectionControl().getSelectedItems().iterator().next();
        if (null != selectedUUID) {
            Node node = session.getCanvasHandler().getGraphIndex().getNode(selectedUUID);
            View<?> content = (View<?>) node.getContent();
            Object definition = content.getDefinition();
            DefinitionId defId = definitionManager.adapters().forDefinition().getId(definition);
            DomGlobal.console.log("DefinitionID = " + defId.value());
            String namePropertyField = definitionManager.adapters().forDefinition().getMetaPropertyField(definition, PropertyMetaTypes.NAME);
            Optional<?> name = definitionManager.adapters().forDefinition().getProperty(definition, namePropertyField);
            Object nameValue = definitionManager.adapters().forProperty().getValue(name.get());
            DomGlobal.console.log("Name = " + nameValue);

            String[] propertyFields = definitionManager.adapters().forDefinition().getPropertyFields(definition);
            for (int i = 0; i < propertyFields.length; i++) {
                String field = propertyFields[i];
                Optional<?> property = definitionManager.adapters().forDefinition().getProperty(definition, field);
                property.ifPresent(p -> {
                    Object value = definitionManager.adapters().forProperty().getValue(p);
                    DomGlobal.console.log(field + "-->" + value);
                });
            }
        }
        return promises.resolve("");
    }

    public Promise validate() {
        return Promise.resolve(new Notification[0]);
    }

    public Promise<String> getContent() {
        return diagramService.transform(stunnerEditor.getDiagram());
    }

    public Promise<Void> setContent(final String path, final String value) {
        if (stunnerEditor.isClosed() || !isSameWorkflow(value)) {
            return setNewContent(path, value);
        }
        return updateContent(path, value);
    }

    public Promise<Boolean> hasErrors() {
        return promises.resolve(stunnerEditor.hasErrors());
    }

    public Promise<Void> setNewContent(final String path, final String value) {
        return promises.create((success, failure) -> {
            stunnerEditor.clearAlerts();
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<ParseResult>() {
                                         @Override
                                         public void onSuccess(final ParseResult parseResult) {
                                             stunnerEditor
                                                     .close()
                                                     .open(parseResult.getDiagram(),
                                                           new SessionPresenter.SessionPresenterCallback() {
                                                               @Override
                                                               public void onSuccess() {
                                                                   onDiagramOpenSuccess();
                                                                   scaleToFitWorkflow(stunnerEditor);
                                                                   if (parseResult.getMessages().length > 0) {
                                                                       for (Message m : parseResult.getMessages()) {
                                                                           stunnerEditor.addError(m.toString());
                                                                       }
                                                                   }
                                                                   success.onInvoke((Void) null);
                                                               }

                                                               @Override
                                                               public void onError(ClientRuntimeError error) {
                                                                   stunnerEditor.handleError(error);
                                                                   DomGlobal.console.error(error);
                                                                   success.onInvoke((Void) null);
                                                               }

                                                               @Override
                                                               public void afterCanvasInitialized() {
                                                                   ((WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas())
                                                                           .setBackgroundColor(BACKGROUND_COLOR);
                                                               }
                                                           });
                                         }

                                         @Override
                                         public void onError(final ClientRuntimeError error) {
                                             handleParseErrors(error, stunnerEditor);
                                             DomGlobal.console.error(error);
                                             failure.onInvoke(error);
                                         }
                                     });
        });
    }

    Diagram renderDiagram;

    public Promise<Void> updateContent(final String path, final String value) {
        return promises.create((success, failure) -> {
            stunnerEditor.clearAlerts();
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<ParseResult>() {

                                         @Override
                                         public void onSuccess(final ParseResult parseResult) {
                                             renderDiagram = parseResult.getDiagram();
                                             updateDiagram(parseResult.getDiagram());
                                             if (parseResult.getMessages().length > 0) {
                                                 for (Message m : parseResult.getMessages()) {
                                                     stunnerEditor.addError(m.toString());
                                                 }
                                             }
                                             success.onInvoke((Void) null);
                                         }

                                         @Override
                                         public void onError(final ClientRuntimeError error) {
                                             handleParseErrors(error, stunnerEditor);
                                             DomGlobal.console.error(error);
                                             success.onInvoke((Void) null);
                                         }
                                     });
        });
    }

    public Promise<Void> selectStateByName(final String name) {
        String uuid = diagramService.getMarshaller().getContext().getNameToUUIDBindings().get(name);
        AbstractSession session = (AbstractSession) stunnerEditor.getSession();
        // highlight the node
        session.getSelectionControl().clearSelection().addSelection(uuid);

        // center the node in the diagram
        jsCanvas.center(uuid);

        return null;
    }

    public void onOpen() {
    }

    public void onClose() {
        close();
    }

    void close() {
        stunnerEditor.close();
        jsCanvas.close();
    }

    @SuppressWarnings("all")
    void updateDiagram(Diagram diagram) {
        AbstractSession session = (AbstractSession) stunnerEditor.getSession();

        AbstractCanvasHandler canvasHandler = (AbstractCanvasHandler) stunnerEditor.getCanvasHandler();
        Diagram currentDiagram = stunnerEditor.getCanvasHandler().getDiagram();
        CanvasCommandManager<AbstractCanvasHandler> commandManager = session.getCommandManager();

        // Preserve session state.
        // Viewer session -> mediators & selection
        Collection<String> selectedItems = session.getSelectionControl().getSelectedItems();
        List<String> selection = new ArrayList<>();

        for (String selectedItem : selectedItems) {
            Node<View<?>, Edge> node = currentDiagram.getGraph().getNode(selectedItem);
            selection.add(node.getUUID());
        }

        currentDiagram = null;
        selectedItems = null;

        // Clearing the graph & canvas
        commandManager.execute(canvasHandler, new ClearAllCommand());
        // Repopulating
        canvasHandler.draw(diagram,
                           (ParameterizedCommand<CommandResult<?>>) result -> {
                               if (!CommandUtils.isError(result)) {
                                   DomGlobal.console.log("(RE)DRAW DONE!!!");
                               } else {
                                   DomGlobal.console.error("An error occurred while drawing the diagram [result=" + result + "]");
                               }
                           });

        // Reapply selection
        final Iterator iterator = canvasHandler.getDiagram().getGraph().nodes().iterator();
        while (iterator.hasNext()) {
            final Node<View<?>, Edge> node = (Node<View<?>, Edge>) iterator.next();
            if (selection.contains(node.getUUID())) {
                session.getSelectionControl().addSelection(node.getUUID());
            }
        }

        centerFirstSelectedNode(stunnerEditor, jsCanvas);
    }

    @SuppressWarnings("all")
    private boolean isSameWorkflow(final String value) {
        Boolean found = false;

        try {
            RegExpResult execs = jsRegExp.exec(value);

            if (execs != null || execs.length > 0) {

                Diagram oldDiagram = stunnerEditor.getCanvasHandler().getDiagram();

                if (execs.getAt(2).equals(oldDiagram.getGraph().getUUID())) {
                    found = true;
                }
            }

            execs = null;
        } catch (Exception ex) {
            stunnerEditor.handleError(new ClientRuntimeError(ex));
            DomGlobal.console.error(ex);
        }

        return found;
    }

    private void handleParseErrors(ClientRuntimeError error, StunnerEditor stunnerEditor) {
        final DiagramParsingException diagramParsingException =
                new DiagramParsingException(error.getThrowable());
        final ClientRuntimeError clientRuntimeError =
                new ClientRuntimeError(error.getMessage(), diagramParsingException);
        stunnerEditor.handleError(clientRuntimeError);
    }

    private void onDiagramOpenSuccess() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        Metadata metadata = diagram.getMetadata();
        String title = metadata.getTitle();
        Path path = PathFactory.newPath(title, "/" + title + ".sw");
        metadata.setPath(path);
        incrementalMarshaller.run(diagramService.getMarshaller());
    }

    @SuppressWarnings("all")
    static void centerFirstSelectedNode(StunnerEditor stunnerEditor, JsCanvas jsCanvas) {
        AbstractSession session = (AbstractSession) stunnerEditor.getSession();
        SelectionControl<AbstractCanvasHandler, Element> selectionControl = session.getSelectionControl();

        if (!selectionControl.getSelectedItems().isEmpty()) {
            String uuid = selectionControl.getSelectedItems().iterator().next();
            if (!jsCanvas.isShapeVisible(uuid)) {
                jsCanvas.centerNode(uuid);
            }
        }
    }

    static void scaleToFitWorkflow(StunnerEditor stunnerEditor) {
        WiresCanvas canvas = (WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas();
        ScrollablePanel lienzoPanel = ((ScrollableLienzoPanel) canvas.getView().getLienzoPanel()).getView();
        lienzoPanel.setPostResizeCallback((panel -> {
            double scale = PanelTransformUtils.computeZoomLevelFitToWidth(lienzoPanel);
            // Do not scale if workflow fits in the panel
            if (scale < 1) {
                PanelTransformUtils.scale(lienzoPanel, scale);
            }
            lienzoPanel.setPostResizeCallback(null);
        }));
    }
}
