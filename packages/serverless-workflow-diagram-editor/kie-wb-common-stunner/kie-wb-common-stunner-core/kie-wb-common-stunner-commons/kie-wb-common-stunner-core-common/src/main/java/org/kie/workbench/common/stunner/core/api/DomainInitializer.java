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

import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.stream.Collectors;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.definition.jsadapter.JsAdapterUtils;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDomains;
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

    private final Collection<Rule> rules;

    public DomainInitializer() {
        this.rules = new HashSet<>();
    }

    @SuppressWarnings("all")
    public DomainInitializer setDefinitionSet(Object definitionSet) {
        domains.getDomain().definitionSet = definitionSet;
        ((DynamicRegistry) definitionManager.definitionSets()).register(definitionSet);
        return this;
    }

    public DomainInitializer setDefinitionsField(String definitionsField) {
        domains.getDomain().definitionsField = definitionsField;
        return this;
    }

    public DomainInitializer setDomainQualifier(Annotation domainQualifier) {
        domains.getDomain().domainQualifier = domainQualifier;
        return this;
    }

    public DomainInitializer addDefinition(Object type) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomain().addDefinition(typeId);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer setCategory(Object type, String category) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomain().setCategory(typeId, category);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer setLabels(Object type, String... definitionLabels) {
        String typeId = JsAdapterUtils.getClassId(type);
        domains.getDomain().setLabels(typeId, definitionLabels);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer setDefinitionNameField(Class type, String nameField) {
        domains.getDomain().setDefinitionNameField(JsAdapterUtils.getClassId(type), nameField);
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
        RuleSetImpl ruleSet = new RuleSetImpl("DefinitionsRuleAdapterImpl", rules.stream().collect(Collectors.<Rule>toSet()));
        domains.getDomain().setRuleSet(ruleSet);
        rules.clear();
        return this;
    }
}
