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

import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.ActionsContainer;
import org.kie.workbench.common.stunner.sw.definition.CallFunctionAction;
import org.kie.workbench.common.stunner.sw.definition.CallSubflowAction;
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
    public static final String CATEGORY_ACTIONS = "SWActions";
    public static final String CATEGORY_TRANSITIONS = "SWTransitions";
    public static final String LABEL_WORKFLOW = "workflow";
    public static final String LABEL_ROOT_NODE = "rootNode";
    public static final String LABEL_EVENT = "event";
    public static final String LABEL_ON_EVENTS = "on_events";
    public static final String LABEL_TIMEOUT = "timeout";
    public static final String LABEL_START = "start";
    public static final String LABEL_END = "end";
    public static final String LABEL_ACTION = "action";
    public static final String LABEL_ACTIONS = "actions";
    public static final String LABEL_METADATA = "metadata";
    public static final String LABEL_TRANSITION = "transition";
    public static final String LABEL_TRANSITION_START = "transition_start";
    public static final String LABEL_TRANSITION_ERROR = "transition_error";
    public static final String LABEL_TRANSITION_EVENT_CONDITION = "transition_event_condition";
    public static final String LABEL_TRANSITION_DATA_CONDITION = "transition_data_condition";
    public static final String LABEL_TRANSITION_DEFAULT_CONDITION = "transition_default_condition";
    public static final String LABEL_TRANSITION_COMPENSATION = "transition_compensation";
    public static final String LABEL_TRANSITION_ACTION = "transition_action";
    public static final String LABEL_INJECT_STATE = "inject_state";
    public static final String LABEL_EVENT_STATE = "event_state";
    public static final String LABEL_OPERATION_STATE = "operation_state";
    public static final String LABEL_SWITCH_STATE = "switch_state";
    public static final String LABEL_SLEEP_STATE = "sleep_state";
    public static final String LABEL_PARALLEL_STATE = "parallel_state";
    public static final String LABEL_FOREACH_STATE = "foreach_state";
    public static final String LABEL_CALLBACK_STATE = "callback_state";

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

                // Element Factories
                .initializeElementFactory(NodeFactory.class, CATEGORY_STATES)
                .initializeElementFactory(EdgeFactory.class, CATEGORY_TRANSITIONS)

                // Categories.
                .setCategory(Workflow.class, CATEGORY_STATES)
                .setCategory(EventRef.class, CATEGORY_EVENTS)
                .setCategory(OnEvent.class, CATEGORY_EVENTS)
                .setCategory(EventTimeout.class, CATEGORY_TIMEOUTS)
                .setCategory(Start.class, CATEGORY_START)
                .setCategory(End.class, CATEGORY_END)
                .setCategory(ActionsContainer.class, CATEGORY_EVENTS)
                .setCategory(CallFunctionAction.class, CATEGORY_ACTIONS)
                .setCategory(CallSubflowAction.class, CATEGORY_ACTIONS)
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
                .setCategory(ActionTransition.class, CATEGORY_TRANSITIONS)

                // Labels.
                .setLabels(Workflow.class, LABEL_WORKFLOW)
                .setLabels(EventRef.class, LABEL_ROOT_NODE, LABEL_EVENT)
                .setLabels(OnEvent.class, LABEL_ROOT_NODE, LABEL_ON_EVENTS)
                .setLabels(EventTimeout.class, LABEL_ROOT_NODE, LABEL_TIMEOUT)
                .setLabels(ActionsContainer.class, LABEL_ROOT_NODE, LABEL_ACTIONS)
                .setLabels(CallFunctionAction.class, LABEL_ROOT_NODE, LABEL_ACTION)
                .setLabels(CallSubflowAction.class, LABEL_ROOT_NODE, LABEL_ACTION)
                .setLabels(Metadata.class, LABEL_ROOT_NODE, LABEL_METADATA)
                .setLabels(Transition.class, LABEL_TRANSITION)
                .setLabels(StartTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_START)
                .setLabels(ErrorTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_ERROR)
                .setLabels(EventConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_EVENT_CONDITION)
                .setLabels(DataConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DATA_CONDITION)
                .setLabels(DefaultConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DEFAULT_CONDITION)
                .setLabels(CompensationTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_COMPENSATION)
                .setLabels(ActionTransition.class, LABEL_TRANSITION_ACTION)
                .setLabels(Start.class, LABEL_ROOT_NODE, LABEL_START)
                .setLabels(End.class, LABEL_ROOT_NODE, LABEL_END)
                .setLabels(InjectState.class, LABEL_ROOT_NODE, LABEL_INJECT_STATE)
                .setLabels(EventState.class, LABEL_ROOT_NODE, LABEL_EVENT_STATE)
                .setLabels(OperationState.class, LABEL_ROOT_NODE, LABEL_OPERATION_STATE)
                .setLabels(SwitchState.class, LABEL_ROOT_NODE, LABEL_SWITCH_STATE)
                .setLabels(SleepState.class, LABEL_ROOT_NODE, LABEL_SLEEP_STATE)
                .setLabels(ParallelState.class, LABEL_ROOT_NODE, LABEL_PARALLEL_STATE)
                .setLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_FOREACH_STATE)
                .setLabels(CallbackState.class, LABEL_ROOT_NODE, LABEL_CALLBACK_STATE)

                // Occurrence Rules
                .addOccurrences(LABEL_WORKFLOW, 0, 1)
                .addOccurrences(LABEL_START, 0, 1)
                .addOccurrences(LABEL_END, 0, 1)
                .addOccurrences(LABEL_INJECT_STATE, 0, -1)
                .addOccurrences(LABEL_EVENT_STATE, 0, -1)
                .addOccurrences(LABEL_OPERATION_STATE, 0, -1)
                .addOccurrences(LABEL_SWITCH_STATE, 0, -1)
                .addOccurrences(LABEL_SLEEP_STATE, 0, -1)
                .addOccurrences(LABEL_PARALLEL_STATE, 0, -1)
                .addOccurrences(LABEL_FOREACH_STATE, 0, -1)
                .addOccurrences(LABEL_CALLBACK_STATE, 0, -1)

                // Docking Rules
                .addDockingRule(State.class, LABEL_TIMEOUT)

                // Containment Rules
                .addContainmentRule(OnEvent.class, LABEL_EVENT)
                .addContainmentRule(Workflow.class, LABEL_ROOT_NODE)
                .addContainmentRule(SWDefinitionSet.class, LABEL_WORKFLOW)
                .addContainmentRule(ActionsContainer.class, LABEL_ACTION)

                // Connection Rules
                .addConnectionRule(StartTransition.class,
                                   // Start State
                                   new String[]{LABEL_START, LABEL_INJECT_STATE},
                                   new String[]{LABEL_START, LABEL_EVENT_STATE},
                                   new String[]{LABEL_START, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_START, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_START, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_START, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_START, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_START, LABEL_CALLBACK_STATE})
                .addConnectionRule(Transition.class,
                                   // Inject State
                                   new String[]{LABEL_INJECT_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_CALLBACK_STATE},
                                   // Event State
                                   new String[]{LABEL_EVENT_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_CALLBACK_STATE},
                                   // Operation State
                                   new String[]{LABEL_OPERATION_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_CALLBACK_STATE},
                                   // Sleep State
                                   new String[]{LABEL_SLEEP_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SLEEP_STATE, LABEL_CALLBACK_STATE},
                                   // Parallel State
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_CALLBACK_STATE},
                                   // Foreach State
                                   new String[]{LABEL_FOREACH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_CALLBACK_STATE},
                                   // Callback State
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(CompensationTransition.class,
                                   // Inject State
                                   new String[]{LABEL_INJECT_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_INJECT_STATE, LABEL_CALLBACK_STATE},
                                   // Event State
                                   new String[]{LABEL_EVENT_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_CALLBACK_STATE},
                                   // Operation State
                                   new String[]{LABEL_OPERATION_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_CALLBACK_STATE},
                                   // Switch State
                                   new String[]{LABEL_SWITCH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_CALLBACK_STATE},
                                   // Parallel State
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_CALLBACK_STATE},
                                   // Foreach State
                                   new String[]{LABEL_FOREACH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_CALLBACK_STATE},
                                   // Callback State
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(ErrorTransition.class,
                                   // Event State
                                   new String[]{LABEL_EVENT_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_EVENT_STATE, LABEL_CALLBACK_STATE},
                                   // Operation State
                                   new String[]{LABEL_OPERATION_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_OPERATION_STATE, LABEL_CALLBACK_STATE},
                                   // Switch State
                                   new String[]{LABEL_SWITCH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_CALLBACK_STATE},
                                   // Parallel State
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_PARALLEL_STATE, LABEL_CALLBACK_STATE},
                                   // Foreach State
                                   new String[]{LABEL_FOREACH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_FOREACH_STATE, LABEL_CALLBACK_STATE},
                                   // Callback State
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_CALLBACK_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(DataConditionTransition.class,
                                   // Switch State
                                   new String[]{LABEL_SWITCH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(DefaultConditionTransition.class,
                                   // Switch State
                                   new String[]{LABEL_SWITCH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(EventConditionTransition.class,
                                   // Switch State
                                   new String[]{LABEL_SWITCH_STATE, LABEL_INJECT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_EVENT_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_OPERATION_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SWITCH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_SLEEP_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_PARALLEL_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_FOREACH_STATE},
                                   new String[]{LABEL_SWITCH_STATE, LABEL_CALLBACK_STATE})
                .addConnectionRule(ActionTransition.class, new String[]{LABEL_EVENT, LABEL_ACTION})

                // Edge Occurrence Rules
                // Event
                .addEdgeOccurrences(ActionTransition.class, LABEL_EVENT, true, 0, 0)
                .addEdgeOccurrences(ActionTransition.class, LABEL_EVENT, false, 0, -1)
                // Action
                .addEdgeOccurrences(ActionTransition.class, LABEL_ACTION, true, 0, -1)
                .addEdgeOccurrences(ActionTransition.class, LABEL_ACTION, false, 0, 0)
                // Start State
                .addEdgeOccurrences(StartTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(StartTransition.class, LABEL_START, false, 0, 1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(Transition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(Transition.class, LABEL_START, false, 0, 0)
                .addEdgeOccurrences(ActionTransition.class, LABEL_START, true, 0, 0)
                .addEdgeOccurrences(ActionTransition.class, LABEL_START, false, 0, 0)
                // End State
                .addEdgeOccurrences(CompensationTransition.class, LABEL_END, true, 0, 0)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(Transition.class, LABEL_END, false, 0, 0)
                .addEdgeOccurrences(ActionTransition.class, LABEL_END, false, 0, 0)
                // Inject State
                .addEdgeOccurrences(Transition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_INJECT_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_INJECT_STATE, false, 0, 1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_INJECT_STATE, false, 0, 1)
                // Event State
                .addEdgeOccurrences(Transition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_EVENT_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_EVENT_STATE, false, 0, 1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_EVENT_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_EVENT_STATE, false, 0, 1)
                // Operation State
                .addEdgeOccurrences(Transition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_OPERATION_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_OPERATION_STATE, false, 0, 1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_OPERATION_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_OPERATION_STATE, false, 0, 1)
                // Switch State
                .addEdgeOccurrences(Transition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_SWITCH_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_SWITCH_STATE, false, 1, 1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_SWITCH_STATE, false, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_SWITCH_STATE, false, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_SWITCH_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_SWITCH_STATE, false, 0, 1)
                // Sleep State
                .addEdgeOccurrences(Transition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_SLEEP_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_SLEEP_STATE, false, 0, 1)
                // Parallel State
                .addEdgeOccurrences(Transition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_PARALLEL_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_PARALLEL_STATE, false, 0, 1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_PARALLEL_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_PARALLEL_STATE, false, 0, 1)
                // Foreach State
                .addEdgeOccurrences(Transition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_FOREACH_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_FOREACH_STATE, false, 0, 1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_FOREACH_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_FOREACH_STATE, false, 0, 1)
                // Callback State
                .addEdgeOccurrences(Transition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(EventConditionTransition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(DefaultConditionTransition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(DataConditionTransition.class, LABEL_CALLBACK_STATE, true, 0, -1)
                .addEdgeOccurrences(Transition.class, LABEL_CALLBACK_STATE, false, 0, 1)
                .addEdgeOccurrences(ErrorTransition.class, LABEL_CALLBACK_STATE, false, 0, -1)
                .addEdgeOccurrences(CompensationTransition.class, LABEL_CALLBACK_STATE, false, 0, 1)

                .initializeRules();
    }
}
