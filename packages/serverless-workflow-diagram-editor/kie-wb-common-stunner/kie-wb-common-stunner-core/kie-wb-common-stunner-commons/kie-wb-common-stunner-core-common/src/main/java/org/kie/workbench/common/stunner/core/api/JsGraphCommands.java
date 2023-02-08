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

package org.kie.workbench.common.stunner.core.api;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommand;
import org.kie.workbench.common.stunner.core.graph.command.impl.GraphCommandFactory;
import org.kie.workbench.common.stunner.core.graph.content.Bound;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.view.MagnetConnection;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;

@JsType
public class JsGraphCommands {

    @JsIgnore
    private GraphCommandFactory commandFactory;
    @JsIgnore
    private NodeFactory nodeFactory;
    @JsIgnore
    private EdgeFactory edgeFactory;

    public JsGraphCommands(GraphCommandFactory commandFactory, NodeFactory nodeFactory, EdgeFactory edgeFactory) {
        this.commandFactory = commandFactory;
        this.nodeFactory = nodeFactory;
        this.edgeFactory = edgeFactory;
    }

    public Node buildNode(String uuid, Object def, double width, double height) {
        Node node = (Node) nodeFactory.build(uuid, def);
        updateNodeBounds(node, width, height);
        return node;
    }

    public static void updateNodeBounds(Node<View, Edge> node, double width, double height) {
        final Bounds bounds = node.getContent().getBounds();
        final Bound upperLeft = bounds.getUpperLeft();
        bounds.setLowerRight(new Bound(upperLeft.getX() + width, upperLeft.getY() + height));
    }

    public Edge buildEdge(String uuid, Object def) {
        Edge edge = (Edge) edgeFactory.build(uuid, def);
        return edge;
    }

    public GraphCommand addNode(Node node) {
        GraphCommand command = commandFactory.addNode(node);
        return command;
    }

    public GraphCommand addChildNode(Node parent, Node node) {
        GraphCommand command = commandFactory.addChildNode(parent, node);
        return command;
    }

    public GraphCommand deleteNode(Node node) {
        GraphCommand command = commandFactory.deleteNode(node);
        return command;
    }

    public GraphCommand changeLocation(Node node, double x, double y) {
        GraphCommand command = commandFactory.updatePosition(node, new Point2D(x, y));
        return command;
    }

    public GraphCommand updateFieldValue(Node node, String field, Object value) {
        GraphCommand command = commandFactory.updatePropertyValue(node, field, value);
        return command;
    }

    public GraphCommand addEdge(Edge edge, Node sourceNode) {
        GraphCommand command = commandFactory.addConnector(sourceNode,
                                                           edge,
                                                           MagnetConnection.Builder.atBottom(sourceNode));
        return command;
    }

    public GraphCommand connect(Edge edge, Node targetNode) {
        GraphCommand command = commandFactory.setTargetNode(targetNode, edge, MagnetConnection.Builder.at(0, 0));
        return command;
    }
}
