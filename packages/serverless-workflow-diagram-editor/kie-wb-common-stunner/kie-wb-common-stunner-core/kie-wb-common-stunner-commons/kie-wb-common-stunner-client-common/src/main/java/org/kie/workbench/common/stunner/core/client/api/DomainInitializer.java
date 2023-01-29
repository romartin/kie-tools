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

package org.kie.workbench.common.stunner.core.client.api;

import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.JsDefinitionManager;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsAdapterUtils;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDomains;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.registry.DynamicRegistry;
import org.kie.workbench.common.stunner.core.rule.Rule;
import org.kie.workbench.common.stunner.core.rule.RuleSetImpl;
import org.kie.workbench.common.stunner.core.rule.context.EdgeCardinalityContext;
import org.kie.workbench.common.stunner.core.rule.impl.CanConnect;
import org.kie.workbench.common.stunner.core.rule.impl.CanContain;
import org.kie.workbench.common.stunner.core.rule.impl.CanDock;
import org.kie.workbench.common.stunner.core.rule.impl.EdgeOccurrences;
import org.kie.workbench.common.stunner.core.rule.impl.Occurrences;

@ApplicationScoped
public class DomainInitializer {

    @Inject
    DefinitionManager definitionManager;
    @Inject
    JsDomains domains;
    @Inject
    JsDefinitionSetAdapter jsDefinitionSetAdapter;
    @Inject
    JsDefinitionAdapter jsDefinitionAdapter;
    @Inject
    JsPropertyAdapter jsPropertyAdapter;
    @Inject
    JsRuleAdapter jsRuleAdapter;

    Collection<Rule> rules;

    @PostConstruct
    public void build() {
        JsDefinitionManager jsDefinitionManager = JsDefinitionManager.build(jsDefinitionSetAdapter,
                                                                            jsDefinitionAdapter,
                                                                            jsPropertyAdapter,
                                                                            jsRuleAdapter);
        JsWindow.editor = new JsStunnerEditor();
        JsWindow.editor.definitions = jsDefinitionManager;
        this.rules = new HashSet<>();
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeDefinitionSet(Object definitionSet) {
        domains.getDomainInfo().definitionSet = definitionSet;
        ((DynamicRegistry) definitionManager.definitionSets()).register(definitionSet);
        return this;
    }

    public DomainInitializer initializeDefinitionsField(String definitionsField) {
        domains.getDomainInfo().definitionsField = definitionsField;
        return this;
    }

    public DomainInitializer initializeDomainQualifier(Annotation domainQualifier) {
        domains.getDomainInfo().domainQualifier = domainQualifier;
        return this;
    }

    public DomainInitializer initializeDefinition(Object type) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomainInfo().addDefinition(typeId);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeCategory(Object type, String category) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomainInfo().setCategory(typeId, category);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeLabels(Object type, String... definitionLabels) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomainInfo().setLabels(typeId, definitionLabels);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeDefinitionNameField(Class type, String nameField) {
        domains.getDomainInfo().setDefinitionNameField(JsAdapterUtils.getClassId(type), nameField);
        return this;
    }

    public DomainInitializer addContainmentRule(Class type, String... roles) {
        final HashSet<String> allowedRoles = new HashSet<>(roles.length);
        allowedRoles.addAll(Arrays.asList(roles));
        rules.add(new CanContain("CAN_CONTAIN" + rules.size(), type.getName(), allowedRoles));

        return this;
    }

    public DomainInitializer addConnectionRule(Class type, String[]... roles) {
        final ArrayList<CanConnect.PermittedConnection> allowedRoles = new ArrayList<>(roles.length);
        for (String[] role : roles) {
            allowedRoles.add(new CanConnect.PermittedConnection(role[0], role[1]));
        }
        rules.add(new CanConnect("CAN_CONNECT" + rules.size(), type.getName(), allowedRoles));

        return this;
    }

    public DomainInitializer addDockingRule(Class type, String... roles) {
        final HashSet<String> allowedRoles = new HashSet<>(roles.length);
        allowedRoles.addAll(Arrays.asList(roles));
        rules.add(new CanDock("CAN_DOCK" + rules.size(), type.getName(), allowedRoles));

        return this;
    }

    public DomainInitializer addOccurrences(String role, int minOccurrences, int maxOccurrences) {
        rules.add(new Occurrences("OCCURRENCES" + rules.size(), role, minOccurrences, maxOccurrences));

        return this;
    }

    public DomainInitializer addEdgeOccurrences(Class type,
                                                String role,
                                                boolean isIncoming,
                                                int minOccurrences,
                                                int maxOccurrences) {
        final EdgeCardinalityContext.Direction direction = isIncoming ? EdgeCardinalityContext.Direction.INCOMING : EdgeCardinalityContext.Direction.OUTGOING;

        rules.add(new EdgeOccurrences("EDGE_OCCURRENCES" + rules.size(),
                                      type.getName(),
                                      role,
                                      direction,
                                      minOccurrences,
                                      maxOccurrences));

        return this;
    }

    public DomainInitializer initializeRules() {
        RuleSetImpl ruleSet = new RuleSetImpl("DefinitionsRuleAdapterImpl", rules);
        domains.getDomainInfo().setRuleSet(ruleSet);
        return this;
    }

}
