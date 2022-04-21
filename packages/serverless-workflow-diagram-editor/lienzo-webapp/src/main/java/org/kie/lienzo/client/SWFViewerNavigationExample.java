package org.kie.lienzo.client;

import com.ait.lienzo.client.core.animation.AnimationCallback;
import com.ait.lienzo.client.core.animation.AnimationProperties;
import com.ait.lienzo.client.core.animation.AnimationProperty;
import com.ait.lienzo.client.core.animation.AnimationTweener;
import com.ait.lienzo.client.core.animation.IAnimation;
import com.ait.lienzo.client.core.animation.IAnimationHandle;
import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.Rectangle;
import com.ait.lienzo.client.core.shape.Text;
import com.ait.lienzo.client.core.shape.Viewport;
import com.ait.lienzo.client.core.shape.wires.IConnectionAcceptor;
import com.ait.lienzo.client.core.shape.wires.IContainmentAcceptor;
import com.ait.lienzo.client.core.shape.wires.IControlPointsAcceptor;
import com.ait.lienzo.client.core.shape.wires.IDockingAcceptor;
import com.ait.lienzo.client.core.shape.wires.ILocationAcceptor;
import com.ait.lienzo.client.core.shape.wires.LayoutContainer;
import com.ait.lienzo.client.core.shape.wires.WiresConnection;
import com.ait.lienzo.client.core.shape.wires.WiresConnector;
import com.ait.lienzo.client.core.shape.wires.WiresMagnet;
import com.ait.lienzo.client.core.shape.wires.WiresManager;
import com.ait.lienzo.client.core.shape.wires.WiresShape;
import com.ait.lienzo.client.core.types.BoundingBox;
import com.ait.lienzo.client.core.types.Point2D;
import com.ait.lienzo.client.core.types.Transform;
import com.ait.lienzo.client.widget.panel.LienzoPanel;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import com.ait.lienzo.shared.core.types.ColorName;
import com.ait.lienzo.tools.client.collection.NFastArrayList;
import com.google.gwt.dom.client.Style;
import elemental2.dom.CSSProperties;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;

import static org.kie.lienzo.client.util.WiresUtils.connect;

public class SWFViewerNavigationExample extends BaseExample implements Example {

    public static final int SHAPES_COUNT = 20;
    public static final String SHAPE_PREFIX = "shape";

    private WiresManager wiresManager;
    private WiresShape[] shapes;
    private MediatorsPanel mediatorsPanel;

    public SWFViewerNavigationExample(final String title) {
        super(title);
    }

    @Override
    public LienzoPanel createPanel() {
        ScrollablePanel panel = (ScrollablePanel) super.createPanel();
        return panel;
    }

    @Override
    public void init(LienzoPanel panel, HTMLDivElement topDiv) {
        super.init(panel, topDiv);
        topDiv.style.display = Style.Display.INLINE_TABLE.getCssName();
        mediatorsPanel = new MediatorsPanel(layer.getViewport());
        topDiv.appendChild(mediatorsPanel.panel);
        forceParentPanelSize((ScrollablePanel) panel);
    }

    private static int PANEL_WIDE_PX = 800;
    private static int PANEL_HIGH_PX = 600;

    private static void forceParentPanelSize(ScrollablePanel panel) {
        panel.getPanelParent().style.width = CSSProperties.WidthUnionType.of(PANEL_WIDE_PX + "px");
        panel.getPanelParent().style.height = CSSProperties.HeightUnionType.of(PANEL_HIGH_PX + "px");
    }

    private static class MediatorsPanel {
        final Viewport viewport;
        HTMLDivElement panel;
        HTMLDivElement scaleLevel;
        HTMLDivElement translationLevel;
        HTMLButtonElement reset;

        public MediatorsPanel(Viewport viewport) {
            this.viewport = viewport;
            panel = createDiv();
            panel.style.display = "inline-block";
            panel.style.position = "absolute";
            panel.style.padding = CSSProperties.PaddingUnionType.of("5px");
            panel.style.border = "1px dotted";
            panel.style.zIndex = CSSProperties.ZIndexUnionType.of(10);
            panel.style.background = "lightgrey";
            panel.style.fontStyle = "oblique";
            panel.style.fontWeight = "bold";
            panel.style.top = "5px";
            panel.style.left = "160px";
            translationLevel = createDiv();
            scaleLevel = createDiv();
            updatePanelLevels(new Point2D(0, 0), new Point2D(1, 1));
            panel.appendChild(translationLevel);
            panel.appendChild(scaleLevel);
            reset = createButton("(/)", this::onReset);
            panel.appendChild(reset);
        }

        void refresh() {
            Point2D t = new Point2D(viewport.getTransform().getTranslateX(), viewport.getTransform().getTranslateY());
            Point2D s = new Point2D(viewport.getTransform().getScaleX(), viewport.getTransform().getScaleY());
            updatePanelLevels(t, s);
        }

        void updatePanelLevels(Point2D t, Point2D s) {
            translationLevel.textContent = parseTranslationLevel(t);
            scaleLevel.textContent = parseScaleionLevel(s);
        }

        void onReset() {
            Point2D t = new Point2D(0, 0);
            Point2D s = new Point2D(1, 1);
            Transform transform = new Transform()
                    .translate(t.getX(), t.getY())
                    .scaleWithXY(s.getX(), s.getY());
            viewport.setTransform(transform);
            viewport.draw();
            updatePanelLevels(t, s);
        }

        private static String parseTranslationLevel(Point2D level) {
            return "T=[" + level.getX() + ", " + level.getY() + "]";
        }

        private static String parseScaleionLevel(Point2D level) {
            return "S=[" + level.getX() + ", " + level.getY() + "]";
        }
    }

    @Override
    public void run() {
        wiresManager = WiresManager.get(layer);
        wiresManager.enableSelectionManager();
        wiresManager.setContainmentAcceptor(IContainmentAcceptor.ALL);
        wiresManager.setDockingAcceptor(IDockingAcceptor.ALL);
        wiresManager.setConnectionAcceptor(IConnectionAcceptor.ALL);
        wiresManager.setLocationAcceptor(ILocationAcceptor.ALL);
        wiresManager.setControlPointsAcceptor(IControlPointsAcceptor.ALL);

        // Reset viewport.
        layer.addNodeMouseClickHandler(event -> changeViewportTransform(new Transform()));

        // Viewport area.
        Rectangle viewportBounds = new Rectangle(PANEL_WIDE_PX, PANEL_HIGH_PX)
                .setX(0)
                .setY(0)
                .setListening(false)
                .setDraggable(false)
                .setFillAlpha(0)
                .setStrokeAlpha(1)
                .setStrokeColor(ColorName.RED)
                .setDashArray(5, 5, 5);
        layer.add(viewportBounds);

        // Shapes.
        shapes = new WiresShape[SHAPES_COUNT];
        double x = 50;
        double y = 50;
        for (int i = 0; i < SHAPES_COUNT; i++) {
            WiresShape shape = createShape(i,
                                           new MultiPath().rect(0, 0, 50, 50)
                                                   .setStrokeColor("#FF0000")
                                                   .setFillColor("#FF0000"),
                                           new Point2D(x, y));
            if (i > 0) {
                WiresShape before = shapes[i - 1];
                connect(before.getMagnets(),
                        5,
                        shape.getMagnets(),
                        1,
                        wiresManager,
                        false);
            }
            addHandlers(shape);
            shapes[i] = shape;
            x += 100;
            y += 100;
        }
        mediatorsPanel.refresh();
    }

    private Rectangle flowArea;

    private void select(WiresShape shape) {
        if (null != shape) {
            center(shape);
        }
    }

    private void center(WiresShape shape) {
        if (null != shape) {
            // Calculate flow area (BB) for shape + in + out
            BoundingBox shapesBB = new BoundingBox();
            BoundingBox bb = getBB(shape);
            shapesBB.addBoundingBox(bb);
            WiresMagnet topMagnet = shape.getMagnets().getMagnet(1);
            NFastArrayList<WiresConnection> inConnections = topMagnet.getConnections();
            if (null != inConnections && !inConnections.isEmpty()) {
                WiresConnection inConnection = inConnections.get(0);
                WiresConnector inConnector = inConnection.getConnector();
                if (null != inConnector) {
                    WiresConnection headConnection = inConnector.getHeadConnection();
                    if (null != headConnection) {
                        WiresShape inShape = headConnection.getMagnet().getMagnets().getWiresShape();
                        if (null != inShape) {
                            BoundingBox boundingBox = getBB(inShape);
                            shapesBB.addBoundingBox(boundingBox);
                        }
                    }
                }
            }
            WiresMagnet bottomMagnet = shape.getMagnets().getMagnet(5);
            NFastArrayList<WiresConnection> outConnections = bottomMagnet.getConnections();
            if (null != outConnections && !outConnections.isEmpty()) {
                WiresConnection outConnection = outConnections.get(0);
                WiresConnector outConnector = outConnection.getConnector();
                if (null != outConnector) {
                    WiresConnection tailConnection = outConnector.getTailConnection();
                    if (null != tailConnection) {
                        WiresShape outShape = tailConnection.getMagnet().getMagnets().getWiresShape();
                        if (null != outShape) {
                            BoundingBox boundingBox = getBB(outShape);
                            shapesBB.addBoundingBox(boundingBox);
                        }
                    }
                }
            }

            // Flow area rectangle.
            DomGlobal.console.log("PROPOSED LOC = [" + shapesBB.getX() + ", " + shapesBB.getY() + "]");
            DomGlobal.console.log("PROPOSED SIZE = [" + shapesBB.getWidth() + ", " + shapesBB.getHeight() + "]");
            if (null != flowArea) {
                flowArea.removeFromParent();
            }
            layer.add(flowArea = new Rectangle(shapesBB.getWidth(), shapesBB.getHeight())
                    .setX(shapesBB.getX())
                    .setY(shapesBB.getY())
                    .setFillAlpha(0)
                    .setStrokeAlpha(1)
                    .setStrokeColor(ColorName.BLACK)
                    .setStrokeWidth(2));

            // TODO: Just change current layer's viewport, instead of creating new instances
            // Apply viewport transform.
            Transform transformed = new Transform();

            // TODO: Panel pixels int types - LienzoCore.get().getDevicePixelRatio();
            int widePx = panel.getWidePx();
            int highPx = panel.getHighPx();
            double sx = widePx / shapesBB.getWidth();
            double sy = highPx / shapesBB.getHeight();

            transformed.scaleWithXY(sx, sy);
            transformed.translate(-shapesBB.getX(), -shapesBB.getY());

            changeViewportTransform(transformed);
        }
    }

    private BoundingBox getBB(WiresShape shape) {
        return shape.getGroup().getComputedBoundingPoints().getBoundingBox();
    }

    private void changeViewportTransform(Transform transform) {
        Viewport viewport = layer.getViewport();
        if (false) {
            viewport.setTransform(transform);
            ((ScrollablePanel) panel).onRefresh();
            mediatorsPanel.refresh();
        } else {
            viewport.animate(AnimationTweener.LINEAR,
                             AnimationProperties.toPropertyList(
                                     AnimationProperty.Properties.TRANSFORM(transform)
                             ),
                             250,
                             new AnimationCallback() {
                                 @Override
                                 public void onClose(IAnimation animation, IAnimationHandle handle) {
                                     super.onClose(animation, handle);
                                     ((ScrollablePanel) panel).onRefresh();
                                     mediatorsPanel.refresh();
                                 }
                             });
        }
    }

    private void focus(WiresShape shape) {

    }

    private void unfocus(WiresShape shape) {

    }

    private void addHandlers(WiresShape shape) {
        shape.getGroup().addNodeMouseClickHandler(event -> {
            log("CLICK [" + shape.getID() + "]");
            select(shape);
        });

        shape.getPath().addNodeMouseEnterHandler(event -> {
            log("ENTER [" + shape.getID() + "]");
            focus(shape);
        });

        shape.getPath().addNodeMouseExitHandler(event -> {
            log("EXIT [" + shape.getID() + "]");
            unfocus(shape);
        });

        shape.getPath().addNodeMouseOverHandler(event -> {
            log("OVER [" + shape.getID() + "]");
            focus(shape);
        });

        shape.getPath().addNodeMouseOutHandler(event -> {
            log("OUT [" + shape.getID() + "]");
            unfocus(shape);
        });
    }

    private WiresShape createShape(int index, MultiPath path, Point2D location) {
        String id = SHAPE_PREFIX + index;
        WiresShape shape = new WiresShape(path)
                .setID(id)
                .setDraggable(true)
                .setLocation(location);
        shape.getGroup().setUserData(id);
        shape.addChild(new Text("" + index)
                               .setFillColor(ColorName.BLACK)
                               .setFontSize(12),
                       LayoutContainer.Layout.CENTER);
        wiresManager.register(shape);
        wiresManager.getMagnetManager().createMagnets(shape);
        return shape;
    }

    private static void log(String s) {
        DomGlobal.console.log(s);
    }
}
