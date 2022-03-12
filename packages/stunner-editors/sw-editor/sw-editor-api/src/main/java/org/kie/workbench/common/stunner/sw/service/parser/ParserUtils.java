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

package org.kie.workbench.common.stunner.sw.service.parser;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;

@ApplicationScoped
public class ParserUtils {

    @Inject
    private DefinitionManager definitionManager;
    @Inject
    private FactoryManager factoryManager;

    public <T> T parse(Class<? extends T> type, T jso) {
        T instance = factoryManager.newDefinition(type.getName());
        // TODO: Check stunner vs native approach here...
        //instance = stunnerMerge(instance, jso);
        instance = nativeMerge(instance, jso);
        return (T) instance;
    }

    private <T> T stunnerMerge(Object instance, Object jso) {
        JsPropertyMap<Object> instanceMap = Js.asPropertyMap(instance);
        JsPropertyMap<Object> jsoMap = Js.asPropertyMap(jso);
        String[] propertyFields = definitionManager.adapters().forDefinition().getPropertyFields(instance);
        for (String propertyField : propertyFields) {
            Object value = jsoMap.get(propertyField);
            if (null != value) {
                instanceMap.set(propertyField, value);
            }
        }
        return Js.uncheckedCast(instance);
    }

    public static native <T> T nativeMerge(Object o1, Object o2) /*-{
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }
        // return Object.assign({}, o1, o2);
        return Object.assign(o1, o2);
    }-*/;
}
