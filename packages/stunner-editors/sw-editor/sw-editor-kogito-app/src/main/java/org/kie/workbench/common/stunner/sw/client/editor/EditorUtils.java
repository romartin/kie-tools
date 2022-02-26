/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

import java.util.Collection;
import java.util.function.BiConsumer;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.ait.lienzo.client.core.animation.AnimationProperties;
import com.ait.lienzo.client.core.animation.AnimationProperty;
import com.ait.lienzo.client.core.animation.AnimationTweener;
import com.ait.lienzo.client.core.animation.IAnimation;
import com.ait.lienzo.client.core.animation.IAnimationCallback;
import com.ait.lienzo.client.core.animation.IAnimationHandle;
import com.ait.lienzo.client.core.shape.Group;
import com.ait.lienzo.client.core.types.Shadow;
import com.ait.lienzo.shared.core.types.ColorName;
import elemental2.core.Global;
import elemental2.dom.DomGlobal;
import jsinterop.base.Js;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.wires.ext.WiresShapeViewExt;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.client.api.ShapeManager;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.session.impl.EditorSession;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.command.impl.CompositeCommand;
import org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.diagram.MetadataImpl;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.DirectGraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.definition.DefinitionSet;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.impl.GraphImpl;
import org.kie.workbench.common.stunner.core.graph.processing.index.GraphIndexBuilder;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.util.DefinitionUtils;
import org.kie.workbench.common.stunner.sw.Definitions;
import org.kie.workbench.common.stunner.sw.client.command.DrawParentNodeCommand;
import org.kie.workbench.common.stunner.sw.client.services.ClientDiagramService;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.factory.DiagramFactory;
import org.kie.workbench.common.stunner.sw.service.MarshallUtils;
import org.kie.workbench.common.stunner.sw.service.Marshaller;
import org.kie.workbench.common.stunner.sw.service.MarshallerContext;
import org.kie.workbench.common.stunner.sw.spec.CNCFOnEvent;

// TODO: Drop and refactor.
@Dependent
public class EditorUtils {

    @Inject
    private MarshallUtils marshallUtils;
    @Inject
    private Marshaller marshaller;
    @Inject
    private DefinitionUtils definitionUtils;
    @Inject
    private DiagramFactory diagramFactory;
    @Inject
    private ShapeManager shapeManager;
    @Inject
    private FactoryManager factoryManager;
    @Inject
    private GraphIndexBuilder indexBuilder;

    @SuppressWarnings("all")
    public void drawOnEventsFromSelection(EditorSession session) {
        Collection<String> selectedItems = session.getSelectionControl().getSelectedItems();
        if (null != selectedItems && !selectedItems.isEmpty()) {
            String uuid = selectedItems.iterator().next();
            AbstractCanvasHandler canvasHandler = session.getCanvasHandler();
            Node node = canvasHandler.getGraphIndex().getNode(uuid);
            if (null != node) {
                Object definition = ((View) node.getContent()).getDefinition();
                if (definition instanceof EventState) {
                    EventState es = (EventState) definition;
                    String onEventsRaw = es.getOnEvents();
                    if (null != onEventsRaw) {
                        drawOnEvents(canvasHandler, node, onEventsRaw);
                    }
                }
            }
        }
    }

    @SuppressWarnings("all")
    public void drawOnEvents(AbstractCanvasHandler canvasHandler,
                             Node node,
                             String onEventsRaw) {
        final Object stateObject = Global.JSON.parse(onEventsRaw);
        final CNCFOnEvent[] onEvents = Js.uncheckedCast(stateObject);
        Bounds nodeBounds = ((View) node.getContent()).getBounds();
        // Build graph structure.
        final CompositeCommand.Builder storageCommands = new CompositeCommand.Builder();
        final CompositeCommand.Builder connectionCommands = new CompositeCommand.Builder();
        //final Point2D location = new Point2D(nodeBounds.getX(), nodeBounds.getY());
        final Point2D location = new Point2D(nodeBounds.getX(), 0);
        String onEventsUUID = marshaller.parseOnEvents(onEvents, null, null, location, storageCommands, connectionCommands);
        final CompositeCommand<GraphCommandExecutionContext, RuleViolation> all =
                new CompositeCommand.Builder<>()
                        .addCommand(storageCommands.build())
                        .addCommand(connectionCommands.build())
                        .build();
        final DirectGraphCommandExecutionContext graphContext =
                new DirectGraphCommandExecutionContext(definitionUtils.getDefinitionManager(),
                                                       factoryManager,
                                                       canvasHandler.getGraphIndex());
        all.execute(graphContext);

        // Draw graph structure.
        DrawParentNodeCommand drawParentNodeCommand = new DrawParentNodeCommand();
        drawParentNodeCommand.rootUUID = onEventsUUID;
        drawParentNodeCommand.execute(canvasHandler);

        presentModalContainer(canvasHandler, onEventsUUID);
    }

    private void presentModalContainer(AbstractCanvasHandler canvasHandler, String parentUUID) {

        Shape parentShape = canvasHandler.getCanvas().getShape(parentUUID);
        WiresShapeViewExt wiresParent = (WiresShapeViewExt) parentShape.getShapeView();
        Group parentGroup = wiresParent.getGroup();

        wiresParent.getShape().setShadow(new Shadow(ColorName.GREY, 5, 5, 5));
        parentGroup.setScale(new com.ait.lienzo.client.core.types.Point2D(0.5, 0.5));
        parentGroup.setAlpha(0);
        parentGroup.animate(AnimationTweener.EASE_IN,
                            AnimationProperties.toPropertyList(AnimationProperty.Properties.SCALE(1),
                                                               AnimationProperty.Properties.ALPHA(1)),
                            200,
                            new IAnimationCallback() {
                                @Override
                                public void onStart(IAnimation animation, IAnimationHandle handle) {

                                }

                                @Override
                                public void onFrame(IAnimation animation, IAnimationHandle handle) {

                                }

                                @Override
                                public void onClose(IAnimation animation, IAnimationHandle handle) {

                                }
                            });
    }

    @SuppressWarnings("all")
    public Graph parseOnEvents(String onEventsRaw) {
        final Object stateObject = Global.JSON.parse(onEventsRaw);
        final CNCFOnEvent[] onEvents = Js.uncheckedCast(stateObject);
        return createGraph((storageCommands, connectionCommands) -> {
            marshaller.parseOnEvents(onEvents, null, null, new Point2D(0, 0), storageCommands, connectionCommands);
        });
    }

    @SuppressWarnings("all")
    public Graph createGraph(BiConsumer<CompositeCommand.Builder, CompositeCommand.Builder> nodesBuilder) {
        log("Creating Example Diagram...");
        final CompositeCommand.Builder storageCommands = new CompositeCommand.Builder();
        final CompositeCommand.Builder connectionCommands = new CompositeCommand.Builder();

        // Graph.
        String graphUUID = MarshallerContext.generateUUID();
        final GraphImpl<Object> graph = GraphImpl.build(graphUUID);

        // Nodes, edges, etc.
        nodesBuilder.accept(storageCommands, connectionCommands);

        // Building graph.
        final Index index = indexBuilder.build(graph);
        final DirectGraphCommandExecutionContext context =
                new DirectGraphCommandExecutionContext(definitionUtils.getDefinitionManager(),
                                                       factoryManager,
                                                       index);
        final CompositeCommand<GraphCommandExecutionContext, RuleViolation> all =
                new CompositeCommand.Builder<>()
                        .addCommand(storageCommands.build())
                        .addCommand(connectionCommands.build())
                        .build();

        all.execute(context);

        return graph;
    }

    @SuppressWarnings("all")
    public Diagram createExampleDiagram() {
        final Graph<DefinitionSet, ?> graph =
                createGraph((storageCommands, connectionCommands) -> {
                    // State.
                    String nodeUUID = MarshallerContext.generateUUID();
                    InjectState state = new InjectState();
                    state.setName("Popup State");
                    Node node = marshallUtils.createNodeAt(nodeUUID, state, new Point2D(25, 25), storageCommands);
                });
        return createDiagram(graph);
    }

    @SuppressWarnings("all")
    public Diagram createDiagram(final Graph<DefinitionSet, ?> graph) {
        String definitionSetId = BindableAdapterUtils.getDefinitionSetId(Definitions.class);
        final Metadata metadata = new MetadataImpl.MetadataImplBuilder(definitionSetId, definitionUtils.getDefinitionManager()).build();
        final String title = "SW Test Diagram Popup";
        metadata.setTitle(title);
        final Diagram diagram = diagramFactory.build(title,
                                                     metadata,
                                                     graph);
        updateClientMetadata(diagram);
        return diagram;
    }

    @SuppressWarnings("all")
    private void updateClientMetadata(final Diagram diagram) {
        final Metadata metadata = diagram.getMetadata();
        // String rootUUID = marshaller.getContext().getUUID(WORKFLOW_UUID);
        // metadata.setCanvasRootUUID(rootUUID);
        if (ClientDiagramService.isEmpty(metadata.getShapeSetId())) {
            final String sId = shapeManager.getDefaultShapeSet(metadata.getDefinitionSetId()).getId();
            metadata.setShapeSetId(sId);
        }
    }

    @SuppressWarnings("all")
    public Diagram loadOnEvents(EditorSession session) {
        Collection<String> selectedItems = session.getSelectionControl().getSelectedItems();
        if (null != selectedItems && !selectedItems.isEmpty()) {
            String uuid = selectedItems.iterator().next();
            AbstractCanvasHandler canvasHandler = session.getCanvasHandler();
            Node node = canvasHandler.getGraphIndex().getNode(uuid);
            if (null != node) {
                Object definition = ((View) node.getContent()).getDefinition();
                if (definition instanceof EventState) {
                    EventState es = (EventState) definition;
                    String onEventsRaw = es.getOnEvents();
                    if (null != onEventsRaw) {
                        Graph graph = parseOnEvents(onEventsRaw);
                        return createDiagram(graph);
                    }
                }
            }
        }
        return null;
    }

    private static void log(String s) {
        DomGlobal.console.log(s);
    }
}
