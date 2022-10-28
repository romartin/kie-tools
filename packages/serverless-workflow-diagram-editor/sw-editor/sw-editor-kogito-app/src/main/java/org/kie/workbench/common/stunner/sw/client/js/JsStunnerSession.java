package org.kie.workbench.common.stunner.sw.client.js;

import java.util.Collection;
import java.util.stream.StreamSupport;

import com.ait.lienzo.client.core.types.JsCanvas;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.definition.Definition;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;

// TODO: Move to stunner core
@JsType
public class JsStunnerSession {

    @JsIgnore
    private ViewerSession session;

    private JsDefinitionManager definitionManager;
    public JsCanvas canvas;
    public JsStunnerCommands commands;

    public JsStunnerSession(JsDefinitionManager definitionManager,
                            ViewerSession session,
                            JsCanvas canvas,
                            JsStunnerCommands commands) {
        this.definitionManager = definitionManager;
        this.session = session;
        this.canvas = canvas;
        this.commands = commands;
    }

    public String getSelectedElementUUID() {
        Collection<String> selectedItems = session.getSelectionControl().getSelectedItems();
        return selectedItems.isEmpty() ? null : selectedItems.iterator().next();
    }

    public Node getSelectedNode() {
        String selectedUUID = getSelectedElementUUID();
        return getNodeByUUID(selectedUUID);
    }

    public Edge getSelectedEdge() {
        String selectedUUID = getSelectedElementUUID();
        return getEdgeByUUID(selectedUUID);
    }

    public Object getSelectedDefinition() {
        Node node = getSelectedNode();
        View<?> content = (View<?>) node.getContent();
        Object definition = content.getDefinition();
        return definition;
    }

    // TODO: Multiple selection / center selection.
    public void selectByUUID(String uuid) {
        session.getSelectionControl().clearSelection().addSelection(uuid);
        canvas.center(uuid);
    }

    public void selectByName(String name) {
        Node node = getNodeByName(name);
        if (null != node) {
            selectByUUID(node.getUUID());
        }
    }

    public void clearSelection() {
        session.getSelectionControl().clearSelection();
    }

    public Node getNodeByUUID(String uuid) {
        return getGraphIndex().getNode(uuid);
    }

    public Node getNodeByName(String name) {
        Iterable<Node> nodes = getGraphIndex().getGraph().nodes();
        return StreamSupport.stream(nodes.spliterator(), false)
                .filter(node -> name.equals(getNodeName(node)))
                .findAny()
                .orElse(null);
    }

    public String getNodeName(Node node) {
        Object definition = ((Node<Definition, Edge>) node).getContent().getDefinition();
        return getName(definition);
    }

    public String getName(Object bean) {
        return definitionManager.getName(bean);
    }

    public Edge getEdgeByUUID(String uuid) {
        return getGraphIndex().getEdge(uuid);
    }

    private Index getGraphIndex() {
        return getCanvasHandler().getGraphIndex();
    }

    private AbstractCanvasHandler getCanvasHandler() {
        return session.getCanvasHandler();
    }
}
