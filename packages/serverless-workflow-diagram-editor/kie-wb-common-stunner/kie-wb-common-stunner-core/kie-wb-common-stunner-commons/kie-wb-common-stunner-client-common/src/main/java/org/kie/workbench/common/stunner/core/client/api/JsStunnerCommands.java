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

package org.kie.workbench.common.stunner.core.client.api;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommand;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandFactory;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.Bound;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.util.UUID;

// TODO: Refactor this API properly. Also move to cre.
@JsType
public class JsStunnerCommands {

    @JsIgnore
    private CanvasCommandFactory commandFactory;
    @JsIgnore
    private NodeFactory nodeFactory;
    @JsIgnore
    private EdgeFactory edgeFactory;
    @JsIgnore
    private JsStunnerSession session;

    public JsStunnerCommands(CanvasCommandFactory commandFactory, NodeFactory nodeFactory, EdgeFactory edgeFactory, JsStunnerSession session) {
        this.commandFactory = commandFactory;
        this.nodeFactory = nodeFactory;
        this.edgeFactory = edgeFactory;
        this.session = session;
    }

    public Node buildNode(Object def, double width, double height) {
        Node node = (Node) nodeFactory.build(UUID.uuid(), def);
        updateNodeBounds(node, width, height);
        return node;
    }

    public static void updateNodeBounds(Node<View, Edge> node, double width, double height) {
        final Bounds bounds = node.getContent().getBounds();
        final Bound upperLeft = bounds.getUpperLeft();
        bounds.setLowerRight(new Bound(upperLeft.getX() + width, upperLeft.getY() + height));
    }

    public Edge buildEdge(Object def) {
        Edge edge = (Edge) edgeFactory.build(UUID.uuid(), def);
        return edge;
    }

    public void addNode(Node node) {
        String rootUUID = session.getDiagram().getMetadata().getCanvasRootUUID();
        String shapeSetId = session.getDiagram().getMetadata().getShapeSetId();
        CanvasCommand command;
        if (null != rootUUID) {
            Node parent = session.getNodeByUUID(rootUUID);
            command = commandFactory.addChildNode(parent, node, shapeSetId);
        } else {
            command = commandFactory.addNode(node, shapeSetId);
        }
        execute(command);
    }

    public void deleteNode(Node node) {
        CanvasCommand command = commandFactory.deleteNode(node);
        execute(command);
    }

    public void updateNodePosition(Node node, double x, double y) {
        CanvasCommand command = commandFactory.updatePosition(node, new Point2D(x, y));
        execute(command);
    }

    public void updateFieldValue(Node node, String field, Object value) {
        CanvasCommand command = commandFactory.updatePropertyValue(node, field, value);
        execute(command);
    }

    public void draw() {
        CanvasCommand command = commandFactory.draw();
        execute(command);
    }

    // TODO: undo / redo ?

    private void execute(CanvasCommand command) {
        CommandResult result = session.execute(command);
        if (CommandResult.Type.ERROR.equals(result.getType())) {
            logError(result.getViolations().iterator().next().toString());
        }
    }

    private static void logError(String message) {
        DomGlobal.console.error(message);
    }
}
