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

import java.lang.annotation.Annotation;
import java.util.Arrays;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils;
import org.kie.workbench.common.stunner.core.factory.graph.ElementFactory;
import org.kie.workbench.common.stunner.core.factory.graph.GraphFactory;
import org.kie.workbench.common.stunner.core.i18n.StunnerTranslationService;

import static org.kie.workbench.common.stunner.core.i18n.AbstractTranslationService.I18N_SEPARATOR;

// TODO: PoC - Decouple from SWF domain and move to core.
@ApplicationScoped
public class JsDefinitionSetAdapter implements DefinitionSetAdapter<Object> {

    @Inject
    private StunnerTranslationService translationService;

    @Override
    public String getId(Object pojo) {
        return org.kie.workbench.common.stunner.sw.Definitions.class.getName();
    }

    @Override
    public String getDomain(Object pojo) {
        return BindableAdapterUtils.getDefinitionSetDomain(pojo.getClass());
    }

    @Override
    public String getDescription(Object pojo) {
        return translationService.getDefinitionSetDescription(getId(pojo));
    }

    @Override
    public Set<String> getDefinitions(Object pojo) {
        String field = translationService.getValue(getId(pojo) + I18N_SEPARATOR + "field_definitions");
        JsPropertyMap<Object> map = Js.asPropertyMap(pojo);
        String definitions = Js.uncheckedCast(map.get(field));
        String[] split = definitions.split(",");
        return Arrays.stream(split).collect(Collectors.toSet());
    }

    @Override
    public Class<? extends ElementFactory> getGraphFactoryType(Object pojo) {
        return GraphFactory.class;
    }

    @Override
    public Annotation getQualifier(Object pojo) {
        return new org.kie.workbench.common.stunner.sw.SWEditor() {
            @Override
            public Class<? extends Annotation> annotationType() {
                return org.kie.workbench.common.stunner.sw.SWEditor.class;
            }
        };
    }

    @Override
    public Optional<String> getSvgNodeId(Object pojo) {
        return translationService.getDefinitionSetSvgNodeId(getId(pojo));
    }

    @Override
    public int getPriority() {
        return 0;
    }

    @Override
    public boolean accepts(Class<?> type) {
        return org.kie.workbench.common.stunner.sw.Definitions.class.getName().equals(type.getName());
    }
}