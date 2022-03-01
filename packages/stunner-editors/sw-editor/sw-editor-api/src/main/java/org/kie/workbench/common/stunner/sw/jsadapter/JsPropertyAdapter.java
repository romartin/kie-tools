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

import javax.enterprise.context.ApplicationScoped;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.definition.adapter.PropertyAdapter;

@ApplicationScoped
public class JsPropertyAdapter implements PropertyAdapter<JsDefinitionProperty, Object> {

    @Override
    public String getId(JsDefinitionProperty property) {
        String defId = JsDefinitionAdapter.getJsDefinitionId(property.getPojo());
        return defId + "." + property.getField();
    }

    // TODO
    @Override
    public String getCaption(JsDefinitionProperty property) {
        return property.getField();
    }

    @Override
    public Object getValue(JsDefinitionProperty property) {
        JsPropertyMap<Object> map = Js.asPropertyMap(property.getPojo());
        Object value = map.get(property.getField());
        return value;
    }

    @Override
    public void setValue(JsDefinitionProperty property, Object value) {
        JsPropertyMap<Object> map = Js.asPropertyMap(property.getPojo());
        map.set(property.getField(), value);
    }

    @Override
    public int getPriority() {
        return 0;
    }

    @Override
    public boolean accepts(Class<?> type) {
        return JsDefinitionProperty.class.equals(type);
    }
}
