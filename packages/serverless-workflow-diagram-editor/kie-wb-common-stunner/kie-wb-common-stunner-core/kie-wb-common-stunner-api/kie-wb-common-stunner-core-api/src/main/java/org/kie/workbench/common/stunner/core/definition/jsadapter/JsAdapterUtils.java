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

package org.kie.workbench.common.stunner.core.definition.jsadapter;

import com.google.gwt.core.client.JavaScriptObject;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType
public class JsAdapterUtils {

    public static String getObjectId(Object o) {
        String typeName = o.getClass().getName();
        if (typeName.startsWith(JavaScriptObject.class.getName())) {
            JsPropertyMap<Object> map = Js.asPropertyMap(o);
            Object p = map.nestedGet("__proto__.constructor.name");
            return p.toString();
        }
        return typeName;
    }

    public static String getClassId(Object o) {
        if (o instanceof Class) {
            return ((Class<?>) o).getName();
        }
        String typeName = o.getClass().getName();
        if (typeName.startsWith(JavaScriptObject.class.getName())) {
            JsPropertyMap<Object> map = Js.asPropertyMap(o);
            Object p = map.get("name");
            return p.toString();
        }
        return typeName;
    }
}
