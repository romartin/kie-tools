package org.kie.workbench.common.stunner.sw;

import java.lang.annotation.Annotation;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;
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
import org.kie.workbench.common.stunner.sw.factory.RulesFactory;

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
                .initializeDefinitionSet(new SWDefinitionSet())
                .initializeDefinitionsField("definitions")
                .initializeDomainQualifier(new SWEditor() {
                    @Override
                    public Class<? extends Annotation> annotationType() {
                        return SWEditor.class;
                    }
                })
                // Categories.
                .initializeCategory(Workflow.class, CATEGORY_STATES)
                .initializeCategory(EventRef.class, CATEGORY_EVENTS)
                .initializeCategory(OnEvent.class, CATEGORY_EVENTS)
                .initializeCategory(EventTimeout.class, CATEGORY_TIMEOUTS)
                .initializeCategory(Start.class, CATEGORY_START)
                .initializeCategory(End.class, CATEGORY_END)
                .initializeCategory(Metadata.class, CATEGORY_STATES)
                .initializeCategory(State.class, CATEGORY_STATES)
                .initializeCategory(InjectState.class, CATEGORY_STATES)
                .initializeCategory(SwitchState.class, CATEGORY_STATES)
                .initializeCategory(EventState.class, CATEGORY_STATES)
                .initializeCategory(OperationState.class, CATEGORY_STATES)
                .initializeCategory(SleepState.class, CATEGORY_STATES)
                .initializeCategory(ParallelState.class, CATEGORY_STATES)
                .initializeCategory(ForEachState.class, CATEGORY_STATES)
                .initializeCategory(CallbackState.class, CATEGORY_STATES)
                .initializeCategory(Transition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(StartTransition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(ErrorTransition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(EventConditionTransition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(DataConditionTransition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(DefaultConditionTransition.class, CATEGORY_TRANSITIONS)
                .initializeCategory(CompensationTransition.class, CATEGORY_TRANSITIONS)
                // Labels.
                .initializeLabels(Workflow.class, LABEL_WORKFLOW)
                .initializeLabels(EventRef.class, LABEL_ROOT_NODE, LABEL_EVENT)
                .initializeLabels(OnEvent.class, LABEL_ROOT_NODE, LABEL_ON_EVENTS)
                .initializeLabels(EventTimeout.class, LABEL_ROOT_NODE, LABEL_TIMEOUT)
                .initializeLabels(Start.class, LABEL_ROOT_NODE, LABEL_START)
                .initializeLabels(End.class, LABEL_ROOT_NODE, LABEL_END)
                .initializeLabels(Metadata.class, LABEL_ROOT_NODE, LABEL_METADATA)
                .initializeLabels(State.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(InjectState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(SwitchState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(EventState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(OperationState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(SleepState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ParallelState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(ForEachState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(CallbackState.class, LABEL_ROOT_NODE, LABEL_STATE)
                .initializeLabels(Transition.class, LABEL_TRANSITION)
                .initializeLabels(StartTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_START)
                .initializeLabels(ErrorTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_ERROR)
                .initializeLabels(EventConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_EVENT_CONDITION)
                .initializeLabels(DataConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DATA_CONDITION)
                .initializeLabels(DefaultConditionTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_DEFAULT_CONDITION)
                .initializeLabels(CompensationTransition.class, LABEL_TRANSITION, LABEL_TRANSITION_COMPENSATION)
                // Rules.
                .initializeRules(RulesFactory.buildRuleSet());
    }
}
