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

package org.kie.workbench.common.stunner.sw.definition;

import jsinterop.annotations.JsType;

@JsType
public class ActionNode {

    public String id;

    public String name;

    public String functionRef;

    public String eventRef;

    public String subFlowRef;

    public ActionNode() {
    }

    public ActionNode setName(String name) {
        this.name = name;
        return this;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

    public ActionNode setId(String id) {
        this.id = id;
        return this;
    }

    public String getFunctionRef() {
        return functionRef;
    }

    public ActionNode setFunctionRef(String functionRef) {
        this.functionRef = functionRef;
        return this;
    }

    public String getEventRef() {
        return eventRef;
    }

    public ActionNode setEventRef(String eventRef) {
        this.eventRef = eventRef;
        return this;
    }

    public String getSubFlowRef() {
        return subFlowRef;
    }

    public ActionNode setSubFlowRef(String subFlowRef) {
        this.subFlowRef = subFlowRef;
        return this;
    }
}
