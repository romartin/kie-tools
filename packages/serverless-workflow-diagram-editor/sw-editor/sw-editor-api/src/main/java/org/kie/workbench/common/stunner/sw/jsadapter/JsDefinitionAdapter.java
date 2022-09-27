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

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.google.gwt.core.client.JavaScriptObject;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.core.definition.property.PropertyMetaTypes;
import org.kie.workbench.common.stunner.core.factory.graph.ElementFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.i18n.StunnerTranslationService;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition1;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition2;

import static org.kie.workbench.common.stunner.core.i18n.AbstractTranslationService.I18N_SEPARATOR;

@ApplicationScoped
public class JsDefinitionAdapter implements DefinitionAdapter<Object> {

    @Inject
    private StunnerTranslationService translationService;

    @Override
    public DefinitionId getId(Object pojo) {
        String defId = getJsDefinitionId(pojo);
        return DefinitionId.build(defId);
    }

    public static String getJsDefinitionId(Object pojo) {
        return pojo.getClass().getName();
    }

    @Override
    public String getCategory(Object pojo) {
        String id = getJsDefinitionId(pojo);
        return translationService.getValue(id + I18N_SEPARATOR + "category");
    }

    @Override
    public String getTitle(Object pojo) {
        String id = getJsDefinitionId(pojo);
        return translationService.getDefinitionTitle(id);
    }

    @Override
    public String getDescription(Object pojo) {
        String id = getJsDefinitionId(pojo);
        return translationService.getDefinitionDescription(id);
    }

    @Override
    public String[] getLabels(Object pojo) {
        String id = getJsDefinitionId(pojo);
        String labels = translationService.getValue(id + I18N_SEPARATOR + "labels");
        return labels.isEmpty() ? new String[0] : labels.split(",");
    }

    @Override
    public String[] getPropertyFields(Object pojo) {
        JsPropertyMap<Object> map = Js.asPropertyMap(pojo);
        List<String> fields = new LinkedList<>();
        // TODO: Filter out js object's fields - proto,castableTypeMap,$init,functions (getters/setters, equals, notify, etc)
        map.forEach(fields::add);
        return fields.toArray(new String[fields.size()]);
    }

    @Override
    public Optional<?> getProperty(Object pojo, String field) {
        JsDefinitionProperty property = new JsDefinitionProperty(pojo, field);
        return Optional.of(property);
    }

    @Override
    public String getMetaPropertyField(Object pojo, PropertyMetaTypes metaType) {
        if (metaType == PropertyMetaTypes.NAME) {
            String id = getJsDefinitionId(pojo);
            return translationService.getValue(id + I18N_SEPARATOR + "property_name");
        }
        // TODO: Other property types.
        return null;
    }

    @Override
    public Class<? extends ElementFactory> getGraphFactoryType(Object pojo) {
        return NodeFactory.class;
    }

    @Override
    public int getPriority() {
        return 0;
    }

    // TODO
    @Override
    public boolean accepts(Class<?> type) {
        return isJsDefinition(type);
    }

    /*
        TODO:
        - When parsing an object from js -> it's a JavaScriptObject
        - When creating from the tool -> it's the concrete Js Type
     */

    public static boolean isJsDefinition(Class<?> type) {
        return "com.google.gwt.core.client.JavaScriptObject$".equals(type.getName()) ||
                JsDefinition1.class.getName().equals(type.getName()) ||
                JsDefinition2.class.getName().equals(type.getName());
    }

    public static boolean isJsDefinition(Object instance) {
        return (instance instanceof JavaScriptObject) || (instance instanceof JsDefinition);
    }
}