package org.kie.lienzo.client;

import com.ait.lienzo.client.core.shape.Layer;
import com.ait.lienzo.client.core.shape.Rectangle;
import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.LienzoPanel;
import com.ait.lienzo.client.widget.panel.impl.BoundsProviderFactory;
import com.ait.lienzo.client.widget.panel.impl.ScrollablePanel;
import elemental2.dom.HTMLDivElement;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.kie.lienzo.client.js.JsObjectAdapter;
import org.kie.lienzo.client.js.WindowJSCanvas;

// TODO: Really put this on GLOBAL scope?
@JsType(namespace = JsPackage.GLOBAL)
public class LienzoNativeExample {

    public static void createLienzo(HTMLDivElement parent) {
        ScrollablePanel panel = ScrollablePanel.newPanel(new BoundsProviderFactory.PrimitivesBoundsProvider());
        parent.appendChild(panel.getElement());
        panel.onResize();
        init(panel);
    }

    public static void createExample(HTMLDivElement parent) {
        createLienzo(parent);
        populate();
    }

    public static void init(final LienzoPanel panel) {
        Layer layer = new Layer();
        panel.add(layer);
        JsCanvas jsCanvas = new JsCanvas(panel, layer, null);
        setupJsCanvasTypes(jsCanvas);
    }

    public static void populate() {
        JsCanvas canvas = Js.uncheckedCast(WindowJSCanvas.jsCanvas);
        Rectangle rectangle = new Rectangle(100, 100)
                .setFillColor("red")
                .setFillAlpha(1)
                .setStrokeColor("black")
                .setStrokeAlpha(1);
        canvas.add(rectangle);
        canvas.draw();
    }

    public static void setupJsCanvasTypes(JsCanvas jsCanvas) {
        WindowJSCanvas.linkJSCanvas(jsCanvas);
        WindowJSCanvas.jsObjectAdapter = new JsObjectAdapter();
    }
}
