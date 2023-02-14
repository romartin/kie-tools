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

import javax.enterprise.context.ApplicationScoped;

import com.ait.lienzo.client.core.shape.MultiPath;
import jsinterop.base.Js;
import org.kie.stunner.editor.workflow.Activity;
import org.kie.stunner.editor.workflow.ActivityShape;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerWindow;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.client.shape.factory.ShapeFactory;
import org.kie.workbench.common.stunner.core.definition.shape.Glyph;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeGlyph;

@ApplicationScoped
public class StunnerJsShapeFactory implements ShapeFactory<Object, Shape> {

    @Override
    public Shape newShape(Object instance) {
        // TODO Just for local testing.... drop it.
        if (instance instanceof Activity) {
            return ActivityShape.build((Activity) instance);
        }
        return newJsShape(instance);
    }

    private Shape newJsShape(Object instance) {
        Object view = JsStunnerWindow.editor.shapeViewFactory.buildView(instance);
        if (view instanceof MultiPath) {
            MultiPath path = Js.uncheckedCast(view);
            return new JsNativeShape(path);
        } else if (view instanceof JsNativeConnector) {
            JsNativeConnector connector = Js.uncheckedCast(view);
            return JsNativeConnectorShape.create(connector);
        }

        return null;
    }

    @Override
    public Glyph getGlyph(String definitionId) {
        ShapeGlyph glyph = ShapeGlyph.create();
        glyph.setDefinitionId(definitionId);
        glyph.setFactorySupplier(() -> this);
        return glyph;
    }
}
