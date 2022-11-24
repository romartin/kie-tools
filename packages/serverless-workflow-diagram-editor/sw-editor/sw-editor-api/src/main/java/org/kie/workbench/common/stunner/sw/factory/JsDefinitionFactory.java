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

package org.kie.workbench.common.stunner.sw.factory;

import javax.enterprise.context.ApplicationScoped;

import org.kie.workbench.common.stunner.core.factory.definition.DefinitionFactory;
import org.kie.workbench.common.stunner.sw.SWDefinitionSet;
import org.kie.workbench.common.stunner.sw.definition.CallbackState;
import org.kie.workbench.common.stunner.sw.definition.CompensationTransition;
import org.kie.workbench.common.stunner.sw.definition.DataConditionTransition;
import org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.EventConditionTransition;
import org.kie.workbench.common.stunner.sw.definition.EventRef;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.EventTimeout;
import org.kie.workbench.common.stunner.sw.definition.ForEachState;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.Metadata;
import org.kie.workbench.common.stunner.sw.definition.OnEvent;
import org.kie.workbench.common.stunner.sw.definition.OperationState;
import org.kie.workbench.common.stunner.sw.definition.ParallelState;
import org.kie.workbench.common.stunner.sw.definition.SleepState;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.SwitchState;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.definition.Workflow;

@ApplicationScoped
public class JsDefinitionFactory implements DefinitionFactory<Object> {

    @Override
    public boolean accepts(String identifier) {
        return true;
    }

    @Override
    public Object build(String identifier) {
        // TODO: Refactor this by j2cl usage or the use of builder methods.
        if (Workflow.class.getName().equals(identifier)) {
            return new Workflow();
        }

        if (Start.class.getName().equals(identifier)) {
            return new Start();
        }

        if (End.class.getName().equals(identifier)) {
            return new End();
        }

        if (Metadata.class.getName().equals(identifier)) {
            return new Metadata();
        }

        if (State.class.getName().equals(identifier)) {
            return new State();
        }

        if (InjectState.class.getName().equals(identifier)) {
            return new InjectState();
        }

        if (SwitchState.class.getName().equals(identifier)) {
            return new SwitchState();
        }

        if (EventState.class.getName().equals(identifier)) {
            return new EventState();
        }

        if (OperationState.class.getName().equals(identifier)) {
            return new OperationState();
        }

        if (SleepState.class.getName().equals(identifier)) {
            return new SleepState();
        }

        if (ParallelState.class.getName().equals(identifier)) {
            return new ParallelState();
        }

        if (ForEachState.class.getName().equals(identifier)) {
            return new ForEachState();
        }

        if (CallbackState.class.getName().equals(identifier)) {
            return new CallbackState();
        }

        if (Transition.class.getName().equals(identifier)) {
            return new Transition();
        }

        if (StartTransition.class.getName().equals(identifier)) {
            return new StartTransition();
        }

        if (ErrorTransition.class.getName().equals(identifier)) {
            return new ErrorTransition();
        }

        if (EventConditionTransition.class.getName().equals(identifier)) {
            return new EventConditionTransition();
        }

        if (DataConditionTransition.class.getName().equals(identifier)) {
            return new DataConditionTransition();
        }

        if (DefaultConditionTransition.class.getName().equals(identifier)) {
            return new DefaultConditionTransition();
        }

        if (CompensationTransition.class.getName().equals(identifier)) {
            return new CompensationTransition();
        }

        if (EventRef.class.getName().equals(identifier)) {
            return new EventRef();
        }

        if (OnEvent.class.getName().equals(identifier)) {
            return new OnEvent();
        }

        if (EventTimeout.class.getName().equals(identifier)) {
            return new EventTimeout();
        }

        if (SWDefinitionSet.class.getName().equals(identifier)) {

            return new SWDefinitionSet();
        }

        return null;
    }
}