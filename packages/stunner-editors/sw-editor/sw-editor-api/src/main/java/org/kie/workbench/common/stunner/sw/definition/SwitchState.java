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
import org.jboss.errai.databinding.client.api.Bindable;
import org.kie.workbench.common.stunner.core.definition.annotation.Definition;
import org.kie.workbench.common.stunner.core.definition.annotation.Property;
import org.kie.workbench.common.stunner.core.definition.annotation.morph.Morph;

@Bindable
@Definition
@Morph(base = State.class)
@JsType
public class SwitchState extends State {

    @JsIgnore
    public static final String TYPE_SWITCH = "switch";

    @Property
    public String defaultCondition;

    public boolean usedForCompensation;

    public SwitchState() {
        this.type = TYPE_SWITCH;
        this.usedForCompensation = false;
    }

    public String getDefaultCondition() {
        return defaultCondition;
    }

    public void setDefaultCondition(String defaultCondition) {
        this.defaultCondition = defaultCondition;
    }

    public boolean isUsedForCompensation() {
        return usedForCompensation;
    }

    public void setUsedForCompensation(boolean usedForCompensation) {
        this.usedForCompensation = usedForCompensation;
    }
}
