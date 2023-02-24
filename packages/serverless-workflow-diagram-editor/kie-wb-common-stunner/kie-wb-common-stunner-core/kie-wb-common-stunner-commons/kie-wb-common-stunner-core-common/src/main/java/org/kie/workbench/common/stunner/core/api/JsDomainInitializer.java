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

package org.kie.workbench.common.stunner.core.api;

import com.google.gwt.core.client.ScriptInjector;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsAdapterUtils;

@JsType
public class JsDomainInitializer {

    @JsIgnore
    private DomainInitializer domainInitializer;
    @JsIgnore
    private JsDefinitionManager definitionManager;

    public static JsDomainInitializer build(JsDefinitionManager definitionManager,
                                            DomainInitializer domainInitializer) {
        JsDomainInitializer i = new JsDomainInitializer();
        i.definitionManager = definitionManager;
        i.domainInitializer = domainInitializer;
        return i;
    }

    @JsType(isNative = true)
    public static class JsStunnerDefinition {

        public String category;
        public String[] labels;
    }

    public static String JS_STUNNER_DEFINITION_FIELD = "__stunner__";

    public JsDomainInitializer addDefinition(Object... args) {
        if (args.length == 1) {
            return addType(args[0]);
        }
        if (args.length == 2) {
            JsStunnerDefinition stunnerDefinition = Js.uncheckedCast(args[1]);
            if (args[0] instanceof String) {
                return addDefinitionById(Js.<String>uncheckedCast(args[0]), stunnerDefinition);
            } else {
                final String typeId = JsAdapterUtils.getClassId(args[0]);
                return addDefinitionById(typeId, stunnerDefinition);
            }
        }
        throw new IllegalArgumentException("Cannot initialize Definition. Invalid arguments.");
    }

    public JsDomainInitializer addType(Object type) {
        final String typeId = JsAdapterUtils.getClassId(type);
        final JsPropertyMap<Object> map = Js.asPropertyMap(type);
        addDefinitionById(typeId, Js.<JsStunnerDefinition>uncheckedCast(map.get(JS_STUNNER_DEFINITION_FIELD)));
        return this;
    }

    public JsDomainInitializer addDefinitionById(String typeId, JsStunnerDefinition stunnerDef) {
        domainInitializer.addDefinitionById(typeId);
        if (null != stunnerDef) {
            if (null != stunnerDef.category) {
                domainInitializer.setCategoryById(typeId, stunnerDef.category);
            }
            if (null != stunnerDef.labels) {
                domainInitializer.setLabelsById(typeId, stunnerDef.labels);
            }
        }
        return this;
    }

    public JsDomainInitializer setCategory(Object type, String category) {
        domainInitializer.setCategory(type, category);
        return this;
    }

    public JsDomainInitializer setLabels(Object type, String... definitionLabels) {
        domainInitializer.setLabels(type, definitionLabels);
        return this;
    }

    @JsType(isNative = true)
    public static class JsConnectionRule {

        public String from;
        public String to;
    }

    public JsDomainInitializer addContainmentRule(Object type, String[] roles) {
        String typeId = JsAdapterUtils.getClassId(type);
        domainInitializer.addContainmentRuleById(typeId, roles);
        return this;
    }

    public JsDomainInitializer addConnectionRules(Object type, JsConnectionRule[] rules) {
        String typeId = JsAdapterUtils.getClassId(type);
        String[][] a = new String[rules.length][2];
        for (int i = 0; i < rules.length; i++) {
            JsConnectionRule rule = rules[i];
            a[i] = new String[]{rule.from, rule.to};
        }
        addConnectionRulesById(typeId, a);
        return this;
    }

    public JsDomainInitializer addConnectionRulesById(String typeId, String[]... rules) {
        domainInitializer.addConnectionRuleById(typeId, rules);
        return this;
    }

    public JsDomainInitializer done() {
        domainInitializer.initializeRules();
        return this;
    }

    public void injectScript(String raw) {
        ScriptInjector.fromString(raw).setWindow(ScriptInjector.TOP_WINDOW).inject();
    }
}
