package org.kie.workbench.common.stunner.sw.client.js;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsRuleAdapter;

// TODO: Move to stunner core
// TODO: Can this class use a generic type, instead of Object?
@JsType
public class JsDefinitionManager {

    @JsIgnore
    private JsDefinitionAdapter definitionAdapter;
    @JsIgnore
    private JsPropertyAdapter propertyAdapter;
    @JsIgnore
    private JsRuleAdapter ruleAdapter;

    public JsDefinitionManager(JsDefinitionAdapter definitionAdapter, JsPropertyAdapter propertyAdapter, JsRuleAdapter ruleAdapter) {
        this.definitionAdapter = definitionAdapter;
        this.propertyAdapter = propertyAdapter;
        this.ruleAdapter = ruleAdapter;
    }

    public DefinitionId getId(Object pojo) {
        return definitionAdapter.getId(pojo);
    }

    public String getCategory(Object pojo) {
        return definitionAdapter.getCategory(pojo);
    }

    public String getTitle(Object pojo) {
        return definitionAdapter.getTitle(pojo);
    }

    public String getDescription(Object pojo) {
        return definitionAdapter.getDescription(pojo);
    }

    public String[] getLabels(Object pojo) {
        return definitionAdapter.getLabels(pojo);
    }

    public String[] getPropertyFields(Object pojo) {
        return definitionAdapter.getPropertyFields(pojo);
    }
}
