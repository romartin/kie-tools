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

import java.util.HashSet;
import java.util.Set;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.command.Command;
import org.kie.workbench.common.stunner.core.command.CommandResult;
import org.kie.workbench.common.stunner.core.command.impl.CompositeCommand;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.command.impl.AddChildNodeCommand;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.view.MagnetConnection;
import org.kie.workbench.common.stunner.core.graph.content.view.Point2D;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewConnector;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewConnectorImpl;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewImpl;
import org.kie.workbench.common.stunner.core.graph.impl.EdgeImpl;
import org.kie.workbench.common.stunner.core.graph.impl.NodeImpl;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.core.util.DefinitionUtils;
import org.kie.workbench.common.stunner.sw.command.GraphCommands;

@ApplicationScoped
public class MarshallUtils {

    private final DefinitionUtils definitionUtils;
    private final GraphCommands commands;

    @Inject
    public MarshallUtils(DefinitionUtils definitionUtils) {
        this.definitionUtils = definitionUtils;
        this.commands = new GraphCommands();
    }

    public void connect(Edge edge, Node source, String targetUUID, CompositeCommand.Builder builder) {
        builder.addCommand(new org.kie.workbench.common.stunner.core.graph.command.impl.SetConnectionTargetNodeCommand(targetUUID,
                                                                                                                       edge.getUUID(),
                                                                                                                       MagnetConnection.Builder.at(0, 0)) {
            @Override
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

    private void connect(Edge edge, Node source, Node target, CompositeCommand.Builder builder) {
        Command command = commands.setTargetNode(target,
                                                 edge,
                                                 MagnetConnection.Builder.forTarget(source,
                                                                                    target));
        builder.addCommand(command);
    }

    @SuppressWarnings("all")
    public Edge createEdge(String uuid, Object bean, Node source, CompositeCommand.Builder builder) {
        final EdgeImpl edge = new EdgeImpl<>(uuid);
        ViewConnector<Object> content = new ViewConnectorImpl(bean, Bounds.create(0d, 0d, 30d, 30d));
        edge.setContent(content);
        appendLabels(edge.getLabels(),
                     bean);
        builder.addCommand(commands.addConnector(source, edge, MagnetConnection.Builder.atCenter(source)));
        return edge;
    }

    public Node createNodeAt(String uuid, Object bean, Point2D location, CompositeCommand.Builder builder) {
        Node node = createNode(uuid, bean, location.getX(), location.getY());
        builder.addCommand(commands.addNode(node));
        builder.addCommand(commands.updateElementPosition(node, location));
        return node;
    }

    public Node createChildNodeAt(String uuid, Object bean, Point2D location, Node parent, CompositeCommand.Builder builder) {
        Node node = createNode(uuid, bean, location.getX(), location.getY());
        AddChildNodeCommand addChildNodeCommand = new AddChildNodeCommand(parent, node, location);
        builder.addCommand(addChildNodeCommand);
        return node;
    }

    @SuppressWarnings("all")
    // TODO: Refactor / remove this - use NodeFactory'ies instead.
    private Node createNode(String uuid, Object bean, double x, double y) {
        final Node node = new NodeImpl(uuid);
        final Bounds bounds = definitionUtils.buildBounds(bean, x, y);
        final View content = new ViewImpl<>(bean, bounds);
        node.setContent(content);
        appendLabels(node.getLabels(),
                     bean);
        return node;
    }

    @SuppressWarnings("all")
    public void appendLabels(final Set<String> target,
                             final Object definition) {
        final String[] labels = computeLabels(definitionUtils.getDefinitionManager()
                                                      .adapters()
                                                      .registry()
                                                      .getDefinitionAdapter(definition.getClass()),
                                              definition);
        for (String label : labels) {
            target.add(label);
        }
    }

    @SuppressWarnings("all")
    public static <T> String[] computeLabels(final DefinitionAdapter<T> adapter,
                                             final T definition) {
        final Set<String> target = new HashSet<>();
        final DefinitionId id = adapter.getId(definition);
        target.add(id.value());
        if (id.isDynamic()) {
            target.add(id.type());
        }
        String[] labels = adapter.getLabels(definition);
        if (null != labels) {
            for (String label : labels) {
                target.add(label);
            }
        }
        return target.toArray(new String[target.size()]);
    }

    public static class VerticalLayoutBuilder {

        private static double X = 200;
        private static double YDELTA = 150;
        private double y = 0;

        public Point2D getNextLocation() {
            y = y + YDELTA;
            return new Point2D(X, y);
        }

        public Point2D getEndLocation(int statesCount) {
            return new Point2D(X, (statesCount + 2) * YDELTA);
        }
    }

    public static class HorizontalLayoutBuilder {

        private static double Y = 100;
        private static double XDELTA = 100;
        private double x = 0;

        public Point2D getNextLocation() {
            x = x + XDELTA;
            return new Point2D(x, Y);
        }

        public Point2D getEndLocation(int statesCount) {
            return new Point2D((statesCount + 3) * XDELTA, Y);
        }
    }
}
