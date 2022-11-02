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

package org.kie.workbench.common.stunner.sw;

import jsinterop.annotations.JsType;

@JsType
public class Definitions {

    public String definitions;

    public Definitions() {
        definitions = "org.kie.workbench.common.stunner.sw.definition.Workflow,org.kie.workbench.common.stunner.sw.definition.Start,org.kie.workbench.common.stunner.sw.definition.End,org.kie.workbench.common.stunner.sw.definition.InjectState,org.kie.workbench.common.stunner.sw.definition.SwitchState,org.kie.workbench.common.stunner.sw.definition.EventState,org.kie.workbench.common.stunner.sw.definition.OperationState,org.kie.workbench.common.stunner.sw.definition.SleepState,org.kie.workbench.common.stunner.sw.definition.ParallelState,org.kie.workbench.common.stunner.sw.definition.ForEachState,org.kie.workbench.common.stunner.sw.definition.CallbackState,org.kie.workbench.common.stunner.sw.definition.OnEvent,org.kie.workbench.common.stunner.sw.definition.EventRef,org.kie.workbench.common.stunner.sw.definition.EventTimeout,org.kie.workbench.common.stunner.sw.definition.StartTransition,org.kie.workbench.common.stunner.sw.definition.ErrorTransition,org.kie.workbench.common.stunner.sw.definition.EventConditionTransition,org.kie.workbench.common.stunner.sw.definition.DataConditionTransition,org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition,org.kie.workbench.common.stunner.sw.definition.CompensationTransition,org.kie.workbench.common.stunner.sw.definition.Transition";
    }
}
