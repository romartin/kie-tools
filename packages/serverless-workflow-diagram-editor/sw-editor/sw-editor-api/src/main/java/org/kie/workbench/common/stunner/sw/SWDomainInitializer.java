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

import java.lang.annotation.Annotation;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.api.DomainInitializer;
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
public class SWDomainInitializer {

    @Inject
    private DomainInitializer domainInitializer;

    public static final String CATEGORY_STATES = "SWStates";
    public static final String CATEGORY_EVENTS = "SWEvents";
    public static final String CATEGORY_TIMEOUTS = "SWTimeouts";
    public static final String CATEGORY_START = "SWStart";
    public static final String CATEGORY_END = "SWEnd";
    public static final String CATEGORY_TRANSITIONS = "SWTransitions";
    public static final String LABEL_WORKFLOW = "workflow";
    public static final String LABEL_ROOT_NODE = "rootNode";
    public static final String LABEL_EVENT = "event";
    public static final String LABEL_ON_EVENTS = "on_events";
    public static final String LABEL_TIMEOUT = "timeout";
    public static final String LABEL_START = "start";
    public static final String LABEL_END = "end";
    public static final String LABEL_METADATA = "metadata";
    public static final String LABEL_STATE = "state";
    public static final String LABEL_TRANSITION = "transition";
    public static final String LABEL_TRANSITION_START = "transition_start";
    public static final String LABEL_TRANSITION_ERROR = "transition_error";
    public static final String LABEL_TRANSITION_EVENT_CONDITION = "transition_event_condition";
    public static final String LABEL_TRANSITION_DATA_CONDITION = "transition_data_condition";
    public static final String LABEL_TRANSITION_DEFAULT_CONDITION = "transition_default_condition";
    public static final String LABEL_TRANSITION_COMPENSATION = "transition_compensation";

    public void initialize() {
        domainInitializer
                // Definition Set initialization.
                .setDefinitionSet(new SWDefinitionSet())
                .setDefinitionsField("definitions")
                .setDomainQualifier(new SWEditor() {
                    @Override
                    public Class<? extends Annotation> annotationType() {
                        return SWEditor.class;
                    }
                })
                // Categories.
                .setCategory(Workflow.class, CATEGORY_STATES)
                .setCategory(EventRef.class, CATEGORY_EVENTS)
                .setCategory(OnEvent.class, CATEGORY_EVENTS)
                .setCategory(EventTimeout.class, CATEGORY_TIMEOUTS)
                .setCategory(Start.class, CATEGORY_START)
                .setCategory(End.class, CATEGORY_END)
                .setCategory(Metadata.class, CATEGORY_STATES)
                .setCategory(State.class, CATEGORY_STATES)
                .setCategory(InjectState.class, CATEGORY_STATES)
                .setCategory(SwitchState.class, CATEGORY_STATES)
                .setCategory(EventState.class, CATEGORY_STATES)
                .setCategory(OperationState.class, CATEGORY_STATES)
                .setCategory(SleepState.class, CATEGORY_STATES)
                .setCategory(ParallelState.class, CATEGORY_STATES)
                .setCategory(ForEachState.class, CATEGORY_STATES)
                .setCategory(CallbackState.class, CATEGORY_STATES)
                .setCategory(Transition.class, CATEGORY_TRANSITIONS)
                .setCategory(StartTransition.class, CATEGORY_TRANSITIONS)
                .setCategory(ErrorTransition.class, CATEGORY_TRANSITIONS)
                .setCategory(EventConditionTransition.class, CATEGORY_TRANSITIONS)
                .setCategory(DataConditionTransition.class, CATEGORY_TRANSITIONS)
                .setCategory(DefaultConditionTransition.class, CATEGORY_TRANSITIONS)
                .setCategory(CompensationTransition.class, CATEGORY_TRANSITIONS)
                // Labels.
                .setLabels(Workflow.class, LABEL_WORKFLOW)
                .setLabels(EventRef.class, LABEL_ROOT_NODE, LABEL_EVENT)
                .setLabels(OnEvent.class, LABEL_ROOT_NODE, LABEL_ON_EVENTS)
                .setLabels(EventTimeout.class, LABEL_ROOT_NODE, LABEL_TIMEOUT)
                .setLabels(Start.class, LABEL_ROOT_NODE, LABEL_START)
                .setLabels(End.class, LABEL_ROOT_NODE, LABEL_END)
                .setLabels(Metadata.class, LABEL_ROOT_NODE, LABEL_METADATA)
                .setLabels(State.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(InjectState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(SwitchState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(EventState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(OperationState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(SleepState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ParallelState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(CallbackState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .setLabels(Transition.class, LABEL_TRANSITION)
                .setLabels(StartTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_START)
                .setLabels(ErrorTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_ERROR)
                .setLabels(EventConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_EVENT_CONDITION)
                .setLabels(DataConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DATA_CONDITION)
                .setLabels(DefaultConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DEFAULT_CONDITION)
                .setLabels(CompensationTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_COMPENSATION)
                // Rules.
                .addContainmentRule(OnEvent.class, LABEL_EVENT)
                .addContainmentRule(Workflow.class, LABEL_ROOT_NODE)
                .addContainmentRule(SWDefinitionSet.class, LABEL_WORKFLOW)
                .addConnectionRule(DataConditionTransition.class,
                                   new String[]{LABEL_STATE, LABEL_STATE},
                                   new String[]{LABEL_STATE, LABEL_END})
                .addConnectionRule(DefaultConditionTransition.class,
                                   new String[]{LABEL_STATE, LABEL_STATE},
                                   new String[]{LABEL_STATE, LABEL_END})
                .addConnectionRule(ErrorTransition.class,
                                   new String[]{LABEL_STATE, LABEL_STATE},
                                   new String[]{LABEL_STATE, LABEL_END})
                .addConnectionRule(EventConditionTransition.class,
                                   new String[]{LABEL_STATE, LABEL_STATE},
                                   new String[]{LABEL_STATE, LABEL_END})
                .addConnectionRule(Transition.class,
                                   new String[]{LABEL_STATE, LABEL_STATE},
                                   new String[]{LABEL_STATE, LABEL_END})
                .addConnectionRule(CompensationTransition.class, new String[]{LABEL_STATE, LABEL_STATE})
                .addConnectionRule(StartTransition.class, new String[]{LABEL_START, LABEL_STATE})
                .addDockingRule(State.class, LABEL_TIMEOUT)
                .addOccurrences(LABEL_WORKFLOW, 0, 1)
                .addOccurrences(LABEL_START, 0, 1)
                .addOccurrences(LABEL_END, 0, 1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_STATE, false, 0, 1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_END, true, 0, 0)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_STATE, false, 0, 1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_STATE, false, 0, 1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_STATE, false, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_STATE, false, 0, 1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(StartTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(StartTransition.class, LABEL_START, false, 0, 1)
                .addEdgeOccurrences(Transition.class, LABEL_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_STATE, false, 0, 1)
                .addEdgeOccurrences(Transition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(Transition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(Transition.class, LABEL_END, false, 0, 0)
                .initializeRules();
    }

    public DomainInitializer getDomainInitializer() {
        return domainInitializer;
    }
}
