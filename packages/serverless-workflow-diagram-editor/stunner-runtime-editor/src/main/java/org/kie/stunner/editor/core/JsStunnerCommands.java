package org.kie.stunner.editor.core;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.api.JsStunnerSession;
import org.kie.workbench.common.stunner.core.client.api.JsWindow;
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

// TODO: Command composition?
// TODO: undo / redo ?
// TODO: Split into commands API (Command/Result) & Actions API (commands shortcuts)
@JsType
public class JsStunnerCommands {

    @JsIgnore
    private CanvasCommandFactory commandFactory;
    @JsIgnore
    private NodeFactory nodeFactory;
    @JsIgnore
    private EdgeFactory edgeFactory;

    public static JsStunnerCommands build(CanvasCommandFactory commandFactory, NodeFactory nodeFactory, EdgeFactory edgeFactory) {
        JsStunnerCommands commands = new JsStunnerCommands();
        commands.commandFactory = commandFactory;
        commands.nodeFactory = nodeFactory;
        commands.edgeFactory = edgeFactory;
        org.kie.stunner.editor.core.JsWindow.commands = commands;
        return commands;
    }

    public JsStunnerCommands() {
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
        String rootUUID = getSession().getDiagram().getMetadata().getCanvasRootUUID();
        String shapeSetId = getSession().getDiagram().getMetadata().getShapeSetId();
        CanvasCommand command;
        if (null != rootUUID) {
            Node parent = getSession().getNodeByUUID(rootUUID);
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

    private void execute(CanvasCommand command) {
        CommandResult result = getSession().execute(command);
        if (CommandResult.Type.ERROR.equals(result.getType())) {
            logError(result.getViolations().iterator().next().toString());
        }
    }

    private JsStunnerSession getSession() {
        return JsWindow.editor.session;
    }

    private static void logError(String message) {
        DomGlobal.console.error(message);
    }
}