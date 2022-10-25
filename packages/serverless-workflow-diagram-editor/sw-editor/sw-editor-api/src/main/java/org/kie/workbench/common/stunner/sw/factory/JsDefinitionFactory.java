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
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.factory.definition.DefinitionFactory;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition1;
import org.kie.workbench.common.stunner.sw.definition.JsDefinition2;
import org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionUtils;

// TODO: Merge with Handrey stuff
// TODO: Get rid of this factory
@ApplicationScoped
public class JsDefinitionFactory implements DefinitionFactory<Object> {

    @Inject
    private JsDefinitionUtils definitionUtils;

    @Override
    public boolean accepts(String identifier) {
        return definitionUtils.isJsDefinition(identifier);
    }

    @Override
    public Object build(String identifier) {
        // TODO: Refactor this by j2cl usage or the use of builder methods.
        if (JsDefinition1.class.getName().equals(identifier)) {
            return new JsDefinition1();
        }
        if (JsDefinition2.class.getName().equals(identifier)) {
            return new JsDefinition2();
        }

        // TODO: Just copy/pasted from generated model class stuff

        if (org.kie.workbench.common.stunner.sw.definition.CompensationTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.CompensationTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.OperationState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.OperationState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.EventRef.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.EventRef();
        }

        if (org.kie.workbench.common.stunner.sw.definition.EventConditionTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.EventConditionTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.CallEventAction.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.CallEventAction();
        }

        if (org.kie.workbench.common.stunner.sw.definition.OnEvent.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.OnEvent();
        }

        if (org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.InjectState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.InjectState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.CallbackState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.CallbackState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.Start.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.Start();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ActionNode.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ActionNode();
        }

        if (org.kie.workbench.common.stunner.sw.definition.SwitchState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.SwitchState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ParallelState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ParallelState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.End.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.End();
        }

        if (org.kie.workbench.common.stunner.sw.definition.DataConditionTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.DataConditionTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.StartTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.StartTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.SleepState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.SleepState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.Workflow.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.Workflow();
        }

        if (org.kie.workbench.common.stunner.sw.definition.State.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.State();
        }

        if (org.kie.workbench.common.stunner.sw.definition.EventState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.EventState();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ErrorTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ErrorTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ActionTransition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ActionTransition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ActionsContainer.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ActionsContainer();
        }

        if (org.kie.workbench.common.stunner.sw.definition.CallFunctionAction.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.CallFunctionAction();
        }

        if (org.kie.workbench.common.stunner.sw.definition.Transition.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.Transition();
        }

        if (org.kie.workbench.common.stunner.sw.definition.CallSubflowAction.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.CallSubflowAction();
        }

        if (org.kie.workbench.common.stunner.sw.definition.EventTimeout.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.EventTimeout();
        }

        if (org.kie.workbench.common.stunner.sw.definition.ForEachState.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.definition.ForEachState();
        }

        if (org.kie.workbench.common.stunner.sw.Definitions.class.getName().equals(identifier)) {

            return new org.kie.workbench.common.stunner.sw.Definitions();
        }

        throw new RuntimeException("This factory [" + this.getClass().getName() + "] " +
                                           "must provide a definition for [" + identifier + "]");
    }
}