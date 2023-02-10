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

package org.kie.stunner.editor.workflow;

import org.kie.workbench.common.stunner.client.lienzo.shape.impl.ShapeStateDefaultHandler;
import org.kie.workbench.common.stunner.core.client.shape.MutationContext;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.client.shape.impl.AbstractShape;
import org.kie.workbench.common.stunner.core.client.shape.impl.NodeShapeImpl;
import org.kie.workbench.common.stunner.core.client.shape.impl.ShapeStateHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.ShapeView;
import org.kie.workbench.common.stunner.core.graph.Element;

public class ActivityShape {

    public static Shape build(Activity instance) {
        ActivityShapeView view = new ActivityShapeView();
        return new NodeShapeImpl(new AbstractShape() {

            private final ShapeStateDefaultHandler shapeStateHandler = new ShapeStateDefaultHandler()
                    .setBorderShape((() -> view))
                    .setBackgroundShape(() -> view);

            @Override
            public ShapeStateHandler getShapeStateHandler() {
                return shapeStateHandler;
            }

            @Override
            public void setUUID(String uuid) {
                view.setUUID(uuid);
            }

            @Override
            public String getUUID() {
                return view.getUUID();
            }

            @Override
            public ShapeView getShapeView() {
                return view;
            }
        }) {
            @Override
            public void applyTitle(String title, Element element, MutationContext mutationContext) {
                super.applyTitle(title, element, mutationContext);
                view.initializeTitle(title);
            }
        };
    }
}
