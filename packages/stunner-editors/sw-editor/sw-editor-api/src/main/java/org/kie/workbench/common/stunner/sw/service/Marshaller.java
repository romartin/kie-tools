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

package org.kie.workbench.common.stunner.sw.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.core.Global;
import elemental2.core.JsArray;
import jsinterop.base.Js;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.command.impl.CompositeCommand;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.DirectGraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.impl.GraphImpl;
import org.kie.workbench.common.stunner.core.graph.processing.index.GraphIndexBuilder;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.util.DefinitionUtils;
import org.kie.workbench.common.stunner.sw.definition.ActionNode;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.CallFunctionAction;
import org.kie.workbench.common.stunner.sw.definition.CallSubflowAction;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.EventRef;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.EventTransition;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.OnEvents;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.SwitchState;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.definition.Workflow;
import org.kie.workbench.common.stunner.sw.factory.EventsRegistry;
import org.kie.workbench.common.stunner.sw.service.MarshallUtils.VerticalLayoutBuilder;
import org.kie.workbench.common.stunner.sw.spec.CNCFAction;
import org.kie.workbench.common.stunner.sw.spec.CNCFError;
import org.kie.workbench.common.stunner.sw.spec.CNCFEvent;
import org.kie.workbench.common.stunner.sw.spec.CNCFEventState;
import org.kie.workbench.common.stunner.sw.spec.CNCFOnEvent;
import org.kie.workbench.common.stunner.sw.spec.CNCFState;
import org.kie.workbench.common.stunner.sw.spec.CNCFWorkflow;

@ApplicationScoped
public class Marshaller {

    public static final String WORKFLOW_UUID = "workflowRoot";
    private static final String STATE_START = "startState";
    private static final String STATE_END = "endState";
    private static final String EDGE_START = "startEdge";
    private static final String TYPE_INJECT = "inject";
    private static final String TYPE_SWITCH = "switch";
    private static final String TYPE_EVENT = "event";

    private final DefinitionUtils definitionUtils;
    private final FactoryManager factoryManager;
    private final GraphIndexBuilder indexBuilder;
    private final MarshallUtils utils;

    @Inject
    public Marshaller(DefinitionUtils definitionUtils,
                      FactoryManager factoryManager,
                      GraphIndexBuilder indexBuilder,
                      MarshallUtils utils) {
        this.definitionUtils = definitionUtils;
        this.factoryManager = factoryManager;
        this.indexBuilder = indexBuilder;
        this.utils = utils;
    }

    private MarshallerContext context;

    // *************************** MARSHALLING ***************************************************

    public CNCFState marshall(Node stateNode) {
        CNCFState result = new CNCFState();
        State state = (State) ((View<?>) stateNode.getContent()).getDefinition();
        String name = state.getName();
        result.name = null == name || name.isEmpty() ? "" : name;
        String type = null;
        if (state instanceof InjectState) {
            type = TYPE_INJECT;
        } else if (state instanceof SwitchState) {
            type = TYPE_SWITCH;
        } else if (state instanceof EventState) {
            type = TYPE_EVENT;
        }
        if (null != type) {
            result.type = type;
        }

        result.end = false;
        result.transition = null;
        result.onErrors = null;

        List<Edge> outEdges = stateNode.getOutEdges();
        for (Edge edge : outEdges) {
            marshall(result, edge);
        }

        return result;
    }

    public static boolean isStartState(Node node) {
        return ((View<?>) node.getContent()).getDefinition() instanceof Start;
    }

    public static boolean isEndState(Node node) {
        return ((View<?>) node.getContent()).getDefinition() instanceof End;
    }

    public CNCFState marshall(CNCFState state, Edge edge) {
        Object edgeBean = ((View<?>) edge.getContent()).getDefinition();
        Node targetNode = edge.getTargetNode();
        boolean isEnd = false;
        String targetName = null;
        if (null != targetNode) {
            if (isEndState(targetNode)) {
                isEnd = true;
            } else {
                // TODO: Obtain bean's name via DefinitionAdapter
                Object targetBean = ((View<?>) targetNode.getContent()).getDefinition();
                if (targetBean instanceof State) {
                    targetName = ((State) targetBean).getName();
                }
            }
        }
        if (edgeBean instanceof Transition) {
            state.end = isEnd;
            state.transition = targetName;
        } else if (edgeBean instanceof ErrorTransition) {
            CNCFError error = new CNCFError();
            error.errorRef = ((ErrorTransition) edgeBean).getErrorRef();
            error.end = isEnd;
            error.transition = targetName;
            if (state.onErrors == null) {
                state.onErrors = new CNCFError[]{};
            }
            JsArray<CNCFError> onErrorsArray = Js.uncheckedCast(state.onErrors);
            onErrorsArray.push(error);
        }
        return state;
    }

    // *************************** UNMARSHALLING ***************************************************

    @SuppressWarnings("all")
    public Graph unmarshall(Metadata metadata, String raw) {
        final Object root = Global.JSON.parse(raw);
        final CNCFWorkflow workflow = Js.uncheckedCast(root);

        unmarshallEventDefs(workflow.events);

        final CNCFState[] states = workflow.states;

        final VerticalLayoutBuilder layout = new VerticalLayoutBuilder();
        final CompositeCommand.Builder storageCommands = new CompositeCommand.Builder();
        final CompositeCommand.Builder connectionCommands = new CompositeCommand.Builder();
        context = new MarshallerContext(workflow);

        // Workflow root node.
        final Workflow w = new Workflow();
        w.setId(workflow.id);
        w.setName(workflow.name);
        String wUUID = context.getUUID(WORKFLOW_UUID);
        // TODO: Use Factory instead?
        Node<View<Workflow>, Edge> wNode = utils.createNodeAt(wUUID, w, new Point2D(0, 0), storageCommands);
        wNode.getContent().setBounds(Bounds.create(0, 0, 950, 950));

        // Start state.
        String start = workflow.start;
        if (isValidString(start)) {
            String startUUID = context.getUUID(STATE_START);
            Start startBean = new Start();
            Point2D startLocation = layout.getNextLocation();
            Node startNode = utils.createChildNodeAt(startUUID, startBean, startLocation, wNode, storageCommands);
            StartTransition tstart = new StartTransition();
            Edge startEdge = utils.createEdge(EDGE_START, tstart, startNode, storageCommands);
            String targetUUID = context.getUUID(start);
            utils.connect(startEdge, startNode, targetUUID, connectionCommands);
        }

        // End State.
        final End end = new End();
        String endUUID = context.getUUID(STATE_END);
        Point2D endLocation = layout.getEndLocation(states.length);
        Node endNode = utils.createChildNodeAt(endUUID, end, endLocation, wNode, storageCommands);

        // States.
        for (int i = 0; i < states.length; i++) {
            CNCFState state = states[i];
            Point2D nodeLocation = layout.getNextLocation();
            Node stateNode = parseState(state, nodeLocation, wNode, storageCommands, connectionCommands);
            context.uuidIndexes.add(stateNode.getUUID());
        }

        // Graph building.
        final GraphImpl<Object> graph = GraphImpl.build(workflow.id);
        final CompositeCommand<GraphCommandExecutionContext, RuleViolation> all =
                new CompositeCommand.Builder<>()
                        .addCommand(storageCommands.build())
                        .addCommand(connectionCommands.build())
                        .build();
        final Index index = indexBuilder.build(graph);
        final DirectGraphCommandExecutionContext context =
                new DirectGraphCommandExecutionContext(definitionUtils.getDefinitionManager(),
                                                       factoryManager,
                                                       index);
        // TODO: Check errors...
        all.execute(context);

        return graph;
    }

    @SuppressWarnings("all")
    public void parseEventState(CNCFState stateRaw,
                                Node eventStateNode,
                                Node parent,
                                Point2D location,
                                CompositeCommand.Builder storageCommands,
                                CompositeCommand.Builder connectionCommands) {
        CNCFEventState eventStateRaw = Js.uncheckedCast(stateRaw);
        CNCFOnEvent[] onEvents = eventStateRaw.onEvents;
        if (null != eventStateNode) {
            EventState state = ((View<EventState>) eventStateNode.getContent()).getDefinition();
            state.setExclusive(eventStateRaw.exclusive);
            String onEventsRaw = Global.JSON.stringify(onEvents);
            ((EventState) state).setOnEvents(onEventsRaw);
        }
        if (false) {
            parseOnEvents(onEvents,
                          eventStateNode,
                          parent,
                          location,
                          storageCommands,
                          connectionCommands);
        }
    }

    @SuppressWarnings("all")
    public String parseOnEvents(CNCFOnEvent[] onEvents,
                                Node eventStateNode,
                                Node parent,
                                Point2D location,
                                CompositeCommand.Builder storageCommands,
                                CompositeCommand.Builder connectionCommands) {
        if (null != onEvents && onEvents.length > 0) {
            // OnEvents Node.
            String onEventsNodeUUID = MarshallerContext.generateUUID();
            OnEvents onEventsBean = new OnEvents();
            Node onEventsNode = null;
            if (null != parent) {
                onEventsNode = utils.createChildNodeAt(onEventsNodeUUID, onEventsBean, location, parent, storageCommands);
            } else {
                onEventsNode = utils.createNodeAt(onEventsNodeUUID, onEventsBean, location, storageCommands);
            }

            if (null != eventStateNode) {
                // Transition to OnEvents Node.
                final EventTransition onEventsTransition = new EventTransition();
                onEventsTransition.setName("OnEvents");
                Edge onEventsEdge = parseTransitionByTargetUUID(onEventsTransition, eventStateNode, onEventsNodeUUID, storageCommands, connectionCommands);
            }

            double x = 50;
            double y = 50;
            for (CNCFOnEvent onEvent : onEvents) {
                x = 50;
                String[] eventRefs = onEvent.eventRefs;
                CNCFAction[] actions = onEvent.actions;

                // TODO: Only parsing a SINGLE (FIRST) event & action defitions.
                String eventRef = eventRefs[0];
                CNCFAction actionDef = actions[0];

                // Event Node.
                String eventNodeUUID = MarshallerContext.generateUUID();
                EventRef event = new EventRef();
                event.setEventRef(eventRef);
                event.setName(eventRef);
                final Node eventNode = utils.createChildNodeAt(eventNodeUUID, event, new Point2D(x, y), onEventsNode, storageCommands);

                // Action Node.
                String actionNodeUUID = MarshallerContext.generateUUID();
                ActionNode action = null;
                String actionName = actionDef.name;
                if (null != actionDef.functionRef) {
                    actionName = actionDef.functionRef;
                    action = new CallFunctionAction();
                    CallFunctionAction callFunctionAction = (CallFunctionAction) action;
                    callFunctionAction.setId(actionNodeUUID);
                    callFunctionAction.setName(actionDef.functionRef);
                    callFunctionAction.setFunctionRef(actionDef.functionRef);
                } else if (null != actionDef.subFlowRef) {
                    actionName = actionDef.subFlowRef;
                    action = new CallSubflowAction();
                    CallSubflowAction callSubflowAction = (CallSubflowAction) action;
                    callSubflowAction.setId(actionNodeUUID);
                    callSubflowAction.setName(actionDef.subFlowRef);
                    callSubflowAction.setSubFlowRef(actionDef.subFlowRef);
                }
                final Node actionNode = utils.createChildNodeAt(actionNodeUUID, action, new Point2D(x + 150, y), onEventsNode, storageCommands);

                // Transition to Actions Node.
                final ActionTransition at = new ActionTransition();
                // at.setName("Call " + actionName);
                Edge actionsEdge = parseTransitionByTargetUUID(at, eventNode, actionNodeUUID, storageCommands, connectionCommands);

                y += 100;
            }

            return onEventsNodeUUID;
        }
        return null;
    }

    @SuppressWarnings("all")
    private Node parseState(CNCFState stateRaw,
                            Point2D location,
                            Node parent,
                            CompositeCommand.Builder storageCommands,
                            CompositeCommand.Builder connectionCommands) {

        State state = null;

        switch (stateRaw.type) {
            case TYPE_INJECT:
                state = new InjectState();
                break;
            case TYPE_SWITCH:
                state = new SwitchState();
                break;
            case TYPE_EVENT:
                state = new EventState();
                break;
        }

        // Parse common fields.
        String name = stateRaw.name;
        String uuid = context.getUUID(name);
        state.setName(name);
        final Node stateNode = utils.createChildNodeAt(uuid, state, location, parent, storageCommands);

        // Parse end.
        if (stateRaw.end) {
            final Transition tend = new Transition();
            tend.setName(name + " to End");
            Edge tendEdge = parseTransitionByTargetName(tend, stateNode, STATE_END, storageCommands, connectionCommands);
        }

        // Parse transition.
        String transition = stateRaw.transition;
        if (isValidString(transition)) {
            final Transition t = new Transition();
            t.setName(name + " to " + transition);
            Edge edge = parseTransitionByTargetName(t, stateNode, transition, storageCommands, connectionCommands);
        }

        // Parse on-errors.
        CNCFError[] onErrors = stateRaw.onErrors;
        if (null != onErrors && onErrors.length > 0) {
            for (int i = 0; i < onErrors.length; i++) {
                CNCFError onError = onErrors[i];
                if (null != onError) {
                    final ErrorTransition t = new ErrorTransition();
                    t.setErrorRef(onError.errorRef);
                    if (onError.end) {
                        Edge edge = parseTransitionByTargetName(t, stateNode, STATE_END, storageCommands, connectionCommands);
                    } else if (isValidString(onError.transition)) {
                        Edge edge = parseTransitionByTargetName(t, stateNode, onError.transition, storageCommands, connectionCommands);
                    }
                }
            }
        }

        // Parse specific declarations.
        switch (stateRaw.type) {
            case TYPE_INJECT:
                break;
            case TYPE_SWITCH:
                break;
            case TYPE_EVENT:
                parseEventState(stateRaw, stateNode, parent, new Point2D(location.getX() + 250, location.getY()), storageCommands, connectionCommands);
                break;
        }

        return stateNode;
    }

    @SuppressWarnings("all")
    private Edge parseTransitionByTargetUUID(Object transition,
                                             Node source,
                                             String targetUUID,
                                             CompositeCommand.Builder storageCommands,
                                             CompositeCommand.Builder connectionCommands) {
        String transitionUUID = MarshallerContext.generateUUID();
        Edge tEdge = utils.createEdge(transitionUUID, transition, source, storageCommands);
        utils.connect(tEdge, source, targetUUID, connectionCommands);
        return tEdge;
    }

    @SuppressWarnings("all")
    private Edge parseTransitionByTargetName(Object transition,
                                             Node source,
                                             String target,
                                             CompositeCommand.Builder storageCommands,
                                             CompositeCommand.Builder connectionCommands) {
        String targetUUID = context.getUUID(target);
        return parseTransitionByTargetUUID(transition, source, targetUUID, storageCommands, connectionCommands);
    }

    @Inject
    private EventsRegistry eventsRegistry;

    private void unmarshallEventDefs(CNCFEvent[] events) {
        eventsRegistry.clear();
        if (null != events) {
            for (CNCFEvent event : events) {
                eventsRegistry.register(event);
            }
        }
    }

    public MarshallerContext getContext() {
        return context;
    }

    public static String stringify(Object jsonObj) {
        return Global.JSON.stringify(jsonObj, (key, value) -> {
            if (null == value) {
                return Global.undefined;
            }
            return value;
        });
    }

    private static boolean isValidString(String s) {
        return null != s && !s.isEmpty();
    }
}
