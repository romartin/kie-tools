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

import java.util.HashMap;

import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.command.impl.CompositeCommand;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.impl.AddChildNodeCommand;
import org.kie.workbench.common.stunner.core.graph.command.impl.AddConnectorCommand;
import org.kie.workbench.common.stunner.core.graph.command.impl.AddNodeCommand;
import org.kie.workbench.common.stunner.core.graph.command.impl.SetConnectionTargetNodeCommand;
import org.kie.workbench.common.stunner.core.graph.content.definition.Definition;
import org.kie.workbench.common.stunner.core.graph.content.view.MagnetConnection;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.impl.EdgeImpl;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.util.UUID;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.service.MarshallerContext;

public class Context {

    private final DefinitionManager definitionManager;
    private final FactoryManager factoryManager;
    private Graph graph;
    private Node parent;
    private Node sourceNode;
    private CompositeCommand.Builder storageCommands;
    private CompositeCommand.Builder connectionCommands;
    private HashMap<String, String> nameToUUIDBindings;

    @SuppressWarnings("all")
    public Context(DefinitionManager definitionManager, FactoryManager factoryManager) {
        this.definitionManager = definitionManager;
        this.factoryManager = factoryManager;
        this.parent = null;
        this.sourceNode = null;
        this.storageCommands = new CompositeCommand.Builder();
        this.connectionCommands = new CompositeCommand.Builder();
        this.nameToUUIDBindings = new HashMap<>();
    }

    public void setParent(Node parent) {
        this.parent = parent;
    }

    public Node getParent() {
        return parent;
    }

    public <T> T getParentDefinition() {
        return getElementDefinition(parent);
    }

    public static <T> T getElementDefinition(Element node) {
        return null != node ? (T) ((Definition) node.getContent()).getDefinition() : null;
    }

    public Node getSourceNode() {
        return sourceNode;
    }

    public void setSourceNode(Node sourceNode) {
        this.sourceNode = sourceNode;
    }

    public Graph getGraph() {
        return graph;
    }

    public void setGraph(Graph graph) {
        this.graph = graph;
    }

    public CompositeCommand<GraphCommandExecutionContext, RuleViolation> build() {
        return new CompositeCommand.Builder<>()
                .addCommand(storageCommands.build())
                .addCommand(connectionCommands.build())
                .build();
    }

    @SuppressWarnings("all")
    public Node addNode(String name,
                        Object bean) {
        String uuid = obtainUUID(name);
        Node node = (Node) factoryManager.registry().getElementFactory(NodeFactory.class).build(uuid, bean);
        if (null == parent) {
            storageCommands.addCommand(new AddNodeCommand(node));
        } else {
            storageCommands.addCommand(new AddChildNodeCommand(parent, node, null));
        }
        return node;
    }

    @SuppressWarnings("all")
    public Edge addEdge(String uuid, Object bean, Node source) {
        EdgeImpl edge = (EdgeImpl) factoryManager.registry().getElementFactory(EdgeFactory.class).build(uuid, bean);
        storageCommands.addCommand(new AddConnectorCommand(source, edge, MagnetConnection.Builder.atCenter(source)));
        return edge;
    }

    @SuppressWarnings("all")
    public void connect(Edge edge, Node source, String targetUUID) {
        connectionCommands.addCommand(new SetConnectionTargetNodeCommand(targetUUID,
                                                                         edge.getUUID(),
                                                                         MagnetConnection.Builder.at(0, 0)) {
            public CommandResult<RuleViolation> execute(GraphCommandExecutionContext context) {
                Node<? extends View<?>, Edge> targetNode = getTargetNode(context);
                if (null != targetNode) {
                    asMagnetConnection().setIndex(0);
                    asMagnetConnection().setAuto(false);
                    // asMagnetConnection().setLocation(MagnetConnection.Builder.forTarget(source, targetNode).getLocation().copy());
                }
                return super.execute(context);
            }

            private MagnetConnection asMagnetConnection() {
                return (MagnetConnection) getConnection();
            }
        });
    }

    @SuppressWarnings("all")
    public Edge addEdgeToTargetName(Object transition,
                                    Node source,
                                    String target) {
        String targetUUID = obtainUUID(target);
        return addEdgeToTargetUUID(transition, source, targetUUID);
    }

    @SuppressWarnings("all")
    public Edge addEdgeToTargetUUID(Object transition,
                                    Node source,
                                    String targetUUID) {
        String transitionUUID = MarshallerContext.generateUUID();
        Edge tEdge = addEdge(transitionUUID, transition, source);
        connect(tEdge, source, targetUUID);
        return tEdge;
    }

    public static String generateUUID() {
        return UUID.uuid();
    }

    public String obtainUUID(String name) {
        if (null == name) {
            return generateUUID();
        }
        String uuid = nameToUUIDBindings.get(name);
        if (null == uuid) {
            uuid = generateUUID();
            nameToUUIDBindings.put(name, uuid);
        }
        return uuid;
    }

    @SuppressWarnings("all")
    public static String getStateNodeName(Node node) {
        if (null != node) {
            Object definition = ((View) node.getContent()).getDefinition();
            if (definition instanceof State) {
                String name = ((State) definition).getName();
                return name;
            }
        }
        return null;
    }

    public static boolean isValidString(String s) {
        return null != s && !s.isEmpty();
    }
}
