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
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.impl.GraphImpl;
import org.kie.workbench.common.stunner.core.graph.processing.index.GraphIndexBuilder;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.util.DefinitionUtils;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.SwitchState;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.service.MarshallUtils.VerticalLayoutBuilder;
import org.kie.workbench.common.stunner.sw.spec.CNCFError;
import org.kie.workbench.common.stunner.sw.spec.CNCFState;
import org.kie.workbench.common.stunner.sw.spec.CNCFWorkflow;

@ApplicationScoped
public class Marshaller {

    private static final String STATE_START = "startState";
    private static final String STATE_END = "endState";
    private static final String EDGE_START = "startEdge";
    private static final String TYPE_INJECT = "inject";
    private static final String TYPE_SWITCH = "switch";

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
        final CNCFState[] states = workflow.states;

        final VerticalLayoutBuilder layout = new VerticalLayoutBuilder();
        final CompositeCommand.Builder storageCommands = new CompositeCommand.Builder();
        final CompositeCommand.Builder connectionCommands = new CompositeCommand.Builder();
        context = new MarshallerContext(workflow);

        // Start state.
        String start = workflow.start;
        if (isValidString(start)) {
            String startUUID = context.getUUID(STATE_START);
            Start startBean = new Start();
            Point2D startLocation = layout.getNextLocation();
            Node startNode = utils.createNodeAt(startUUID, startBean, startLocation, storageCommands);
            StartTransition tstart = new StartTransition();
            Edge startEdge = utils.createEdge(EDGE_START, tstart, startNode, storageCommands);
            String targetUUID = context.getUUID(start);
            utils.connect(startEdge, startNode, targetUUID, connectionCommands);
        }

        // End State.
        final End end = new End();
        String endUUID = context.getUUID(STATE_END);
        Point2D endLocation = layout.getEndLocation(states.length);
        Node endNode = utils.createNodeAt(endUUID, end, endLocation, storageCommands);

        // States.
        for (int i = 0; i < states.length; i++) {
            CNCFState state = states[i];
            Point2D nodeLocation = layout.getNextLocation();
            Node stateNode = parseState(state, nodeLocation, storageCommands, connectionCommands);
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

    private Node parseState(CNCFState stateRaw,
                            Point2D location,
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
        }
        String name = stateRaw.name;
        String uuid = context.getUUID(name);
        state.setName(name);
        final Node stateNode = utils.createNodeAt(uuid, state, location, storageCommands);

        if (stateRaw.end) {
            final Transition tend = new Transition();
            tend.setName(name + " to End");
            Edge tendEdge = parseTransition(tend, stateNode, STATE_END, storageCommands, connectionCommands);
        }

        String transition = stateRaw.transition;
        if (isValidString(transition)) {
            final Transition t = new Transition();
            t.setName(name + " to " + transition);
            Edge edge = parseTransition(t, stateNode, transition, storageCommands, connectionCommands);
        }

        CNCFError[] onErrors = stateRaw.onErrors;
        if (null != onErrors && onErrors.length > 0) {
            for (int i = 0; i < onErrors.length; i++) {
                CNCFError onError = onErrors[i];
                if (null != onError) {
                    final ErrorTransition t = new ErrorTransition();
                    t.setErrorRef(onError.errorRef);
                    if (onError.end) {
                        Edge edge = parseTransition(t, stateNode, STATE_END, storageCommands, connectionCommands);
                    } else if (isValidString(onError.transition)) {
                        Edge edge = parseTransition(t, stateNode, onError.transition, storageCommands, connectionCommands);
                    }
                }
            }
        }

        return stateNode;
    }

    private Edge parseTransition(Object transition,
                                 Node source,
                                 String target,
                                 CompositeCommand.Builder storageCommands,
                                 CompositeCommand.Builder connectionCommands) {
        String targetUUID = context.getUUID(target);
        String transitionUUID = MarshallerContext.generateUUID();
        Edge tEdge = utils.createEdge(transitionUUID, transition, source, storageCommands);
        utils.connect(tEdge, source, targetUUID, connectionCommands);
        return tEdge;
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
