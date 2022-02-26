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

package org.kie.workbench.common.stunner.sw.client.shapes;

import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;

import org.kie.soup.commons.util.Maps;
import org.kie.workbench.common.stunner.core.client.shape.view.HasTitle;
import org.kie.workbench.common.stunner.core.client.shape.view.ShapeView;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.FontHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.SizeHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.TitleHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.handler.ViewAttributesHandler;
import org.kie.workbench.common.stunner.core.definition.shape.Glyph;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeViewDef;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.svg.client.shape.def.SVGShapeViewDef;
import org.kie.workbench.common.stunner.svg.client.shape.factory.SVGShapeViewResources;
import org.kie.workbench.common.stunner.svg.client.shape.view.SVGShapeView;
import org.kie.workbench.common.stunner.sw.client.resources.GlyphFactory;
import org.kie.workbench.common.stunner.sw.client.resources.ShapeViewFactory;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.EventRef;
import org.kie.workbench.common.stunner.sw.definition.Start;

public class AnyCircleShapeDef<W> implements ShapeViewDef<W, SVGShapeView>,
                                             SVGShapeViewDef<W, ShapeViewFactory> {

    // TODO: Refactor this, no need for storing state...
    public static final SVGShapeViewResources<Object, ShapeViewFactory> VIEW_RESOURCES =
            new SVGShapeViewResources<Object, ShapeViewFactory>()
                    .put(Start.class, ShapeViewFactory::startState)
                    .put(End.class, ShapeViewFactory::endState)
                    .put(EventRef.class, ShapeViewFactory::event);

    // TODO: Refactor this, no need for storing state...
    public static final Map<Class<?>, Glyph> GLYPHS =
            new Maps.Builder<Class<?>, Glyph>()
                    .put(Start.class, GlyphFactory.START)
                    .put(End.class, GlyphFactory.END)
                    .put(EventRef.class, GlyphFactory.EVENT)
                    .build();

    @Override
    public SVGShapeView<?> newViewInstance(ShapeViewFactory factory, W instance) {
        return VIEW_RESOURCES.getResource(factory, instance).build(false);
    }

    @Override
    public Glyph getGlyph(final Class<? extends W> type,
                          final String defId) {
        return GLYPHS.get(type);
    }

    @Override
    public BiConsumer<W, SVGShapeView> viewHandler() {
        return VIEW_HANDLER::handle;
    }

    @Override
    public Optional<BiConsumer<W, SVGShapeView>> fontHandler() {
        return Optional.of(FONT_HANDLER::handle);
    }

    @Override
    public Optional<BiConsumer<String, SVGShapeView>> titleHandler() {
        return Optional.of(TITLE_HANDLER::handle);
    }

    @Override
    public Class<ShapeViewFactory> getViewFactoryType() {
        return ShapeViewFactory.class;
    }

    public static final TitleHandler<ShapeView> TITLE_HANDLER = new TitleHandler<>();

    private final ViewAttributesHandler<W, SVGShapeView> VIEW_HANDLER =
            new ViewAttributesHandler.Builder<W, SVGShapeView>().build();

    private final FontHandler<W, SVGShapeView> FONT_HANDLER =
            new DefaultFontHandlerBuilder<W, SVGShapeView>().build();

    @Override
    public Optional<BiConsumer<View<W>, SVGShapeView>> sizeHandler() {
        SizeHandler theSizeHandler = new SizeHandler.Builder<>()
                .radius(o -> 23d)
                .build();
        return Optional.of((BiConsumer<View<W>, SVGShapeView>) theSizeHandler::handle);
    }

    private static class DefaultFontHandlerBuilder<W, V extends ShapeView>
            extends FontHandler.Builder<W, V> {

        public DefaultFontHandlerBuilder() {
            this.verticalAlignment(bean -> HasTitle.VerticalAlignment.BOTTOM)
                    .horizontalAlignment(bean -> HasTitle.HorizontalAlignment.CENTER)
                    .referencePosition(bean -> HasTitle.ReferencePosition.OUTSIDE)
                    .textSizeConstraints(bean -> new HasTitle.Size(400, 100, HasTitle.Size.SizeType.PERCENTAGE))
                    .margin(HasTitle.VerticalAlignment.BOTTOM, 5d)
                    .build();
        }
    }
}
