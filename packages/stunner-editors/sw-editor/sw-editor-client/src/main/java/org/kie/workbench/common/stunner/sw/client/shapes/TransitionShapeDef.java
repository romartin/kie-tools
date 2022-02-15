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

import java.util.Optional;
import java.util.function.BiConsumer;

import org.kie.workbench.common.stunner.core.client.shape.view.ShapeView;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.FontHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.ViewAttributesHandler;
import org.kie.workbench.common.stunner.core.definition.shape.Glyph;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeDef;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeViewDef;
import org.kie.workbench.common.stunner.sw.client.resources.GlyphFactory;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.EventTransition;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.Transition;

import static org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils.getDefinitionId;
import static org.kie.workbench.common.stunner.sw.client.shapes.AnyStateShapeDef.TITLE_HANDLER;

public class TransitionShapeDef<W>
        implements ShapeViewDef<W, TransitionView> {

    enum Type {
        TRANSITION,
        START,
        ERROR,
        EVENT,
        ACTION
    }

    enum Direction {
        NONE,
        ONE,
        BOTH
    }

    @Override
    public BiConsumer<W, TransitionView> viewHandler() {
        return new ViewAttributesHandlerBuilder().build()::handle;
    }

    private static final String FONT_FAMILY = "Open Sans";
    private static final String FONT_COLOR = "#000000";
    private static final String FONT_STROKE_COLOR = "#393f44";
    private static final double FONT_SIZE = 10d;
    private static final double STROKE_SIZE = 0.5d;

    @Override
    public Optional<BiConsumer<W, TransitionView>> fontHandler() {
        return Optional.of(new FontHandler.Builder<W, TransitionView>()
                                   .fontFamily(c -> FONT_FAMILY)
                                   .fontSize(c -> FONT_SIZE)
                                   .fontColor(c -> FONT_COLOR)
                                   .strokeColor(c -> FONT_STROKE_COLOR)
                                   .strokeSize(c -> STROKE_SIZE)
                                   .build()::handle);
    }

    @Override
    public Optional<BiConsumer<String, TransitionView>> titleHandler() {
        return Optional.of(TITLE_HANDLER::handle);
    }

    @Override
    public Glyph getGlyph(Class<? extends W> clazz,
                          final String defId) {
        Type type = getTypeByClass(clazz);
        if (type == Type.START) {
            return GlyphFactory.TRANSITION_START;
        }
        if (type == Type.ERROR) {
            return GlyphFactory.TRANSITION_ERROR;
        }
        if (type == Type.EVENT) {
            return GlyphFactory.TRANSITION_EVENT;
        }
        if (type == Type.ACTION) {
            return GlyphFactory.TRANSITION_ACTION;
        }
        return GlyphFactory.TRANSITION;
    }

    @Override
    public Class<? extends ShapeDef> getType() {
        return TransitionShapeDef.class;
    }

    private static class ViewAttributesHandlerBuilder<W, V extends ShapeView>
            extends ViewAttributesHandler.Builder<W, V> {

        public ViewAttributesHandlerBuilder() {
            this.fillColor(TransitionShapeDef::getColor)
                    .strokeColor(TransitionShapeDef::getColor)
                    .strokeWidth(bean -> 1d);
        }
    }

    private static final String TYPE_TRANSITION = getDefinitionId(Transition.class);
    private static final String TYPE_START = getDefinitionId(StartTransition.class);
    private static final String TYPE_ERROR = getDefinitionId(ErrorTransition.class);
    private static final String TYPE_EVENT = getDefinitionId(EventTransition.class);
    private static final String TYPE_ACTION = getDefinitionId(ActionTransition.class);

    public static Type getType(Object transition) {
        Type type = getTypeOrNull(transition);
        if (null != type) {
            return type;
        }
        throw new IllegalStateException("Type [" + transition.getClass() + "] is not a known transition.");
    }

    public static Type getTypeByClass(Class<?> transitionType) {
        Type type = getTypeByIdOrNull(getDefinitionId(transitionType));
        if (null != type) {
            return type;
        }
        throw new IllegalStateException("Type [" + transitionType + "] is not a known transition.");
    }

    private static Type getTypeOrNull(Object transition) {
        String id = getDefinitionId(transition.getClass());
        return getTypeByIdOrNull(id);
    }

    private static Type getTypeByIdOrNull(String id) {
        if (TYPE_TRANSITION.equals(id)) {
            return Type.TRANSITION;
        }
        if (TYPE_START.equals(id)) {
            return Type.START;
        }
        if (TYPE_ERROR.equals(id)) {
            return Type.ERROR;
        }
        if (TYPE_EVENT.equals(id)) {
            return Type.EVENT;
        }
        if (TYPE_ACTION.equals(id)) {
            return Type.ACTION;
        }
        return null;
    }

    private static String getColor(Object transition) {
        Type type = getType(transition);
        if (type == Type.START) {
            return "#0000FF";
        }
        if (type == Type.ERROR) {
            return "#FF0000";
        }
        if (type == Type.EVENT) {
            return "#00FF00";
        }
        if (type == Type.ACTION) {
            return "#00FF00";
        }
        return "#000000";
    }
}
