package org.kie.workbench.common.stunner.sw.client.js;

import java.util.Collection;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;

// TODO: Move to stunner core
@JsType
public class JsStunnerSession {

    @JsIgnore
    private ViewerSession session;

    public JsStunnerSession(ViewerSession session) {
        this.session = session;
    }

    public String getSelectedElementUUID() {
        Collection<String> selectedItems = session.getSelectionControl().getSelectedItems();
        return selectedItems.isEmpty() ? null : selectedItems.iterator().next();
    }

    public Node getSelectedNode() {
        String selectedUUID = getSelectedElementUUID();
        return getNode(selectedUUID);
    }

    public Edge getSelectedEdge() {
        String selectedUUID = getSelectedElementUUID();
        return getEdge(selectedUUID);
    }

    public Object getSelectedDefinition() {
        Node node = getSelectedNode();
        View<?> content = (View<?>) node.getContent();
        Object definition = content.getDefinition();
        return definition;
    }

    public Node getNode(String uuid) {
        return getGraphIndex().getNode(uuid);
    }

    public Edge getEdge(String uuid) {
        return getGraphIndex().getEdge(uuid);
    }

    private Index getGraphIndex() {
        return getCanvasHandler().getGraphIndex();
    }

    private AbstractCanvasHandler getCanvasHandler() {
        return session.getCanvasHandler();
    }
}
