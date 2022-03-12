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
import elemental2.promise.Promise;
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
import org.kie.workbench.common.stunner.sw.autolayout.AutoLayout;
import org.kie.workbench.common.stunner.sw.definition.ActionNode;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.Event;
import org.kie.workbench.common.stunner.sw.definition.EventRef;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.EventTransition;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.OnEvent;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.SwitchState;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.definition.Workflow;
import org.kie.workbench.common.stunner.sw.factory.EventsRegistry;
import org.kie.workbench.common.stunner.sw.service.MarshallUtils.VerticalLayoutBuilder;
import org.kie.workbench.common.stunner.sw.service.parser.WorkflowNativeParser;
import org.uberfire.client.promise.Promises;

@ApplicationScoped
public class Marshaller {

    public static final String WORKFLOW_UUID = "workflowRoot";
    private static final String STATE_START = "startState";
    private static final String STATE_END = "endState";
    private static final String EDGE_START = "startEdge";

    private final DefinitionUtils definitionUtils;
    private final FactoryManager factoryManager;
    private final GraphIndexBuilder indexBuilder;
    private final MarshallUtils utils;
    private final Promises promises;

    @Inject
    public Marshaller(DefinitionUtils definitionUtils,
                      FactoryManager factoryManager,
                      GraphIndexBuilder indexBuilder,
                      MarshallUtils utils,
                      Promises promises) {
        this.definitionUtils = definitionUtils;
        this.factoryManager = factoryManager;
        this.indexBuilder = indexBuilder;
        this.utils = utils;
        this.promises = promises;
    }

    private MarshallerContext context;

    // *************************** MARSHALLING ***************************************************

    public State marshall(Node stateNode) {
        State state = (State) ((View<?>) stateNode.getContent()).getDefinition();

        state.end = false;
        state.transition = null;
        state.onErrors = null;

        List<Edge> outEdges = stateNode.getOutEdges();
        for (Edge edge : outEdges) {
            marshall(state, edge);
        }

        return state;
    }

    private State marshall(State state, Edge edge) {
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
            ErrorTransition error = (ErrorTransition) edgeBean;
            error.end = isEnd;
            error.transition = targetName;
            if (state.onErrors == null) {
                state.onErrors = new ErrorTransition[]{};
            }
            JsArray<ErrorTransition> onErrorsArray = Js.uncheckedCast(state.onErrors);
            onErrorsArray.push(error);
        }
        return state;
    }

    public static boolean isStartState(Node node) {
        return ((View<?>) node.getContent()).getDefinition() instanceof Start;
    }

    public static boolean isEndState(Node node) {
        return ((View<?>) node.getContent()).getDefinition() instanceof End;
    }

    // *************************** UNMARSHALLING ***************************************************

    @Inject
    private WorkflowNativeParser workflowParser;

    @SuppressWarnings("all")
    public Promise<Graph> unmarshall(Metadata metadata, String raw) {
        final Object root = Global.JSON.parse(raw);
        final Workflow parsed = Js.uncheckedCast(root);

        final Workflow w = workflowParser.parse(parsed);

        // TODO unmarshallEventDefs(w.events);

        final State[] states = w.states;

        final VerticalLayoutBuilder layout = new VerticalLayoutBuilder();
        final CompositeCommand.Builder storageCommands = new CompositeCommand.Builder();
        final CompositeCommand.Builder connectionCommands = new CompositeCommand.Builder();
        context = new MarshallerContext(w);

        // Workflow root node.
        String wUUID = context.getUUID(WORKFLOW_UUID);
        Node<View<Workflow>, Edge> wNode = utils.createNode(wUUID, w, storageCommands);
        wNode.getContent().setBounds(Bounds.create(0, 0, 950, 950));

        // Start state.
        String start = w.start;
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
            State state = states[i];
            Point2D nodeLocation = layout.getNextLocation();
            Node stateNode = parseState(state, nodeLocation, wNode, storageCommands, connectionCommands);
            context.uuidIndexes.add(stateNode.getUUID());
        }

        // Graph building.
        final GraphImpl<Object> graph = GraphImpl.build(w.id);
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

        if (true) {
            return promises.resolve(graph);
        }

        //Apply ELK calculated layout
        return AutoLayout.applyLayout(graph, promises, context, wUUID);
    }

    @SuppressWarnings("all")
    private Node parseState(State state,
                            Point2D location,
                            Node parent,
                            CompositeCommand.Builder storageCommands,
                            CompositeCommand.Builder connectionCommands) {

        // Parse common fields.
        String name = state.name;
        String uuid = context.getUUID(name);
        final Node stateNode = utils.createChildNodeAt(uuid, state, location, parent, storageCommands);

        // Parse end.
        if (state.end) {
            final Transition tend = new Transition();
            tend.setName(name + " to End");
            Edge tendEdge = parseTransitionByTargetName(tend, stateNode, STATE_END, storageCommands, connectionCommands);
        }

        // Parse transition.
        String transition = state.transition;
        if (isValidString(transition)) {
            final Transition t = new Transition();
            t.setName(name + " to " + transition);
            Edge edge = parseTransitionByTargetName(t, stateNode, transition, storageCommands, connectionCommands);
        }

        // Parse on-errors.
        ErrorTransition[] onErrors = state.onErrors;
        if (null != onErrors && onErrors.length > 0) {
            for (int i = 0; i < onErrors.length; i++) {
                ErrorTransition onError = onErrors[i];
                if (null != onError) {
                    if (onError.end) {
                        Edge edge = parseTransitionByTargetName(onError, stateNode, STATE_END, storageCommands, connectionCommands);
                    } else if (isValidString(onError.transition)) {
                        Edge edge = parseTransitionByTargetName(onError, stateNode, onError.transition, storageCommands, connectionCommands);
                    }
                }
            }
        }

        // Parse specific declarations.
        switch (state.type) {
            case InjectState.TYPE_INJECT:
                break;
            case SwitchState.TYPE_SWITCH:
                break;
            case EventState.TYPE_EVENT:
                parseEventState(stateNode, parent, new Point2D(location.getX() + 250, location.getY()), storageCommands, connectionCommands);
                break;
        }

        return stateNode;
    }

    @SuppressWarnings("all")
    private void parseEventState(Node node,
                                 Node parent,
                                 Point2D location,
                                 CompositeCommand.Builder storageCommands,
                                 CompositeCommand.Builder connectionCommands) {
        EventState state = ((View<EventState>) node.getContent()).getDefinition();
        OnEvent[] onEvents = state.onEvents;
        if (null != onEvents && onEvents.length > 0) {

            // TODO: Only parsing a SINGLE (FIRST) onEvent def.
            String onEventsNodeUUID = MarshallerContext.generateUUID();
            OnEvent onEvent = onEvents[0];
            final Node onEventsNode = utils.createChildNodeAt(onEventsNodeUUID, onEvent, location, parent, storageCommands);

            // Transition to OnEvents Node.
            final EventTransition onEventsTransition = new EventTransition();
            onEventsTransition.setName("OnEvents");
            Edge onEventsEdge = parseTransitionByTargetUUID(onEventsTransition, node, onEventsNodeUUID, storageCommands, connectionCommands);

            double x = 50;
            double y = 50;
            String[] eventRefs = onEvent.eventRefs;
            ActionNode[] actions = onEvent.actions;

            // TODO: Only parsing a SINGLE (FIRST) event defition.
            // Event Node.
            String eventRef = eventRefs[0];
            String eventNodeUUID = MarshallerContext.generateUUID();
            EventRef event = new EventRef();
            event.setEventRef(eventRef);
            event.setName(eventRef);
            final Node eventNode = utils.createChildNodeAt(eventNodeUUID, event, new Point2D(x, y), onEventsNode, storageCommands);

            // TODO: Only parsing a SINGLE (FIRST) action defition.
            // Action Node.
            ActionNode action = actions[0];
            String actionNodeUUID = MarshallerContext.generateUUID();
            final Node actionNode = utils.createChildNodeAt(actionNodeUUID, action, new Point2D(x + 150, y), onEventsNode, storageCommands);

            // Transition to Actions Node.
            final ActionTransition at = new ActionTransition();
            at.setName("Call " + action.name);
            Edge actionsEdge = parseTransitionByTargetUUID(at, eventNode, actionNodeUUID, storageCommands, connectionCommands);
        }
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

    private void unmarshallEventDefs(Event[] events) {
        eventsRegistry.clear();
        if (null != events) {
            for (Event event : events) {
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
            if (key.contains("hashCode") ||
                    key.contains("host") ||
                    key.contains("labels") ||
                    key.startsWith("$")) {
                return Global.undefined;
            }
            return value;
        });
    }

    private static boolean isValidString(String s) {
        return null != s && !s.isEmpty();
    }
}
