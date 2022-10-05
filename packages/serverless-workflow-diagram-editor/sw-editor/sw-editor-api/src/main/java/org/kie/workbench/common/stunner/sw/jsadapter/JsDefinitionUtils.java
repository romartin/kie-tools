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

package org.kie.workbench.common.stunner.sw.jsadapter;

import java.util.Set;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.google.gwt.core.client.JavaScriptObject;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.sw.Definitions;

@ApplicationScoped
public class JsDefinitionUtils {

    public boolean isJsDefinition(Object instance) {
        // Support for objects bind from javascript.
        if (instance instanceof JavaScriptObject) {
            return true;
        }
        // Support for objects bind to javascript.
        String id = JsDefinitionAdapter.getJsDefinitionId(instance);
        return isJsDefinition(id);
    }

    public boolean isJsDefinition(Class<?> type) {
        String id = type.getName();
        // Support for objects bind from javascript.
        if (id.startsWith(JavaScriptObject.class.getName())) {
            return true;
        }
        // Support for objects bind to javascript.
        return isJsDefinition(id);
    }

    public boolean isJsDefinition(String defId) {
        return true;
    }

    @Inject
    private DefinitionManager manager;

    // TODO: Refactor & cache (perf)
    private Set<String> getDefinitions() {
        Object definitionSet = manager.definitionSets().getDefinitionSetById(Definitions.class.getName());
        Set<String> definitions = manager.adapters().forDefinitionSet().getDefinitions(definitionSet);
        return definitions;
    }
}