/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.client.widgets.canvas;

import static com.ait.lienzo.client.widget.panel.impl.BoundsProviderFactory.WiresBoundsProvider;
import static com.ait.lienzo.client.widget.panel.impl.BoundsProviderFactory.computeBoundsAspectRatio;

public class StunnerBoundsProviderFactory {

    // TODO: Refactor these both fields properly, maybe drop this whole class?
    public static float ratio = 1;
    public static double padding = 0;

    public static WiresBoundsProvider newProvider() {
        return new WiresBoundsProvider()
                .setPadding(padding)
                .setBoundsBuilder(boundingBox -> computeBoundsAspectRatio(ratio, boundingBox));
    }

    public static double computeWidth(final double height) {
        return height * ratio;
    }

    public static int computeWidth(final int height) {
        return (int) computeWidth((double) height);
    }

    public static double computeHeight(final double width) {
        return width * (1 / ratio);
    }

    public static int computeHeight(final int width) {
        return (int) computeHeight((double) width);
    }
}
