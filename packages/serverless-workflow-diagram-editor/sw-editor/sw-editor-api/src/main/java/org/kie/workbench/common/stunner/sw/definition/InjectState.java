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

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;

@JsType
public class InjectState extends State {

    @JsIgnore
    public static final String TYPE_INJECT = "inject";

    public String data;

    public boolean usedForCompensation;

    public InjectState() {
        this.type = TYPE_INJECT;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public boolean isUsedForCompensation() {
        return usedForCompensation;
    }

    public void setUsedForCompensation(boolean usedForCompensation) {
        this.usedForCompensation = usedForCompensation;
    }
}
