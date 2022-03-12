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

package org.kie.workbench.common.stunner.sw.client.jsonpatch;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.core.JsArray;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.command.AddChildNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.AddNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.DeleteConnectorCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.DeleteNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.MorphNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.SetConnectionSourceNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.SetConnectionTargetNodeCommand;
import org.kie.workbench.common.stunner.core.client.canvas.command.UpdateElementPropertyCommand;
import org.kie.workbench.common.stunner.core.client.command.CanvasViolation;
import org.kie.workbench.common.stunner.core.command.Command;
import org.kie.workbench.common.stunner.core.graph.Edge;
import org.kie.workbench.common.stunner.core.graph.Element;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.command.GraphCommandExecutionContext;
import org.kie.workbench.common.stunner.core.graph.content.view.View;
import org.kie.workbench.common.stunner.core.rule.RuleViolation;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.State;
import org.kie.workbench.common.stunner.sw.definition.Workflow;
import org.kie.workbench.common.stunner.sw.service.Marshaller;
import org.kie.workbench.common.stunner.sw.service.MarshallerContext;

@ApplicationScoped
public class PatchBuilder {

    @Inject
    private Marshaller marshaller;

    @SuppressWarnings("all")
    public Patch[] build(AbstractCanvasHandler canvasHandler,
                         Command<AbstractCanvasHandler, CanvasViolation> command) {
        if (command instanceof AddNodeCommand) {
            return addNode((AddNodeCommand) command);
        }
        if (command instanceof AddChildNodeCommand) {
            AddChildNodeCommand c = (AddChildNodeCommand) command;
            Node<View<?>, Edge> parent = c.getParent();
            if (parent.getContent().getDefinition() instanceof Workflow) {
                return addNode(c.getCandidate());
            } else {
                // TODO
            }
        }
        if (command instanceof DeleteNodeCommand) {
            return deleteNode(canvasHandler, (DeleteNodeCommand) command);
        }
        if (command instanceof UpdateElementPropertyCommand) {
            return updateNodeProperty((UpdateElementPropertyCommand) command);
        }
        if (command instanceof MorphNodeCommand) {
            return updateNode(((MorphNodeCommand) command).getCandidate());
        }
        if (command instanceof DeleteConnectorCommand) {
            DeleteConnectorCommand c = (DeleteConnectorCommand) command;
            return deleteEdge(canvasHandler, c.getCandidate(), c.getLastSourceNodeUUID(), c.getLastTargetNodeUUID());
        }
        if (command instanceof SetConnectionTargetNodeCommand) {
            SetConnectionTargetNodeCommand c = (SetConnectionTargetNodeCommand) command;
            return changeEdgeSourceOrTarget(canvasHandler, c.getEdge(), c.getLastTargetNodeUUID());
        }
        if (command instanceof SetConnectionSourceNodeCommand) {
            SetConnectionSourceNodeCommand c = (SetConnectionSourceNodeCommand) command;
            return changeEdgeSourceOrTarget(canvasHandler, c.getEdge(), c.getLastSourceNodeUUID());
        }
        return null;
    }

    @SuppressWarnings("all")
    private Patch[] changeEdgeSourceOrTarget(AbstractCanvasHandler canvasHandler, Edge edge, String lastNodeUUID) {
        JsArray<Patch> patches = new JsArray<>();
        if (null != lastNodeUUID) {
            Node lastSource = canvasHandler.getGraphIndex().getNode(lastNodeUUID);
            if (null != lastSource) {
                Patch[] lastSourcePatches = updateNode(lastSource);
                patches.push(lastSourcePatches);
            }
        }
        Patch[] edgePatches = updateEdge(edge);
        patches.push(edgePatches);
        return toArray(patches);
    }

    @SuppressWarnings("all")
    private Patch[] deleteNode(AbstractCanvasHandler canvasHandler,
                               DeleteNodeCommand command) {
        JsArray<Patch> patches = new JsArray<>();
        Node candidate = command.getCandidate();
        int stateIndex = getStateIndex(candidate);
        if (stateIndex >= 0) {
            Patch patch = PatchFactory.remove("/states/" + stateIndex);
            patches.push(patch);
            getMarshallerContext().removeStateIndex(candidate.getUUID());
        }
        List<Command<GraphCommandExecutionContext, RuleViolation>> graphCommands = command.getGraphCommands();
        graphCommands.stream()
                .filter(c -> c instanceof org.kie.workbench.common.stunner.core.graph.command.impl.DeleteConnectorCommand)
                .forEach(c -> {
                    org.kie.workbench.common.stunner.core.graph.command.impl.DeleteConnectorCommand gc = (org.kie.workbench.common.stunner.core.graph.command.impl.DeleteConnectorCommand) c;
                    Patch[] edgePatches = deleteEdge(canvasHandler, gc.getEdge(), gc.getLastSourceNodeUUID(), gc.getLastTargetNodeUUID());
                    patches.push(edgePatches);
                });
        return toArray(patches);
    }

    @SuppressWarnings("all")
    private Patch[] addNode(AddNodeCommand command) {
        Node candidate = command.getCandidate();
        return addNode(candidate);
    }

    @SuppressWarnings("all")
    private Patch[] addNode(Node candidate) {
        if (Marshaller.isStartState(candidate) || Marshaller.isEndState(candidate)) {
            return new Patch[0];
        }
        int count = getStatesCount();
        State jsCandidate = marshaller.marshall(candidate);
        Patch patch = PatchFactory.add("/states/" + count, jsCandidate);
        getMarshallerContext().addStateIndex(candidate.getUUID());
        return new Patch[]{patch};
    }

    @SuppressWarnings("all")
    private Patch[] updateNode(Node candidate) {
        int stateIndex = getStateIndex(candidate);
        if (stateIndex < 0) {
            return new Patch[0];
        }
        State jsCandidate = marshaller.marshall(candidate);
        Patch patch = PatchFactory.replace("/states/" + stateIndex, jsCandidate);
        return new Patch[]{patch};
    }

    @SuppressWarnings("all")
    private Patch[] updateNodeProperty(UpdateElementPropertyCommand command) {
        String field = command.getField();
        Element element = command.getElement();
        if (element instanceof Node) {
            Node node = (Node) element;
            // TODO: Do this name check via DefinitionAdapter instead.
            if ("name".equals(field)) {
                return updateStateName(node, (String) command.getValue());
            }
            return updateNode(node);
        }
        return null;
    }

    @SuppressWarnings("all")
    private Patch[] updateStateName(Node node, String value) {
        JsArray<Patch> patches = new JsArray<>();
        int stateIndex = getStateIndex(node);
        if (stateIndex < 0) {
            return new Patch[0];
        }
        Patch replaceNamePatch = PatchFactory.replace("/states/" + stateIndex + "/name", value);
        patches.push(replaceNamePatch);
        List<Edge> inEdges = node.getInEdges();
        for (Edge inEdge : inEdges) {
            Patch[] edgePatches = updateEdge(inEdge);
            patches.push(edgePatches);
        }
        return toArray(patches);
    }

    @SuppressWarnings("all")
    private Patch[] deleteEdge(AbstractCanvasHandler canvasHandler,
                               Edge edge,
                               String lastSourceNodeUUID,
                               String lastTargetNodeUUID) {
        JsArray<Patch> patches = new JsArray<>();
        if (edge.getContent() instanceof View) {
            Object bean = ((View<?>) edge.getContent()).getDefinition();
            if (bean instanceof StartTransition) {
                Patch replaceStartPatch = PatchFactory.replace("/start", "");
                patches.push(replaceStartPatch);
            } else {
                if (null != lastSourceNodeUUID) {
                    Node lastSource = canvasHandler.getGraphIndex().getNode(lastSourceNodeUUID);
                    if (null != lastSource) {
                        Patch[] sourcePatch = updateNode(lastSource);
                        patches.push(sourcePatch);
                    }
                }
                if (null != lastTargetNodeUUID) {
                    Node lastTarget = canvasHandler.getGraphIndex().getNode(lastTargetNodeUUID);
                    if (null != lastTarget) {
                        Patch[] targetPatch = updateNode(lastTarget);
                        patches.push(targetPatch);
                    }
                }
            }
        }
        return toArray(patches);
    }

    @SuppressWarnings("all")
    private Patch[] updateEdge(Edge edge) {
        JsArray<Patch> patches = new JsArray<>();
        if (null != edge) {
            if (edge.getContent() instanceof View) {
                Object bean = ((View<?>) edge.getContent()).getDefinition();
                if (bean instanceof StartTransition) {
                    Node targetNode = edge.getTargetNode();
                    if (null != targetNode) {
                        String name = getStateNodeName(edge.getTargetNode());
                        Patch replaceStartPatch = PatchFactory.replace("/start", null != name ? name : "");
                        patches.push(replaceStartPatch);
                    }
                } else {
                    Node sourceNode = edge.getSourceNode();
                    Patch[] sourcePatch = updateNode(sourceNode);
                    patches.push(sourcePatch);
                    Node targetNode = edge.getTargetNode();
                    Patch[] targetPatches = updateNode(targetNode);
                    patches.push(targetPatches);
                }
            }
        }
        return toArray(patches);
    }

    @SuppressWarnings("all")
    private static String getStateNodeName(Node node) {
        if (null != node) {
            Object definition = ((View) node.getContent()).getDefinition();
            if (definition instanceof State) {
                String name = ((State) definition).getName();
                return name;
            }
        }
        return null;
    }

    @SuppressWarnings("all")
    private int getStateIndex(Node node) {
        return getMarshallerContext().getStateIndex(node.getUUID());
    }

    private int getStatesCount() {
        return getMarshallerContext().getStatesCount();
    }

    private MarshallerContext getMarshallerContext() {
        return marshaller.getContext();
    }

    private static Patch[] toArray(JsArray<Patch> patches) {
        return patches.asArray(new Patch[0]);
    }
}
