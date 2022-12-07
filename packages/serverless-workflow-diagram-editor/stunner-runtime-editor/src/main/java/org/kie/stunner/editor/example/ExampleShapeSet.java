/*
 * Copyright 2017 Red Hat, Inc. and/or its affiliates.
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

package org.kie.stunner.editor.example;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.client.AbstractBindableShapeSet;

@ApplicationScoped
public class ExampleShapeSet extends AbstractBindableShapeSet<ExampleShapeFactory> {

    private final DefinitionManager definitionManager;
    private final ExampleShapeFactory factory;

    protected ExampleShapeSet() {
        this(null,
             null);
    }

    @Inject
    public ExampleShapeSet(final DefinitionManager definitionManager,
                           final ExampleShapeFactory factory) {
        this.definitionManager = definitionManager;
        this.factory = factory;
    }

    @Override
    protected DefinitionManager getDefinitionManager() {
        return definitionManager;
    }

    @Override
    protected Class<?> getDefinitionSetClass() {
        return ExampleDefinitionSet.class;
    }

    @Override
    public ExampleShapeFactory getShapeFactory() {
        return factory;
    }
}
