package org.kie.workbench.common.stunner.core.client.api;

import java.lang.annotation.Annotation;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.JsDefinitionManager;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.i18n.StunnerTranslationService;
import org.kie.workbench.common.stunner.core.rule.RuleSet;

@ApplicationScoped
public class DomainInitializer {

    @Inject
    private DefinitionManager definitionManager;
    @Inject
    private JsDefinitionAdapter jsDefinitionAdapter;
    @Inject
    private JsPropertyAdapter jsPropertyAdapter;
    @Inject
    private JsRuleAdapter jsRuleAdapter;
    @Inject
    private StunnerTranslationService translationService;
    @Inject
    private JsDefinitionSetAdapter jsDefinitionSetAdapter;

    @PostConstruct
    public void build() {
        JsDefinitionManager jsDefinitionManager = JsDefinitionManager.build(translationService,
                                                                            definitionManager.definitionSets(),
                                                                            jsDefinitionSetAdapter,
                                                                            jsDefinitionAdapter,
                                                                            jsPropertyAdapter,
                                                                            jsRuleAdapter);
        JsWindow.editor = new JsStunnerEditor();
        JsWindow.editor.definitions = jsDefinitionManager;
    }

    public DomainInitializer initializeDefinitionSet(Object definitionSet) {
        JsWindow.editor.definitions.initializeDefinitionSet(definitionSet);
        return this;
    }

    public DomainInitializer initializeDefinitionsField(String definitionsField) {
        JsWindow.editor.definitions.initializeDefinitionsField(definitionsField);
        return this;
    }

    public DomainInitializer initializeDomainQualifier(Annotation domainQualifier) {
        JsWindow.editor.definitions.initializeDomainQualifier(domainQualifier);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeCategory(Class type, String category) {
        JsWindow.editor.definitions.initializeCategory(type.getName(), category);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeLabels(Class type, String... definitionLabels) {
        JsWindow.editor.definitions.initializeLabels(type.getName(), definitionLabels);
        return this;
    }

    @SuppressWarnings("all")
    public DomainInitializer initializeDefinitionNameField(Class type, String nameField) {
        JsWindow.editor.definitions.initializeDefinitionNameField(type.getName(), nameField);
        return this;
    }

    public DomainInitializer initializeRules(RuleSet ruleSet) {
        JsWindow.editor.definitions.initializeRules(ruleSet);
        return this;
    }
}
