package org.kie.workbench.common.stunner.sw.client.js;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommand;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandFactory;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.util.UUID;
import org.kie.workbench.common.stunner.sw.marshall.BuilderContext;

// TODO: Move to stunner core
// TODO: Allow composition of commands at API level?
@JsType
public class JsStunnerCommands {

    @JsIgnore
    private CanvasCommandFactory commandFactory;
    @JsIgnore
    private NodeFactory nodeFactory;
    @JsIgnore
    private EdgeFactory edgeFactory;
    @JsIgnore
    private ViewerSession session;

    public JsStunnerCommands(CanvasCommandFactory commandFactory, NodeFactory nodeFactory, EdgeFactory edgeFactory, ViewerSession session) {
        this.commandFactory = commandFactory;
        this.nodeFactory = nodeFactory;
        this.edgeFactory = edgeFactory;
        this.session = session;
    }

    public Node buildNode(Object def) {
        Node node = (Node) nodeFactory.build(UUID.uuid(), def);
        BuilderContext.updateNodeBounds(node);
        return node;
    }

    public Edge buildEdge(Object def) {
        Edge edge = (Edge) edgeFactory.build(UUID.uuid(), def);
        return edge;
    }

    public void addNode(Node node) {
        String rootUUID = session.getCanvasHandler().getDiagram().getMetadata().getCanvasRootUUID();
        CanvasCommand command;
        if (null != rootUUID) {
            Node parent = session.getCanvasHandler().getGraphIndex().getNode(rootUUID);
            command = commandFactory.addChildNode(parent, node, getShapeSetId());
        } else {
            command = commandFactory.addNode(node, getShapeSetId());
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
        CommandResult result = session.getCommandManager().execute(session.getCanvasHandler(), command);
        if (CommandResult.Type.ERROR.equals(result.getType())) {
            logError(result.getViolations().iterator().next().toString());
        }
    }

    private String getShapeSetId() {
        return session.getCanvasHandler().getDiagram().getMetadata().getShapeSetId();
    }

    private static void logError(String message) {
        DomGlobal.console.error(message);
    }
}
