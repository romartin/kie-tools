package org.kie.lienzo.client;

import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.wires.IConnectionAcceptor;
import com.ait.lienzo.client.core.shape.wires.IContainmentAcceptor;
import com.ait.lienzo.client.core.shape.wires.IControlPointsAcceptor;
import com.ait.lienzo.client.core.shape.wires.IDockingAcceptor;
import com.ait.lienzo.client.core.shape.wires.ILocationAcceptor;
import com.ait.lienzo.client.core.shape.wires.WiresConnector;
import com.ait.lienzo.client.core.shape.wires.WiresContainer;
import com.ait.lienzo.client.core.shape.wires.WiresManager;
import com.ait.lienzo.client.core.shape.wires.WiresShape;
import com.ait.lienzo.client.core.types.Point2D;
import com.ait.lienzo.client.core.types.Point2DArray;
import com.ait.lienzo.client.widget.panel.LienzoPanel;
import com.google.gwt.dom.client.Style;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;

import static org.kie.lienzo.client.util.WiresUtils.connect;

public class BasicWiresExample extends BaseExample implements Example {

    public static final String RED_RECTANGLE = "redRectangle";
    public static final String BLUE_RECTANGLE = "blueRectangle";
    public static final String CIRCLE = "circle";
    public static final String PARENT = "parent";

    private WiresManager wiresManager;
    private WiresShape shapeRedRectangle;
    private WiresShape shapeCircle;
    private WiresShape shapeBlueRectangle;
    private WiresShape shapeParent;
    WiresConnector connector;
    HTMLButtonElement logCpsButton;

    public BasicWiresExample(final String title) {
        super(title);
    }

    @Override
    public void init(LienzoPanel panel, HTMLDivElement topDiv) {
        super.init(panel, topDiv);
        topDiv.style.display = Style.Display.INLINE_BLOCK.getCssName();
        logCpsButton = createButton("Log CPs", this::logLineCps);
        topDiv.appendChild(logCpsButton);
    }

    private void logLineCps() {
        Point2DArray controlPoints = connector.getControlPoints();
        DomGlobal.console.log(controlPoints);
    }

    private WiresShape createShape(String id, MultiPath path, Point2D location) {
        WiresShape shape = new WiresShape(path)
                .setID(id)
                .setDraggable(true)
                .setLocation(location);
        shape.getGroup().setUserData(id);
        wiresManager.register(shape);
        wiresManager.getMagnetManager().createMagnets(shape);
        return shape;
    }

    @Override
    public void run() {
        wiresManager = WiresManager.get(layer);
        wiresManager.enableSelectionManager();
        wiresManager.setContainmentAcceptor(CONTAINMENT_ACCEPTOR);
        wiresManager.setDockingAcceptor(DOCKING_ACCEPTOR);
        wiresManager.setConnectionAcceptor(IConnectionAcceptor.ALL);
        wiresManager.setLocationAcceptor(ILocationAcceptor.ALL);
        wiresManager.setControlPointsAcceptor(IControlPointsAcceptor.ALL);

        shapeRedRectangle = createShape(RED_RECTANGLE,
                                        new MultiPath().rect(0, 0, 100, 100)
                                                .setStrokeColor("#FF0000")
                                                .setFillColor("#FF0000"),
                                        new Point2D(100, 50));

        shapeCircle = createShape(CIRCLE,
                                  new MultiPath().circle(50)
                                          .setStrokeColor("#FF0000")
                                          .setFillColor("#FF0000"),
                                  new Point2D(400, 50));

        shapeBlueRectangle = createShape(BLUE_RECTANGLE,
                                         new MultiPath().rect(0, 0, 100, 100)
                                                 .setStrokeColor("#0000FF")
                                                 .setFillColor("#0000FF"),
                                         new Point2D(650, 50));

        shapeParent = createShape(PARENT,
                                  new MultiPath().rect(0, 0, 600, 250)
                                          .setStrokeColor("#000000")
                                          .setFillColor("#FFFFFF"),
                                  new Point2D(50, 300));

        connector = connect(shapeRedRectangle.getMagnets(),
                                         3,
                                         shapeCircle.getMagnets(),
                                         7,
                                         wiresManager,
                                         false);


    }

    @Override
    public void destroy() {
        super.destroy();
        logCpsButton.remove();
    }

    private static final IContainmentAcceptor CONTAINMENT_ACCEPTOR = new IContainmentAcceptor() {
        @Override
        public boolean containmentAllowed(WiresContainer parent, WiresShape[] children) {
            return test(parent, children);
        }

        @Override
        public boolean acceptContainment(WiresContainer parent, WiresShape[] children) {
            return test(parent, children);
        }
    };

    private static final IDockingAcceptor DOCKING_ACCEPTOR = new IDockingAcceptor() {
        @Override
        public boolean dockingAllowed(WiresContainer parent, WiresShape child) {
            return test(parent, child);
        }

        @Override
        public boolean acceptDocking(WiresContainer parent, WiresShape child) {
            return test(parent, child);
        }

        @Override
        public int getHotspotSize() {
            return 25;
        }
    };

    private static boolean test(WiresContainer parent, WiresShape... children) {
        if (null == parent || null == parent.getGroup()) {
            return true;
        }
        if (PARENT.equals(parent.getGroup().getUserData())) {
            for (WiresShape child : children) {
                Object data = child.getGroup().getUserData();
                if (BLUE_RECTANGLE.equals(data)) {
                    return false;
                }
            }
        }
        return true;
    }
}
