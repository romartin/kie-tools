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
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Event;
import javax.enterprise.event.Observes;
import javax.inject.Inject;

import com.ait.lienzo.client.core.animation.AnimationCallback;
import com.ait.lienzo.client.core.animation.AnimationProperties;
import com.ait.lienzo.client.core.animation.AnimationProperty;
import com.ait.lienzo.client.core.animation.AnimationTweener;
import com.ait.lienzo.client.core.animation.IAnimation;
import com.ait.lienzo.client.core.animation.IAnimationHandle;
import com.ait.lienzo.client.core.shape.Layer;
import com.ait.lienzo.client.core.shape.Viewport;
import com.ait.lienzo.client.core.types.BoundingBox;
import com.ait.lienzo.client.core.types.Transform;
import com.ait.lienzo.client.widget.panel.Bounds;
import com.ait.lienzo.client.widget.panel.LienzoBoundsPanel;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import elemental2.dom.DomGlobal;
import org.kie.workbench.common.stunner.client.lienzo.canvas.wires.WiresCanvas;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.wires.ext.WiresShapeViewExt;
import org.kie.workbench.common.stunner.client.widgets.canvas.ScrollableLienzoPanel;
import org.kie.workbench.common.stunner.core.client.api.SessionManager;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.event.selection.CanvasClearSelectionEvent;
import org.kie.workbench.common.stunner.core.client.canvas.event.selection.CanvasSelectionEvent;
import org.kie.workbench.common.stunner.core.client.session.ClientSession;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.view.View;

// TODO: This is just a PoC.
@ApplicationScoped
public class EditorFlowNavigator {

    @Inject
    private SessionManager sessionManager;
    @Inject
    private Event<ShowPreviewEvent> showPreviewEvent;
    @Inject
    private Event<HidePreviewEvent> hidePreviewEvent;

    private ViewerSession session;

    public void enable() {
        ClientSession current = sessionManager.getCurrentSession();
        if (current instanceof ViewerSession) {
            session = (ViewerSession) current;
        } else {
            throw new UnsupportedOperationException(getClass().getSimpleName() + " only works when editor is in readOnly mode.");
        }
        scaleToFitWorkflow();
        CustomZoomLevelSelectorPresenter.isResetCustomized = true;
        StateDetailsPresenter.ENABLED = true;
    }

    public boolean isEnabled() {
        return null != session;
    }

    void onCanvasSelectionEvent(@Observes CanvasSelectionEvent event) {
        if (isEnabled()) {
            if (event.getIdentifiers().size() == 1) {
                final String uuid = event.getIdentifiers().iterator().next();
                select(uuid);
            } else {
                clearSelection();
            }
        }
    }

    void onCanvasClearSelectionEvent(@Observes CanvasClearSelectionEvent event) {
        if (isEnabled()) {
            clearSelection();
        }
    }

    void select(String uuid) {
        if (isEnabled() && !isCanvasRoot(uuid)) {
            Node node = getCanvasHandler().getGraphIndex().getNode(uuid);
            centerArea(node);
            showPreviewEvent.fire(new ShowPreviewEvent());
        }
    }

    void clearSelection() {
        if (isEnabled()) {
            scaleToFitWorkflow();
            clearShapesAlpha();
            hidePreviewEvent.fire(new HidePreviewEvent());
        }
    }

    private void computeEdgesBB(List<Edge> edges, boolean isTargetNotSource, BoundingBox box) {
        if (null == edges) {
            return;
        }
        for (Edge edge : edges) {
            Object content = edge.getContent();
            if (content instanceof View) {
                Node node = isTargetNotSource ? edge.getTargetNode() : edge.getSourceNode();
                if (null != node) {
                    BoundingBox bb = getShapeBB(node);
                    box.addBoundingBox(bb);
                }
            }
        }
    }

    private void centerArea(Node sourceNode) {
        BoundingBox box = new BoundingBox();
        BoundingBox shapeBB = getShapeBB(sourceNode);
        box.addBoundingBox(shapeBB);
        computeEdgesBB(sourceNode.getOutEdges(), true, box);
        computeEdgesBB(sourceNode.getInEdges(), false, box);

        highlightSelectionFlow(sourceNode);
        transformViewport(box);
    }

    private BoundingBox getShapeBB(Node node) {
        String uuid = node.getUUID();
        Shape shape = getCanvas().getShape(uuid);
        WiresShapeViewExt shapeView = (WiresShapeViewExt) shape.getShapeView();
        return shapeView.getGroup().getComputedBoundingPoints().getBoundingBox();
    }

    private static final double BOX_PADDING = 0d;

    private void transformViewport(BoundingBox boundingBox) {
        Layer layer = getLienzoLayer();
        Viewport viewport = layer.getViewport();
        ScrollableLienzoPanel stunnerPanel = getScrollableLienzoPanel();
        ScrollablePanel lienzoPanel = stunnerPanel.getView();
        double x = boundingBox.getX() - BOX_PADDING;
        double y = boundingBox.getY() - BOX_PADDING;
        double width = boundingBox.getWidth() + (BOX_PADDING * 2);
        double height = boundingBox.getHeight() + (BOX_PADDING * 2);
        int widePx = lienzoPanel.getWidePx();
        int highPx = lienzoPanel.getHighPx();
        double sx = widePx / width;
        double sy = highPx / height;

        Transform areaTransform = new Transform();
        //areaTransform.scaleWithXY(sx, sy);
        areaTransform.translate(-x, -y);

        // Apply Transform.
        applyViewportTransform(lienzoPanel, areaTransform);
    }

    private void applyViewportTransform(ScrollablePanel lienzoPanel, Transform transform) {
        boolean animate = true;
        Viewport viewport = lienzoPanel.getViewport();
        if (animate) {
            viewport.animate(AnimationTweener.LINEAR,
                             AnimationProperties.toPropertyList(
                                     AnimationProperty.Properties.TRANSFORM(transform)
                             ),
                             150,
                             new AnimationCallback() {
                                 @Override
                                 public void onClose(IAnimation animation, IAnimationHandle handle) {
                                     super.onClose(animation, handle);
                                     lienzoPanel.onRefresh();
                                 }
                             });
        } else {
            viewport.setTransform(transform);
            lienzoPanel.onRefresh();
        }
    }

    private static Set<String> computeUUIDFlow(Node sourceNode) {
        Set<String> uuids = new LinkedHashSet<>();
        uuids.add(sourceNode.getUUID());
        List<Edge> outEdges = sourceNode.getOutEdges();
        for (Edge outEdge : outEdges) {
            Object content = outEdge.getContent();
            if (content instanceof View) {
                uuids.add(outEdge.getUUID());
                Node targetNode = outEdge.getTargetNode();
                if (null != targetNode) {
                    uuids.add(targetNode.getUUID());
                }
            }
        }
        return uuids;
    }

    private void highlightSelectionFlow(Node sourceNode) {
        Set<String> nodeFlow = computeUUIDFlow(sourceNode);
        if (nodeFlow.size() > 1) {
            clearShapesAlpha();
            changeShapesAlpha(0.3, nodeFlow);
        }
    }

    private void clearShapesAlpha() {
        changeShapesAlpha(1, Collections.emptySet());
    }

    private void changeShapesAlpha(double value, Set<String> filter) {
        Collection<Shape> shapes = getCanvas().getShapes();
        for (Shape shape : shapes) {
            if (!filter.contains(shape.getUUID())) {
                if (null != shape.getShapeView()) {
                    shape.getShapeView().setAlpha(value);
                }
            }
        }
        getLienzoLayer().batch();
    }

    private void scaleToFitWorkflow() {
        ScrollableLienzoPanel stunnerPanel = getScrollableLienzoPanel();
        ScrollablePanel lienzoPanel = stunnerPanel.getView();
        // double scale = TODO is PanelTransformUtils.computeZoomLevelFitToWidth(lienzoPanel) wrong?
        double scale = computeZoomLevelFitToWidth(lienzoPanel);
        DomGlobal.console.log("COMPUTING INITIAL SCALE LEVEL = " + scale);
        if (scale > 0) {
            setScaleLevel(scale);
            lienzoPanel.getViewport().draw();
        }
    }

    public static double computeZoomLevelFitToWidth(final LienzoBoundsPanel panel) {
        final double panelWidth = panel.getWidePx();
        final double panelHeight = panel.getHighPx();
        return computeZoomLevelFitToWidth(panelWidth, panelHeight, panel);
    }

    public static double computeZoomLevelFitToWidth(final double width,
                                                    final double height,
                                                    final LienzoBoundsPanel panel) {
        final Bounds layerBounds = panel.getLayerBounds();
        final double layerWidth = layerBounds.getWidth();
        final double layerHeight = layerBounds.getHeight();
        DomGlobal.console.log("INITIAL WIDTH = " + layerWidth);
        DomGlobal.console.log("INITIAL HEIGHT = " + layerHeight);
        // TODO Consider pixel size
        double widthRatio = width / layerWidth;
        double heightRatio = height / layerHeight;
        final double level = Math.min(widthRatio, heightRatio);
        return level < 1 ? level : 1;
    }

    private ScrollableLienzoPanel getScrollableLienzoPanel() {
        return (ScrollableLienzoPanel) getCanvas().getView().getPanel();
    }

    // TODO: Do not exceed zoom limits (min/max)
    private void setScaleLevel(double level) {
        // PanelTransformUtils.setScaleLevel(getLienzoLayer().getViewport(), level);
        final Transform transform = new Transform();
        transform.translate(0, 0);
        transform.scale(level);
        applyViewportTransform(getScrollableLienzoPanel().getView(), transform);
    }

    private AbstractCanvasHandler getCanvasHandler() {
        return session.getCanvasHandler();
    }

    private WiresCanvas getCanvas() {
        return (WiresCanvas) getCanvasHandler().getAbstractCanvas();
    }

    private Layer getLienzoLayer() {
        return getCanvas().getView().getLayer().getLienzoLayer();
    }

    private boolean isCanvasRoot(String uuid) {
        String canvasRootUUID = getCanvasHandler().getDiagram().getMetadata().getCanvasRootUUID();
        return canvasRootUUID.equals(uuid);
    }
}
