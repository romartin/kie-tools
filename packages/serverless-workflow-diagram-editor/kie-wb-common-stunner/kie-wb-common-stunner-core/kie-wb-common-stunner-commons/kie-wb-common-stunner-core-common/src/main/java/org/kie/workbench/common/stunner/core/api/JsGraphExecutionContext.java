/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.core.api;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.command.Command;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.DirectGraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommand;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.impl.GraphImpl;
import org.kie.workbench.common.stunner.core.graph.processing.index.Index;
import org.kie.workbench.common.stunner.core.graph.processing.index.map.MapIndexBuilder;

// TODO: Handle error bus properly.
@JsType
public class JsGraphExecutionContext {

    public Graph graph;
    public Index index;
    public Node root;
    public JsGraphCommands commands;
    private GraphCommandExecutionContext executionContext;

    public static JsGraphExecutionContext create(String graphUUID) {
        return new JsGraphExecutionContext(GraphImpl.build(graphUUID));
    }

    public JsGraphExecutionContext(Graph graph) {
        this.graph = graph;
        this.index = new MapIndexBuilder().build(graph);
    }

    public JsGraphExecutionContext bind(DefinitionManager definitionManager,
                                        FactoryManager factoryManager,
                                        JsGraphCommands commands) {
        this.executionContext = new DirectGraphCommandExecutionContext(definitionManager,
                                                                       factoryManager,
                                                                       index);
        this.commands = commands;
        return this;
    }

    public JsGraphExecutionContext addRootNode(String uuid, Object definition) {
        if (null != root) {
            throw new IllegalStateException("Just a single graph's root node is being supported.");
        }
        root = commands.buildNode(uuid, definition, 100, 100);
        execute(commands.addNode(root));
        return this;
    }

    public JsGraphExecutionContext addNode(String uuid, Object definition) {
        Node node = commands.buildNode(uuid, definition, 100, 100);
        GraphCommand command;
        if (null != root) {
            command = commands.addChildNode(root, node);
        } else {
            command = commands.addNode(node);
        }
        execute(command);
        return this;
    }

    public JsGraphExecutionContext changeLocation(String uuid, double x, double y) {
        Node node = index.getNode(uuid);
        execute(commands.changeLocation(node, x, y));
        return this;
    }

    public JsGraphExecutionContext addEdge(String uuid, Object definition, String sourceNodeUUID) {
        Edge edge = commands.buildEdge(uuid, definition);
        Node sourceNode = index.getNode(sourceNodeUUID);
        execute(commands.addEdge(edge, sourceNode));
        return this;
    }

    public JsGraphExecutionContext connect(String edgeUUID, String targetNodeUUID) {
        Edge edge = index.getEdge(edgeUUID);
        Node targetNode = index.getNode(targetNodeUUID);
        execute(commands.connect(edge, targetNode));
        return this;
    }

    public CommandResult execute(Command command) {
        CommandResult result = command.execute(executionContext);
        if (isError(result)) {
            logError(result.getViolations().iterator().next().toString());
            // TODO: Throw exception?
        }
        return result;
    }

    public static boolean isSuccess(CommandResult result) {
        return !isError(result);
    }

    public static boolean isError(CommandResult result) {
        return CommandResult.Type.ERROR.equals(result.getType());
    }

    private static void logError(String message) {
        DomGlobal.console.error(message);
    }
}
