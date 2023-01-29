package org.kie.workbench.common.stunner.core.api;

import java.util.Optional;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsAdapterUtils;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionProperty;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.definition.property.PropertyMetaTypes;

@JsType
public class JsDefinitionManager {

    @JsIgnore
    private JsDefinitionSetAdapter definitionSetAdapter;
    @JsIgnore
    private JsDefinitionAdapter definitionAdapter;
    @JsIgnore
    private JsPropertyAdapter propertyAdapter;
    @JsIgnore
    private JsRuleAdapter ruleAdapter;

    public static JsDefinitionManager build(JsDefinitionSetAdapter definitionSetAdapter,
                                            JsDefinitionAdapter definitionAdapter,
                                            JsPropertyAdapter propertyAdapter,
                                            JsRuleAdapter ruleAdapter) {
        return new JsDefinitionManager(definitionSetAdapter, definitionAdapter, propertyAdapter, ruleAdapter);
    }

    @SuppressWarnings("all")
    public JsDefinitionManager(JsDefinitionSetAdapter jsDefinitionSetAdapter, JsDefinitionAdapter definitionAdapter, JsPropertyAdapter propertyAdapter, JsRuleAdapter ruleAdapter) {
        this.definitionSetAdapter = jsDefinitionSetAdapter;
        this.definitionAdapter = definitionAdapter;
        this.propertyAdapter = propertyAdapter;
        this.ruleAdapter = ruleAdapter;
    }

    public String getObjectId(Object pojo) {
        return JsAdapterUtils.getObjectId(pojo);
    }

    public String getClassId(Object pojo) {
        return JsAdapterUtils.getClassId(pojo);
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

    public String getName(Object pojo) {
        String field = definitionAdapter.getMetaPropertyField(pojo, PropertyMetaTypes.NAME);
        Optional<?> property = definitionAdapter.getProperty(pojo, field);
        if (property.isPresent()) {
            String name = Js.uncheckedCast(propertyAdapter.getValue((JsDefinitionProperty) property.get()));
            return name;
        }
        return null;
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
