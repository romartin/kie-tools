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

import elemental2.core.Global;
import elemental2.core.JsArray;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.api.JsGraphExecutionContext;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.adapter.PropertyAdapter;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewConnector;
import org.kie.workbench.common.stunner.core.graph.processing.traverse.tree.TreeTraverseCallback;
import org.kie.workbench.common.stunner.core.graph.processing.traverse.tree.TreeWalkTraverseProcessorImpl;

@JsType
public class JSONGraphMarshaller {

    @JsIgnore
    private DefinitionManager definitionManager;
    @JsIgnore
    private FactoryManager factoryManager;

    public static JSONGraphMarshaller create(DefinitionManager definitionManager,
                                             FactoryManager factoryManager) {
        JSONGraphMarshaller marshaller = new JSONGraphMarshaller();
        marshaller.definitionManager = definitionManager;
        marshaller.factoryManager = factoryManager;
        return marshaller;
    }

    @JsType
    public static class JSONNode {

        public String uuid;
        public JSONDefinition definition;
        public JSONBounds bounds;
    }

    @JsType
    public static class JSONBounds {

        public double ul_x;
        public double ul_y;
        public double lr_x;
        public double lr_y;
    }

    @JsType
    public static class JSONEdge {

        public String uuid;
        public JSONDefinition definition;
        public String sourceUUID;
        public String targetUUID;
    }

    @JsType
    public static class JSONGraph {

        public JsArray<JSONNode> nodes;
        public JsArray<JSONEdge> edges;
    }

    @JsType
    public static class JSONDefinition {

        public String id;
        public JsArray<JSONDefinitionProperty> properties;
    }

    @JsType
    public static class JSONDefinitionProperty {

        public String id;
        public Object value;
    }

    public void parseExample(JsGraphExecutionContext context) {
        parse(context, JSONGraphExample.EXAMPLE);
    }

    public void parse(JsGraphExecutionContext context, String raw) {
        Object parsed = Global.JSON.parse(raw);
        JSONGraph graph = Js.uncheckedCast(parsed);
        JSONNode[] nodes = Js.uncheckedCast(graph.nodes);
        for (JSONNode jsonNode : nodes) {
            JSONDefinition jsonDefinition = Js.uncheckedCast(jsonNode.definition);
            Object definition = parseJSONDefinition(definitionManager, factoryManager, jsonDefinition);
            context.addNode(jsonNode.uuid, definition);
            context.setLocation(jsonNode.uuid, jsonNode.bounds.ul_x, jsonNode.bounds.lr_y);
        }
        JSONEdge[] edges = Js.uncheckedCast(graph.edges);
        for (JSONEdge jsonEdge : edges) {
            JSONDefinition jsonDefinition = Js.uncheckedCast(jsonEdge.definition);
            Object definition = parseJSONDefinition(definitionManager, factoryManager, jsonDefinition);
            context.addEdge(jsonEdge.uuid, definition, jsonEdge.sourceUUID);
            context.connect(jsonEdge.uuid, jsonEdge.targetUUID);
        }
    }

    @JsIgnore
    private static Object parseJSONDefinition(DefinitionManager definitionManager,
                                              FactoryManager factoryManager,
                                              JSONDefinition jsonDefinition) {
        final DefinitionAdapter<Object> definitionAdapter = definitionManager.adapters().forDefinition();
        final PropertyAdapter<Object, Object> propertyAdapter = definitionManager.adapters().forProperty();
        final String id = jsonDefinition.id;
        final Object definition = factoryManager.newDefinition(id);
        final JSONDefinitionProperty[] properties = Js.uncheckedCast(jsonDefinition.properties);
        for (JSONDefinitionProperty property : properties) {
            Object p = definitionAdapter.getProperty(definition, property.id).get();
            propertyAdapter.setValue(p, property.value);
        }
        return definition;
    }

    @JsIgnore
    private static JSONDefinition toJSONDefinition(DefinitionManager definitionManager,
                                                   Object definition) {
        final DefinitionAdapter<Object> definitionAdapter = definitionManager.adapters().forDefinition();
        final PropertyAdapter<Object, Object> propertyAdapter = definitionManager.adapters().forProperty();

        final JSONDefinition jsonDefinition = new JSONDefinition();
        jsonDefinition.id = definitionAdapter.getId(definition).value();
        jsonDefinition.properties = new JsArray<>();
        String[] propertyFields = definitionAdapter.getPropertyFields(definition);
        for (String propertyField : propertyFields) {
            Object p = definitionAdapter.getProperty(definition, propertyField).get();
            Object value = propertyAdapter.getValue(p);
            JSONDefinitionProperty jsonDefinitionProperty = new JSONDefinitionProperty();
            jsonDefinitionProperty.id = propertyField;
            jsonDefinitionProperty.value = value;
            jsonDefinition.properties.push(jsonDefinitionProperty);
        }

        return jsonDefinition;
    }

    public String stringify(Graph graph) {
        final JSONGraph jsonGraph = new JSONGraph();
        jsonGraph.nodes = new JsArray<>();
        jsonGraph.edges = new JsArray<>();

        new TreeWalkTraverseProcessorImpl()
                .traverse(graph, new TreeTraverseCallback<Graph, Node, Edge>() {
                    @Override
                    public void startGraphTraversal(Graph graph) {

                    }

                    @Override
                    public boolean startNodeTraversal(Node node) {
                        JSONNode jsonNode = new JSONNode();
                        jsonNode.uuid = node.getUUID();
                        View content = (View) node.getContent();
                        Object definition = content.getDefinition();
                        JSONDefinition jsonDefinition = toJSONDefinition(definitionManager, definition);
                        jsonNode.definition = jsonDefinition;
                        jsonNode.bounds = new JSONBounds();
                        jsonNode.bounds.ul_x = content.getBounds().getUpperLeft().getX();
                        jsonNode.bounds.ul_y = content.getBounds().getUpperLeft().getY();
                        jsonNode.bounds.lr_x = content.getBounds().getLowerRight().getX();
                        jsonNode.bounds.lr_y = content.getBounds().getLowerRight().getY();

                        jsonGraph.nodes.push(jsonNode);
                        return true;
                    }

                    @Override
                    public boolean startEdgeTraversal(Edge edge) {
                        JSONEdge jsonEdge = new JSONEdge();
                        jsonEdge.uuid = edge.getUUID();
                        jsonEdge.sourceUUID = null != edge.getSourceNode() ? edge.getSourceNode().getUUID() : "";
                        jsonEdge.targetUUID = null != edge.getTargetNode() ? edge.getTargetNode().getUUID() : "";
                        ViewConnector content = (ViewConnector) edge.getContent();
                        Object definition = content.getDefinition();
                        jsonEdge.definition = toJSONDefinition(definitionManager, definition);

                        jsonGraph.edges.push(jsonEdge);
                        return true;
                    }

                    @Override
                    public void endNodeTraversal(Node node) {

                    }

                    @Override
                    public void endEdgeTraversal(Edge edge) {

                    }

                    @Override
                    public void endGraphTraversal() {

                    }
                });

        return Global.JSON.stringify(jsonGraph);
    }
}
