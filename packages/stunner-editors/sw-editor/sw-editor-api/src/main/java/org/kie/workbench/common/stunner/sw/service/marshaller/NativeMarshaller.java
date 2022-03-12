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

package org.kie.workbench.common.stunner.sw.service.marshaller;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.core.Global;
import elemental2.promise.Promise;
import jsinterop.base.Js;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.command.impl.CompositeCommand;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.DirectGraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.definition.Definition;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewConnector;
import org.kie.workbench.common.stunner.core.graph.impl.GraphImpl;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;
import org.kie.workbench.common.stunner.core.graph.processing.index.map.MapIndexBuilder;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.sw.autolayout.AutoLayout;
import org.kie.workbench.common.stunner.sw.definition.ActionNode;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.EventRef;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.EventTransition;
import org.kie.workbench.common.stunner.sw.definition.OnEvent;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.Transition;
import org.kie.workbench.common.stunner.sw.definition.Workflow;
import org.kie.workbench.common.stunner.sw.service.parser.WorkflowNativeParser;
import org.uberfire.client.promise.Promises;

import static org.kie.workbench.common.stunner.sw.service.marshaller.Context.getElementDefinition;
import static org.kie.workbench.common.stunner.sw.service.marshaller.Context.getStateNodeName;
import static org.kie.workbench.common.stunner.sw.service.marshaller.Context.isValidString;

@ApplicationScoped
public class NativeMarshaller {

    public static final String WORKFLOW_UUID = "workflowRoot";
    private static final String STATE_START = "startState";
    private static final String STATE_END = "endState";
    private static final String EDGE_START = "startEdge";

    @Inject
    private DefinitionManager definitionManager;
    @Inject
    private FactoryManager factoryManager;
    @Inject
    private WorkflowNativeParser nativeParser;
    @Inject
    private Promises promises;

    private Context context;

    public Promise<Graph> unmarshall(String raw) {
        final Object root = parse(raw);
        final Workflow parsed = Js.uncheckedCast(root);
        final Workflow workflow = nativeParser.parse(parsed);
        context = new Context(definitionManager, factoryManager);

        // Workflow root node.
        Node<View<Workflow>, Edge> workflowNode = new WorkflowNodeUnmarshaller().unmarshall(context, workflow);

        // Graph building.
        // TODO: Use dedicated factory instead.
        final GraphImpl<Object> graph = GraphImpl.build(workflow.id);
        final CompositeCommand<GraphCommandExecutionContext, RuleViolation> all = context.build();
        final Index index = new MapIndexBuilder().build(graph);
        final DirectGraphCommandExecutionContext executionContext =
                new DirectGraphCommandExecutionContext(definitionManager,
                                                       factoryManager,
                                                       index);
        // TODO: Check errors...
        all.execute(executionContext);

        // Perform automatic layout.
        return AutoLayout.applyLayout(graph, promises, executionContext, workflowNode.getUUID());
    }

    public Promise<String> marshall(Graph graph) {
        context.setGraph(graph);
        // Marshall from the workflow root node.
        Node workflowRootNode = graph.getNode(getWorkflowRootUUID());
        Workflow workflow = new WorkflowNodeUnmarshaller().marshall(context, workflowRootNode);
        context.setGraph(null);
        // Stringify the workflow js type.
        String raw = stringify(workflow);
        return promises.resolve(raw);
    }

    public String getWorkflowRootUUID() {
        return context.obtainUUID(WORKFLOW_UUID);
    }

    public interface NodeUnmarshaller<T> {

        Node unmarshall(Context context, T domainBean);

        default T marshall(Context context, Node<? extends Definition<T>, Edge> node) {
            return node.getContent().getDefinition();
        }
    }

    public interface EdgeUnmarshaller<T> {

        Edge<ViewConnector<T>, Node> unmarshall(Context context, T domainBean);

        Edge<ViewConnector<T>, Node> marshall(Context context, Edge<ViewConnector<T>, Node> edge);
    }

    public static class WorkflowNodeUnmarshaller implements NodeUnmarshaller<Workflow> {

        @Override
        public Node unmarshall(Context context, Workflow workflow) {
            Node<View<Workflow>, Edge> workflowNode = context.addNode(WORKFLOW_UUID, workflow);
            workflowNode.getContent().setBounds(Bounds.create(0, 0, 950, 950));

            // Set workflow node as parent for context.
            context.setParent(workflowNode);

            // Start state.
            new StartNodeUnmarshaller().unmarshall(context, workflow);

            // End state.
            new EndNodeUnmarshaller().unmarshall(context, workflow);

            // States.
            final State[] states = workflow.states;
            for (int i = 0; i < states.length; i++) {
                StateNodeUnmarshaller stateNodeUnmarshaller;
                State state = states[i];
                switch (state.type) {
                    case EventState.TYPE_EVENT:
                        stateNodeUnmarshaller = new EventStateNodeUnmarshaller();
                        break;
                    default:
                        stateNodeUnmarshaller = new StateNodeUnmarshaller();
                }
                Node stateNode = stateNodeUnmarshaller.unmarshall(context, state);
            }

            context.setParent(null);

            return workflowNode;
        }

        @Override
        public Workflow marshall(Context context, Node<? extends Definition<Workflow>, Edge> workflowNode) {
            Workflow workflow = workflowNode.getContent().getDefinition();

            context.setParent(workflowNode);

            // Start State.
            new StartNodeUnmarshaller().marshall(context, workflowNode);

            // TODO: End?

            // States.
            Iterable<Node> nodes = context.getGraph().nodes();
            nodes.forEach(node -> {
                StateNodeUnmarshaller stateNodeUnmarshaller = null;
                Object def = ((Definition) node.getContent()).getDefinition();
                if (def instanceof EventState) {
                    stateNodeUnmarshaller = new EventStateNodeUnmarshaller();
                } else if (def instanceof State) {
                    stateNodeUnmarshaller = new StateNodeUnmarshaller();
                }
                if (null != stateNodeUnmarshaller) {
                    stateNodeUnmarshaller.marshall(context, node);
                }
            });

            context.setParent(null);

            return workflow;
        }
    }

    public static class StartTransitionUnmarshaller implements EdgeUnmarshaller<StartTransition> {

        @Override
        public Edge unmarshall(Context context, StartTransition startTransition) {
            Node sourceNode = context.getSourceNode();
            Edge startEdge = context.addEdge(EDGE_START, startTransition, sourceNode);
            String targetUUID = context.obtainUUID(startTransition.getTransition());
            context.connect(startEdge, sourceNode, targetUUID);
            return startEdge;
        }

        @Override
        public Edge<ViewConnector<StartTransition>, Node> marshall(Context context,
                                                                   Edge<ViewConnector<StartTransition>, Node> edge) {
            Workflow workflow = context.getParentDefinition();
            if (null != edge.getTargetNode()) {
                Node targetNode = edge.getTargetNode();
                String stateName = Context.getStateNodeName(targetNode);
                workflow.setStart(stateName);
            } else {
                workflow.setStart("");
            }
            // TODO: Update StartTransition.transition ?
            return edge;
        }
    }

    public static class StartNodeUnmarshaller implements NodeUnmarshaller<Workflow> {

        @Override
        public Node unmarshall(Context context, Workflow workflow) {
            Node startNode = null;
            if (isValidString(workflow.getStart())) {
                startNode = context.addNode(STATE_START, new Start());
                StartTransition tStart = new StartTransition();
                tStart.setTransition(workflow.start);
                context.setSourceNode(startNode);
                Edge startEdge = new StartTransitionUnmarshaller().unmarshall(context, tStart);
                context.setSourceNode(null);
            }
            return startNode;
        }

        @Override
        public Workflow marshall(Context context,
                                 Node<? extends Definition<Workflow>, Edge> workflowNode) {
            Workflow workflow = workflowNode.getContent().getDefinition();
            String startNodeUUID = context.obtainUUID(STATE_START);
            Node startNode = context.getGraph().getNode(startNodeUUID);
            if (null != startNode && !startNode.getOutEdges().isEmpty()) {
                Edge startEdge = (Edge) startNode.getOutEdges().get(0);
                new StartTransitionUnmarshaller().marshall(context, startEdge);
            } else {
                workflow.setStart("");
            }
            return workflow;
        }
    }

    public static class EndNodeUnmarshaller implements NodeUnmarshaller<Workflow> {

        @Override
        public Node unmarshall(Context context, Workflow workflow) {
            final End endBean = new End();
            Node endNode = context.addNode(STATE_END, endBean);
            return endNode;
        }
    }

    public static class TransitionUnmarshaller implements EdgeUnmarshaller<Transition> {

        @Override
        public Edge unmarshall(Context context, Transition transition) {
            Node sourceNode = context.getSourceNode();
            String to = transition.getTo();
            String sourceStateName = Context.getStateNodeName(sourceNode);
            if (STATE_END.equals(to)) {
                transition.setName(sourceStateName + " to End");
            } else {
                transition.setName(sourceStateName + " to " + to);
            }
            Edge edge = context.addEdgeToTargetName(transition, sourceNode, to);
            return edge;
        }

        @Override
        public Edge<ViewConnector<Transition>, Node> marshall(Context context,
                                                              Edge<ViewConnector<Transition>, Node> edge) {
            Node sourceNode = edge.getSourceNode();
            if (null != sourceNode) {
                Node targetNode = edge.getTargetNode();
                if (null != targetNode) {
                    State sourceState = getElementDefinition(sourceNode);
                    Object targetDef = getElementDefinition(targetNode);
                    if (targetDef instanceof End) {
                        sourceState.transition = null;
                        sourceState.end = true;
                    } else {
                        sourceState.transition = getStateNodeName(targetNode);
                        sourceState.end = false;
                    }
                }
            }
            // TODO: Update Transition.to ?
            return edge;
        }
    }

    public static class ErrorTransitionUnmarshaller implements EdgeUnmarshaller<ErrorTransition> {

        @Override
        public Edge unmarshall(Context context, ErrorTransition errorTransition) {
            Node sourceNode = context.getSourceNode();
            Edge edge = null;
            if (errorTransition.isEnd()) {
                edge = context.addEdgeToTargetName(errorTransition, sourceNode, STATE_END);
            } else if (isValidString(errorTransition.getTransition())) {
                edge = context.addEdgeToTargetName(errorTransition, sourceNode, errorTransition.getTransition());
            }
            return edge;
        }

        @Override
        public Edge<ViewConnector<ErrorTransition>, Node> marshall(Context context,
                                                                   Edge<ViewConnector<ErrorTransition>, Node> edge) {
            Node sourceNode = edge.getSourceNode();
            if (null != sourceNode) {
                Node targetNode = edge.getTargetNode();
                if (null != targetNode) {
                    ErrorTransition errorTransition = getElementDefinition(edge);
                    Object targetDef = getElementDefinition(targetNode);
                    if (targetDef instanceof End) {
                        errorTransition.transition = null;
                        errorTransition.end = true;
                    } else {
                        errorTransition.transition = getStateNodeName(targetNode);
                        errorTransition.end = false;
                    }
                }
            }
            return edge;
        }
    }

    public static class StateNodeUnmarshaller<S extends State> implements NodeUnmarshaller<S> {

        @Override
        public Node unmarshall(Context context, S state) {
            // Parse common fields.
            String name = state.getName();
            final Node stateNode = context.addNode(name, state);

            context.setSourceNode(stateNode);

            // Parse end.
            if (state.isEnd()) {
                final Transition tend = new Transition();
                tend.setTo(STATE_END);
                Edge tendEdge = new TransitionUnmarshaller().unmarshall(context, tend);
            }

            // Parse transition.
            String transition = state.getTransition();
            if (isValidString(transition)) {
                final Transition t = new Transition();
                t.setTo(transition);
                Edge edge = new TransitionUnmarshaller().unmarshall(context, t);
            }

            // Parse on-errors.
            ErrorTransition[] onErrors = state.getOnErrors();
            if (null != onErrors && onErrors.length > 0) {
                for (int i = 0; i < onErrors.length; i++) {
                    ErrorTransition onError = onErrors[i];
                    if (null != onError) {
                        Edge errorEdge = new ErrorTransitionUnmarshaller().unmarshall(context, onError);
                    }
                }
            }

            context.setSourceNode(null);

            return stateNode;
        }

        @Override
        public S marshall(Context context,
                          Node<? extends Definition<S>, Edge> stateNode) {
            S state = stateNode.getContent().getDefinition();

            List<Edge> outEdges = stateNode.getOutEdges();
            for (Edge edge : outEdges) {
                EdgeUnmarshaller edgeUnmarshaller = null;
                Object edgeDef = ((Definition) edge.getContent()).getDefinition();
                if (edgeDef instanceof Transition) {
                    edgeUnmarshaller = new TransitionUnmarshaller();
                } else if (edge instanceof ErrorTransition) {
                    edgeUnmarshaller = new ErrorTransitionUnmarshaller();
                }
                if (null != edgeUnmarshaller) {
                    edgeUnmarshaller.marshall(context, edge);
                }
            }

            return state;
        }
    }

    public static class EventStateNodeUnmarshaller extends StateNodeUnmarshaller<EventState> {

        @Override
        public Node unmarshall(Context context, EventState state) {
            Node stateNode = super.unmarshall(context, state);
            OnEvent[] onEvents = state.getOnEvents();
            if (null != onEvents && onEvents.length > 0) {
                // TODO: Only parsing a SINGLE (FIRST) onEvent def.
                OnEvent onEvent = onEvents[0];
                final Node onEventsNode = context.addNode(null, onEvent);

                // Set actual context parent node.
                Node parent = context.getParent();
                context.setParent(onEventsNode);

                // Transition to OnEvents Node.
                final EventTransition onEventsTransition = new EventTransition();
                onEventsTransition.setName("OnEvents");
                Edge onEventsEdge = context.addEdgeToTargetUUID(onEventsTransition, stateNode, onEventsNode.getUUID());

                String[] eventRefs = onEvent.getEventRefs();
                ActionNode[] actions = onEvent.getActions();

                // TODO: Only parsing a SINGLE (FIRST) event definition.
                // Event Node.
                String eventRef = eventRefs[0];
                EventRef event = new EventRef();
                event.setEventRef(eventRef);
                event.setName(eventRef);
                final Node eventNode = context.addNode(null, event);

                // TODO: Only parsing a SINGLE (FIRST) action definition.
                // Action Node.
                ActionNode action = actions[0];
                final Node actionNode = context.addNode(null, action);

                // Transition to Actions Node.
                final ActionTransition at = new ActionTransition();
                at.setName("Call " + action.getName());
                Edge actionsEdge = context.addEdgeToTargetUUID(at, eventNode, actionNode.getUUID());

                // Set the original parent.
                context.setParent(parent);
            }
            return stateNode;
        }
    }

    public static Object parse(String raw) {
        return Global.JSON.parse(raw);
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
}
