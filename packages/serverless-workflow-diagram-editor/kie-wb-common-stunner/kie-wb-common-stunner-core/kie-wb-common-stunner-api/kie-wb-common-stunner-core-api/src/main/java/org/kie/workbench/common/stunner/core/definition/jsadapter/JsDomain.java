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

package org.kie.workbench.common.stunner.core.definition.jsadapter;

import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.rule.RuleSet;

@JsType
public class JsDomain {

    // Def. Set. info.
    public Object definitionSet;
    public String definitionsField;
    public Annotation domainQualifier;
    @JsIgnore
    private final Set<String> runtimeDefinitions;

    // Def's info.
    @JsIgnore
    private final Map<String, String> categories;
    @JsIgnore
    private final Map<String, String> labels;
    @JsIgnore
    private final Map<String, String> nameFields;
    @JsIgnore
    private RuleSet ruleSet;

    // TODO: Include all i18n dynamic parameters.

    public JsDomain() {
        runtimeDefinitions = new HashSet<String>();
        categories = new HashMap<String, String>();
        labels = new HashMap<String, String>();
        nameFields = new HashMap<String, String>();
    }

    public void addDefinition(String id) {
        runtimeDefinitions.add(id);
    }

    public void setCategory(String definitionId, String category) {
        categories.put(definitionId, category);
    }

    public void setLabels(String definitionId, String[] definitionLabels) {
        labels.put(definitionId, Arrays.stream(definitionLabels).collect(Collectors.joining(",")));
    }

    public void setDefinitionNameField(String definitionId, String nameField) {
        nameFields.put(definitionId, nameField);
    }

    public void setRuleSet(RuleSet ruleSet) {
        this.ruleSet = ruleSet;
    }

    public Set<String> getDefinitions() {
        JsPropertyMap<Object> map = Js.asPropertyMap(definitionSet);
        String definitions = Js.uncheckedCast(map.get(definitionsField));
        String[] split = definitions.split(",");
        Set<String> result = Arrays.stream(split).collect(Collectors.<String>toSet());
        result.addAll(runtimeDefinitions);
        return result;
    }

    public String getCategory(String definitionId) {
        return categories.get(definitionId);
    }

    public String getNameField(String definitionId) {
        return nameFields.get(definitionId);
    }

    public String[] getLabels(String definitionId) {
        String raw = labels.get(definitionId);
        return null == raw || raw.isEmpty() ? new String[0] : raw.split(",");
    }

    public RuleSet getRuleSet() {
        return ruleSet;
    }
}
