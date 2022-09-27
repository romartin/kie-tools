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

import org.kie.workbench.common.stunner.core.definition.adapter.AbstractDefinitionSetRuleAdapter;
import org.kie.workbench.common.stunner.core.rule.EmptyRuleSet;
import org.kie.workbench.common.stunner.core.rule.RuleSet;

import static org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionAdapter.isJsDefinition;

// TODO
public class JsRuleAdapter extends AbstractDefinitionSetRuleAdapter<Object> {

    @Override
    public RuleSet getRuleSet(Object pojo) {
        return new EmptyRuleSet();
    }

    @Override
    public boolean accepts(Class<?> type) {
        return isJsDefinition(type);
    }
}
