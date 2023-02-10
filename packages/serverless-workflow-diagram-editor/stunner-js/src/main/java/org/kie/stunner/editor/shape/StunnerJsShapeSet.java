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
import javax.inject.Inject;

import org.kie.stunner.editor.StunnerJsDefinitionSet;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.client.AbstractBindableShapeSet;

@ApplicationScoped
public class StunnerJsShapeSet extends AbstractBindableShapeSet<StunnerJsShapeFactory> {

    private final DefinitionManager definitionManager;
    private final StunnerJsShapeFactory factory;

    protected StunnerJsShapeSet() {
        this(null,
             null);
    }

    @Inject
    public StunnerJsShapeSet(final DefinitionManager definitionManager,
                             final StunnerJsShapeFactory factory) {
        this.definitionManager = definitionManager;
        this.factory = factory;
    }

    @Override
    protected DefinitionManager getDefinitionManager() {
        return definitionManager;
    }

    @Override
    protected Class<?> getDefinitionSetClass() {
        return StunnerJsDefinitionSet.class;
    }

    @Override
    public StunnerJsShapeFactory getShapeFactory() {
        return factory;
    }
}
