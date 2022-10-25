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

import javax.enterprise.context.ApplicationScoped;

import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionSetRuleAdapter;
import org.kie.workbench.common.stunner.core.rule.EmptyRuleSet;
import org.kie.workbench.common.stunner.core.rule.RuleSet;

import static org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionAdapter.isJsDefinition;

// TODO: PoC
@ApplicationScoped
public class JsRuleAdapter implements DefinitionSetRuleAdapter<Object> {

    private RuleSet ruleSet;

    @Override
    public RuleSet getRuleSet(Object pojo) {
        return null != ruleSet ? ruleSet : new EmptyRuleSet();
    }

    public void setRuleSet(RuleSet ruleSet) {
        this.ruleSet = ruleSet;
    }

    @Override
    public boolean accepts(Class<?> type) {
        // TODO: Disabled for now
        if (true) {
            return isJsDefinition(type);
        }
        return org.kie.workbench.common.stunner.sw.Definitions.class.equals(type);
    }

    @Override
    public int getPriority() {
        return 0;
    }
}
