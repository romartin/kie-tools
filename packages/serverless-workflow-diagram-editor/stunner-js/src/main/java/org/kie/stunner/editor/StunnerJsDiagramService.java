/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

package org.kie.stunner.editor;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.core.Global;
import elemental2.core.JsArray;
import elemental2.promise.Promise;
import org.kie.stunner.editor.workflow.Activity;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerWindow;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.api.JsGraphCommands;
import org.kie.workbench.common.stunner.core.api.JsGraphExecutionContext;
import org.kie.workbench.common.stunner.core.client.api.ShapeManager;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.diagram.MetadataImpl;
import org.kie.workbench.common.stunner.core.factory.diagram.DiagramFactory;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.impl.GraphCommandFactory;
import org.uberfire.client.promise.Promises;

@ApplicationScoped
public class StunnerJsDiagramService {

    @Inject
    DefinitionManager definitionManager;
    @Inject
    DiagramFactory diagramFactory;
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
    @Inject
    Promises promises;

    @SuppressWarnings("all")
    public Promise<Diagram> parse(String definitionSetId, String content) {
        JsGraphExecutionContext executionContext =
                JsGraphExecutionContext.create("sw_graph")
                        .bind(definitionManager,
                              factoryManager,
                              new JsGraphCommands(commandFactory,
                                                  nodeFactory,
                                                  edgeFactory));

        if (true) {
            JsStunnerWindow.editor
                    .parser
                    .parse(executionContext, content);
        }

        if (false) {
            executionContext
                    // .addRootNode("sw_root_node", new Workflow())
                    .addNode("activity1", new Activity().setName("Activity1"))
                    .setLocation("activity1", 350, 220);
            //.addNode("end", new End())
            //.changeLocation("end", 420, 470)
            //.addEdge("state1_to_end", new Transition(), "state1")
            //.connect("state1_to_end", "end");
        }

        String ssid = shapeManager.getDefaultShapeSet(definitionSetId).getId();
        Diagram diagram = createDiagram(definitionSetId, "SW Test Diagram", executionContext.graph);
        // TODO diagram.getMetadata().setCanvasRootUUID(executionContext.root.getUUID());
        diagram.getMetadata().setShapeSetId(ssid);

        return promises.resolve(diagram);
    }

    public String format(Diagram diagram) {
        if (true) {
            return "";
        }
        Graph graph = diagram.getGraph();
        Iterable<Node> nodes = graph.nodes();
        JsArray<Node> nodesArray = new JsArray<>();
        nodes.spliterator().forEachRemaining(nodesArray::push);
        return Global.JSON.stringify(nodesArray,
                                     (field, object) -> {
                                         // DomGlobal.console.log("p0: " + field);
                                         //DomGlobal.console.log("object: " + object);
                                         return field.contains("_") ? null : object;
                                     });
    }

    @SuppressWarnings("all")
    private Diagram createDiagram(String definitionSetId,
                                  String title,
                                  Graph graph) {
        final Metadata metadata = new MetadataImpl.MetadataImplBuilder(definitionSetId,
                                                                       definitionManager).build();
        metadata.setTitle(title);
        return diagramFactory.build(title, metadata, graph);
    }
}
