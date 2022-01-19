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

package org.kie.workbench.common.stunner.sw.client.jsonpatch;

import elemental2.core.Global;

public class PatchFactory {

    public static Patch add(String path, Object value) {
        Patch patch = new Patch();
        patch.op = "add";
        patch.from = null;
        patch.path = path;
        patch.value = value;
        return patch;
    }

    public static Patch remove(String path) {
        Patch patch = new Patch();
        patch.op = "remove";
        patch.from = null;
        patch.path = path;
        patch.value = null;
        return patch;
    }

    public static Patch replace(String path, Object value) {
        Patch patch = new Patch();
        patch.op = "replace";
        patch.from = null;
        patch.path = path;
        patch.value = value;
        return patch;
    }

    private static String getStringValue(Object value) {
        if (null == value) {
            return null;
        }
        if (value instanceof String) {
            return "'" + value.toString() + "'";
        }
        return stringify(value);
    }

    private static String stringify(Object object) {
        return Global.JSON.stringify(object);
    }
}
