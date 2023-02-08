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

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Event;
import javax.inject.Inject;

import com.ait.lienzo.client.core.shape.Circle;
import com.ait.lienzo.client.core.shape.Layer;
import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.Rectangle;
import com.ait.lienzo.client.core.shape.wires.LayoutContainer;
import com.ait.lienzo.client.core.shape.wires.WiresShape;
import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.core.types.Point2D;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import com.ait.lienzo.client.widget.panel.util.PanelTransformUtils;
import com.ait.lienzo.shared.core.types.ColorName;
import com.ait.lienzo.shared.core.types.EventPropagationMode;
import com.google.gwt.user.client.ui.IsWidget;
import elemental2.core.JsRegExp;
import elemental2.core.RegExpResult;
import elemental2.dom.DomGlobal;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.client.lienzo.canvas.wires.WiresCanvas;
import org.kie.workbench.common.stunner.client.lienzo.canvas.wires.WiresLayer;
import org.kie.workbench.common.stunner.client.lienzo.components.mediators.preview.TogglePreviewEvent;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerWindow;
import org.kie.workbench.common.stunner.client.widgets.canvas.ScrollableLienzoPanel;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.api.JsGraphCommands;
import org.kie.workbench.common.stunner.core.api.JsGraphExecutionContext;
import org.kie.workbench.common.stunner.core.client.api.ShapeManager;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.CanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.controls.SelectionControl;
import org.kie.workbench.common.stunner.core.client.canvas.util.CanvasFileExport;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandManager;
import org.kie.workbench.common.stunner.core.client.command.ClearAllCommand;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.service.ServiceCallback;
import org.kie.workbench.common.stunner.core.client.session.impl.AbstractSession;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.command.util.CommandUtils;
import org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.DiagramParsingException;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.impl.GraphCommandFactory;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.sw.SWDefinitionSet;
import org.kie.workbench.common.stunner.sw.SWDomainInitializer;
import org.kie.workbench.common.stunner.sw.client.services.ClientDiagramService;
import org.kie.workbench.common.stunner.sw.client.services.IncrementalMarshaller;
import org.kie.workbench.common.stunner.sw.client.services.JsDiagramService;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.definition.Workflow;
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
    private final Event<TogglePreviewEvent> togglePreviewEvent;

    @Inject
    public DiagramEditor(Promises promises,
                         StunnerEditor stunnerEditor,
                         ClientDiagramService diagramService,
                         IncrementalMarshaller incrementalMarshaller,
                         CanvasFileExport canvasFileExport,
                         final Event<TogglePreviewEvent> togglePreviewEvent) {
        this.promises = promises;
        this.stunnerEditor = stunnerEditor;
        this.diagramService = diagramService;
        this.incrementalMarshaller = incrementalMarshaller;
        this.canvasFileExport = canvasFileExport;
        this.togglePreviewEvent = togglePreviewEvent;
    }

    @Inject
    SWDomainInitializer swDomainInitializer;

    public void onStartup(final PlaceRequest place) {
        swDomainInitializer.initialize();

        stunnerEditor
                .setReadOnly(true)
                .initialize(swDomainInitializer.getDomainInitializer());

        JsStunnerWindow.editor.domainInitializer.injectScript(JsDomainInitializerBundle.INSTANCE.initialize().getText());
    }

    public IsWidget asWidget() {
        return stunnerEditor.getView();
    }

    @SuppressWarnings("all")
    public Promise<String> getPreview() {

        if (true) {
            testJsMarshalling().then(unused -> null);
            return promises.resolve("");
        }

        CanvasHandler canvasHandler = stunnerEditor.getCanvasHandler();
        if (canvasHandler != null) {
            return promises.resolve(canvasFileExport.exportToSvg((AbstractCanvasHandler) canvasHandler));
        } else {
            return promises.resolve("");
        }
    }

    @SuppressWarnings("all")
    public Promise validate() {
        return Promise.resolve(new Notification[0]);
    }

    public Promise<String> getContent() {
        return diagramService.transform(stunnerEditor.getDiagram());
    }

    public Promise<Void> setContent(final String path, final String value) {
        TogglePreviewEvent event = new TogglePreviewEvent(TogglePreviewEvent.EventType.HIDE);
        togglePreviewEvent.fire(event);
        if (stunnerEditor.isClosed() || !isSameWorkflow(value)) {
            return setNewContent(path, value);
        }
        return updateContent(path, value);
    }

    public Promise<Boolean> hasErrors() {
        return promises.resolve(stunnerEditor.hasErrors());
    }

    @Inject
    JsDiagramService service;
    @Inject
    DefinitionManager definitionManager;
    @Inject
    FactoryManager factoryManager;
    @Inject
    ShapeManager shapeManager;
    @Inject
    NodeFactory nodeFactory;
    @Inject
    GraphCommandFactory commandFactory;
    @Inject
    EdgeFactory edgeFactory;

    @SuppressWarnings("all")
    public Promise<Void> testJsMarshalling() {
        JsGraphExecutionContext executionContext =
                JsGraphExecutionContext.create("sw_graph")
                        .bind(definitionManager,
                              factoryManager,
                              new JsGraphCommands(commandFactory,
                                                  nodeFactory,
                                                  edgeFactory));

        JsStunnerWindow.editor
                .parser
                .parse(executionContext,
                       "someRawContent");

        // TODO: It will became JS code (g.editor.marshaller)!
        if (false) {
            executionContext
                    .addRootNode("sw_root_node", new Workflow())
                    .addNode("state1", new InjectState().setName("injectState1"))
                    .changeLocation("state1", 350, 220)
                    .addNode("end", new End())
                    .changeLocation("end", 420, 470)
                    .addEdge("state1_to_end", new Transition(), "state1")
                    .connect("state1_to_end", "end");
        }

        String definitionSetId = BindableAdapterUtils.getDefinitionSetId(SWDefinitionSet.class);
        String ssid = shapeManager.getDefaultShapeSet(definitionSetId).getId();
        Diagram diagram = service.createDiagram(definitionSetId, "SW Test Diagram", executionContext.graph);
        diagram.getMetadata().setCanvasRootUUID(executionContext.root.getUUID());
        diagram.getMetadata().setShapeSetId(ssid);

        return setDiagramContent(diagram);
    }

    public Promise<Void> setNewContent(final String path, final String value) {
        return promises.create((success, failure) -> {
            stunnerEditor.clearAlerts();
            diagramService.transform(path,
                                     value,
                                     new ServiceCallback<ParseResult>() {
                                         @Override
                                         public void onSuccess(final ParseResult parseResult) {
                                             setDiagramContent(parseResult.getDiagram())
                                                     .then(unused -> {
                                                         if (parseResult.getMessages().length > 0) {
                                                             for (Message m : parseResult.getMessages()) {
                                                                 stunnerEditor.addError(m.toString());
                                                             }
                                                         }
                                                         success.onInvoke((Void) null);
                                                         return promises.resolve(null);
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

    public Promise<Void> setDiagramContent(Diagram diagram) {
        return promises.create((success, failure) -> {
            stunnerEditor
                    .close()
                    .open(diagram,
                          new SessionPresenter.SessionPresenterCallback() {
                              @Override
                              public void onSuccess() {
                                  onDiagramOpenSuccess();
                                  scaleToFitWorkflow(stunnerEditor);
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
        });
    }

    @SuppressWarnings("all")
    Diagram renderDiagram;

    @SuppressWarnings("all")
    private void onDiagramOpenSuccess() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        Metadata metadata = diagram.getMetadata();
        String title = metadata.getTitle();
        Path path = PathFactory.newPath(title, "/" + title + ".sw");
        metadata.setPath(path);
        incrementalMarshaller.run(diagramService.getMarshaller());
    }

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

    JsCanvas getJsCanvas() {
        return JsStunnerWindow.canvas;
    }

    @SuppressWarnings("all")
    public Promise<Void> selectStateByName(final String name) {
        String uuid = diagramService.getMarshaller().getContext().getNameToUUIDBindings().get(name);
        AbstractSession session = (AbstractSession) stunnerEditor.getSession();
        // highlight the node
        session.getSelectionControl().clearSelection().addSelection(uuid);

        // center the node in the diagram
        getJsCanvas().center(uuid);

        return null;
    }

    public void onOpen() {
    }

    public void onClose() {
        close();
    }

    void close() {
        stunnerEditor.close();
        getJsCanvas().close();
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

        centerFirstSelectedNode(stunnerEditor, getJsCanvas());
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

    static void testShapeIcons(StunnerEditor stunnerEditor) {
        WiresCanvas wiresCanvas = (WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas();
        WiresLayer wiresLayer = wiresCanvas.getView().getLayer();
        Layer layer = wiresLayer.getLienzoLayer();

        double x = 400;
        double y = 200;
        MultiPath path = new MultiPath().rect(0, 0, 100, 100)
                .setFillColor(ColorName.BLACK);
        path.addNodeMouseClickHandler(event -> DomGlobal.console.log("PATH - MOUSE CLICK"));

        WiresShape shape = new WiresShape(path);
        shape.setLocation(new Point2D(x, y));

        shape.getGroup().setEventPropagationMode(EventPropagationMode.LAST_ANCESTOR);
        //shape.getPath().setEventPropagationMode(EventPropagationMode.NO_ANCESTORS);

        shape.getPath().addNodeMouseEnterHandler((event -> DomGlobal.console.log("SHAPE - MOUSE ENTER")));
        shape.getPath().addNodeMouseExitHandler(event -> DomGlobal.console.log("SHAPE - MOUSE EXIT"));
        shape.getPath().addNodeMouseOverHandler(event -> DomGlobal.console.log("SHAPE - MOUSE OVER"));
        shape.getPath().addNodeMouseOutHandler(event -> DomGlobal.console.log("SHAPE - MOUSE OUT"));
        shape.getGroup().addNodeMouseClickHandler(event -> {
            DomGlobal.console.log("SHAPE - MOUSE CLICK");
            if (null != event.getSource()) {
                String type = event.getSource().getNodeType().toString();
                DomGlobal.console.log(type);
            }
        });

        Circle icon = new Circle(25)
                .setFillColor(ColorName.RED)
                .setFillAlpha(1)
                .setListening(true);
        shape.addChild(icon, LayoutContainer.Layout.CENTER);

        wiresCanvas.getWiresManager().register(shape);

        layer.draw();
    }

    static void testShapeIconsPrimitives(StunnerEditor stunnerEditor) {
        WiresCanvas wiresCanvas = (WiresCanvas) stunnerEditor.getCanvasHandler().getCanvas();
        WiresLayer wiresLayer = wiresCanvas.getView().getLayer();
        Layer layer = wiresLayer.getLienzoLayer();

        double x = 400;
        double y = 200;
        Rectangle shape = new Rectangle(100, 100)
                .setX(x)
                .setY(y)
                .setFillColor(ColorName.BLACK)
                .setFillAlpha(1)
                .setListening(true);
        Circle icon = new Circle(25)
                .setX(x + 50)
                .setY(y + 50)
                .setFillColor(ColorName.RED)
                .setFillAlpha(1)
                .setListening(true);

        //shape.setEventPropagationMode(EventPropagationMode.FIRST_ANCESTOR);
        icon.setEventPropagationMode(EventPropagationMode.LAST_ANCESTOR);

        shape.addNodeMouseEnterHandler(event -> DomGlobal.console.log("SHAPE - MOUSE ENTER"));
        shape.addNodeMouseExitHandler(event -> DomGlobal.console.log("SHAPE - MOUSE EXIT"));
        shape.addNodeMouseOverHandler(event -> DomGlobal.console.log("SHAPE - MOUSE OVER"));
        shape.addNodeMouseOutHandler(event -> DomGlobal.console.log("SHAPE - MOUSE OUT"));
        shape.addNodeMouseClickHandler(event -> DomGlobal.console.log("SHAPE - MOUSE CLICK"));

        icon.addNodeMouseEnterHandler(event -> DomGlobal.console.log("ICON - MOUSE ENTER"));
        icon.addNodeMouseExitHandler(event -> DomGlobal.console.log("ICON - MOUSE EXIT"));
        icon.addNodeMouseOverHandler(event -> DomGlobal.console.log("ICON - MOUSE OVER"));
        icon.addNodeMouseOutHandler(event -> DomGlobal.console.log("ICON - MOUSE OUT"));
        icon.addNodeMouseClickHandler(event -> DomGlobal.console.log("ICON - MOUSE CLICK"));

        layer.add(shape);
        layer.add(icon);
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
