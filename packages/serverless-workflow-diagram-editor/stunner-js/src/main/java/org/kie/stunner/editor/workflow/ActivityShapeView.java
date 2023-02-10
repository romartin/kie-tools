package org.kie.stunner.editor.workflow;

import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.Text;
import com.ait.lienzo.client.core.shape.TextLineBreakTruncateWrapper;
import com.ait.lienzo.client.core.shape.wires.WiresLayoutContainer;
import com.ait.lienzo.client.core.types.BoundingBox;
import com.ait.lienzo.shared.core.types.EventPropagationMode;
import com.ait.lienzo.shared.core.types.TextAlign;
import com.ait.lienzo.shared.core.types.TextBaseLine;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.ViewEventHandlerManager;
import org.kie.workbench.common.stunner.client.lienzo.shape.view.wires.ext.WiresShapeViewExt;
import org.kie.workbench.common.stunner.core.client.shape.view.event.ShapeViewSupportedEvents;

public class ActivityShapeView extends WiresShapeViewExt<ActivityShapeView> {

    // TODO: Clean up once deleting this instance.
    private Text title;

    public ActivityShapeView() {
        this(new MultiPath()
                     .rect(0, 0, 250, 90)
                     .setCornerRadius(5.00)
                     .setDraggable(false)
                     .setAlpha(1.00)
                     .setListening(true)
                     .setScale(1.00, 1.00)
                     .setOffset(0.00, 0.00)
                     .setStrokeWidth(2.00)
                     .setFillColor("#fff")
                     .setStrokeColor("#ccc")
                     .setStrokeWidth(2.00)
                     .setStrokeAlpha(1)
                     .moveToBottom()
                     .setListening(true));
    }

    public ActivityShapeView(MultiPath path) {
        super(path, new WiresLayoutContainer());
        setEventHandlerManager(new ViewEventHandlerManager(getShape(), getShape(), ShapeViewSupportedEvents.ALL_DESKTOP_EVENT_TYPES));
        getShape().setEventPropagationMode(EventPropagationMode.NO_ANCESTORS);
    }

    public void initializeTitle(String name) {
        if (null == title) {
            Text title = new Text(name)
                    .setX(90)
                    .setY(35)
                    .setStrokeWidth(0)
                    .setFillColor("#383B3D")
                    .setFontFamily("Open Sans")
                    .setTextAlign(TextAlign.CENTER)
                    .setTextBaseLine(TextBaseLine.MIDDLE)
                    .setEventPropagationMode(EventPropagationMode.LAST_ANCESTOR)
                    .setFontSize(12)
                    .setListening(false);
            TextLineBreakTruncateWrapper textWrapper = new TextLineBreakTruncateWrapper(title, BoundingBox.fromDoubles(0, 0, 160, 44));
            title.setWrapper(textWrapper);
            addChild(title);
        } else {
            title.setText(name);
        }
    }
}
