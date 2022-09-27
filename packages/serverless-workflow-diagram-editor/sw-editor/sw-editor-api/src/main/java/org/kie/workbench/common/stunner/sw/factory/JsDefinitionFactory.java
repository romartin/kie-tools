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

package org.kie.workbench.common.stunner.sw.factory;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.factory.definition.DefinitionFactory;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition1;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition2;
import org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionUtils;

@ApplicationScoped
public class JsDefinitionFactory implements DefinitionFactory<Object> {

    @Inject
    private JsDefinitionUtils definitionUtils;

    @Override
    public boolean accepts(String identifier) {
        return definitionUtils.isJsDefinition(identifier);
    }

    @Override
    public Object build(String identifier) {
        // TODO: Refactor this by j2cl usage or the use of builder methods.
        if (JsDefinition1.class.getName().equals(identifier)) {
            return new JsDefinition1();
        }
        if (JsDefinition2.class.getName().equals(identifier)) {
            return new JsDefinition2();
        }
        return null;
    }
}