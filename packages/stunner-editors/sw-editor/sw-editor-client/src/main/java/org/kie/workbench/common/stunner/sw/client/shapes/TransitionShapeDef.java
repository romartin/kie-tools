/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.sw.client.shapes;

import java.util.function.BiConsumer;

import org.kie.workbench.common.stunner.core.definition.shape.Glyph;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeDef;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeViewDef;
import org.kie.workbench.common.stunner.sw.client.resources.SWGlyphFactory;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;

import static org.kie.workbench.common.stunner.core.util.ClassUtils.getName;

public class TransitionShapeDef<W>
        implements ShapeViewDef<W, TransitionView> {

    enum Direction {
        NONE,
        ONE,
        BOTH
    }

    String FONT_FAMILY = "Open Sans";
    String FONT_COLOR = "#000000";
    String FONT_STROKE_COLOR = "#393f44";
    double FONT_SIZE = 10d;
    double STROKE_SIZE = 0.5d;

    Direction getDirection(W definition) {
        return Direction.ONE;
    }

    @Override
    public BiConsumer<W, TransitionView> viewHandler() {
        return new StateViewHandlers.ViewAttributesHandlerBuilder().build()::handle;
    }

    @Override
    public Glyph getGlyph(Class<? extends W> type,
                          final String defId) {
        if (getName(type).equals(getName(StartTransition.class))) {
            return SWGlyphFactory.TRANSITION_START;
        }
        if (getName(type).equals(getName(ErrorTransition.class))) {
            return SWGlyphFactory.TRANSITION_ERROR;
        }
        return SWGlyphFactory.TRANSITION;
    }

    @Override
    public Class<? extends ShapeDef> getType() {
        return TransitionShapeDef.class;
    }
}
