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

package org.kie.workbench.common.stunner.core.definition.jsadapter;

import java.util.Optional;

import javax.enterprise.context.ApplicationScoped;

import elemental2.core.Function;
import elemental2.core.JsObject;
import elemental2.core.Reflect;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.core.definition.property.PropertyMetaTypes;
import org.kie.workbench.common.stunner.core.factory.graph.ElementFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.i18n.StunnerTranslationService;

@ApplicationScoped
public class JsDefinitionAdapter implements DefinitionAdapter<Object> {

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
        return translationService.getValue(id + StunnerTranslationService.I18N_SEPARATOR + "category");
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
        String labels = translationService.getValue(id + StunnerTranslationService.I18N_SEPARATOR + "labels");
        return labels.isEmpty() ? new String[0] : labels.split(",");
    }

    @Override
    public String[] getPropertyFields(Object pojo) {
        // Exclude native js object properties and functions
        return JsObject.getOwnPropertyNames(pojo)
                .filter((prop, i, jsArray) -> (!(prop.contains("__") || Reflect.get(pojo, prop) instanceof Function)))
                .asArray(new String[0]);
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
            return translationService.getValue(id + StunnerTranslationService.I18N_SEPARATOR + "property_name");
        }
        // Only Name is supported
        throw new UnsupportedOperationException("Unsupported PropertyMetaType: " + metaType.name());
    }

    @Override
    public Class<? extends ElementFactory> getGraphFactoryType(Object pojo) {
        return NodeFactory.class;
    }

    @Override
    public int getPriority() {
        return 0;
    }

    @Override
    public boolean accepts(Class<?> type) {
        return true;
    }

    public void setTranslationService(StunnerTranslationService translationService) {
        this.translationService = translationService;
    }

}