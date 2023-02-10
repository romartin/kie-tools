/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

package org.kie.stunner.editor.shape;

import com.ait.lienzo.client.core.shape.MultiPath;
import com.ait.lienzo.client.core.shape.Text;
import com.ait.lienzo.client.core.shape.TextLineBreakTruncateWrapper;
import com.ait.lienzo.client.core.types.BoundingBox;
import com.ait.lienzo.shared.core.types.EventPropagationMode;
import com.ait.lienzo.shared.core.types.TextAlign;
import com.ait.lienzo.shared.core.types.TextBaseLine;

// TODO: Expose properties / methods to JS.
public class JsNativeShapeView extends JsNativeBaseShapeView<JsNativeShapeView> {

    private Text title;

    public JsNativeShapeView(MultiPath path) {
        super(path);
        setTitleXOffsetPosition(2.0);
        setTitleYOffsetPosition(17.0);
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
