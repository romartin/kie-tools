package org.kie.stunner.editor.shape;

import com.ait.lienzo.client.core.event.NodeMouseEnterHandler;
import com.ait.lienzo.client.core.event.NodeMouseExitHandler;
import com.ait.lienzo.client.core.shape.Circle;
import com.ait.lienzo.client.core.shape.Group;
import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.Node;
import com.ait.lienzo.client.core.shape.wires.WiresLayoutContainer;
import com.ait.lienzo.shared.core.types.EventPropagationMode;
import com.ait.lienzo.tools.client.event.HandlerRegistration;
import org.kie.workbench.common.stunner.client.lienzo.shape.impl.ShapeStateDefaultHandler;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.ViewEventHandlerManager;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.wires.ext.WiresShapeViewExt;
import org.kie.workbench.common.stunner.core.client.shape.ShapeState;
import org.kie.workbench.common.stunner.core.client.shape.impl.AbstractShape;
import org.kie.workbench.common.stunner.core.client.shape.impl.ShapeStateHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.event.ShapeViewSupportedEvents;

public abstract class JsNativeBaseShapeView<T extends JsNativeBaseShapeView> extends WiresShapeViewExt<T> {

    protected final static String SHAPE_TITLE_FONT_COLOR = "#929292";
    protected final static double SHAPE_TITLE_FONT_SIZE = 12.00;
    protected final static String SHAPE_TITLE_FONT_FAMILY = "Open Sans";

    private ShapeStateDefaultHandler shapeStateHandler = new ShapeStateDefaultHandler().setBorderShape((() -> this))
            .setBackgroundShape(() -> this);

    private final HandlerRegistration mouseEnterHandler;

    private final HandlerRegistration mouseExitHandler;

    public JsNativeBaseShapeView(MultiPath path, String title) {
        this(path);
        setTitle(title);
        setTitlePosition(VerticalAlignment.MIDDLE, HorizontalAlignment.CENTER, ReferencePosition.INSIDE, Orientation.HORIZONTAL);
        setTitleFontColor(SHAPE_TITLE_FONT_COLOR);
        setTitleFontFamily(SHAPE_TITLE_FONT_FAMILY);
        setTitleFontSize(SHAPE_TITLE_FONT_SIZE);
        setTitleStrokeWidth(0);
        setTitleStrokeAlpha(0);
        isTitleListening(false);
    }

    public JsNativeBaseShapeView(MultiPath path) {
        super(path
                      .setAlpha(1.00)
                      .setDraggable(false)
                      .setListening(true) ,
              new WiresLayoutContainer());

        setEventHandlerManager(new ViewEventHandlerManager(getShape(), getShape(), ShapeViewSupportedEvents.ALL_DESKTOP_EVENT_TYPES));

        getShape().setEventPropagationMode(EventPropagationMode.NO_ANCESTORS);

        NodeMouseEnterHandler enterEvent = event -> {
            if (shapeStateHandler.getShapeState() == ShapeState.SELECTED) {
                return;
            }
            shapeStateHandler.applyState(ShapeState.HIGHLIGHT);
        };
        mouseEnterHandler = getShape().addNodeMouseEnterHandler(enterEvent);

        NodeMouseExitHandler exitEvent = event -> {
            if (shapeStateHandler.getShapeState() == ShapeState.SELECTED) {
                return;
            }
            shapeStateHandler.applyState(ShapeState.NONE);
        };
        mouseExitHandler = getShape().addNodeMouseExitHandler(exitEvent);
    }

    public ShapeStateHandler getShapeStateHandler() {
        return shapeStateHandler;
    }

    public AbstractShape<JsNativeBaseShapeView> asAbstractShape() {
        return new AbstractShape<JsNativeBaseShapeView>() {
            @Override
            public ShapeStateHandler getShapeStateHandler() {
                return JsNativeBaseShapeView.this.getShapeStateHandler();
            }

            @Override
            public void setUUID(String uuid) {
                JsNativeBaseShapeView.this.setUUID(uuid);
            }

            @Override
            public String getUUID() {
                return JsNativeBaseShapeView.this.getUUID();
            }

            @Override
            public JsNativeBaseShapeView getShapeView() {
                return JsNativeBaseShapeView.this;
            }
        };
    }

    protected Circle newCircle(double radius) {
        return setDefaultSettings(new Circle(radius));
    }

    protected Group newGroup() {
        return setDefaultSettings(new Group());
    }

    protected MultiPath newMultiPath(String path) {
        return setDefaultSettings(new MultiPath(path));
    }

    @SuppressWarnings("unchecked")
    private <N extends Node> N setDefaultSettings(N shape) {
        return (N) shape
                .setDraggable(false)
                .setListening(false)
                .setAlpha(1.00);
    }

    @Override
    public void destroy() {
        super.destroy();
        shapeStateHandler = null;
        mouseEnterHandler.removeHandler();
        mouseExitHandler.removeHandler();
    }
}
