/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EditorFactory, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { EditorEnvelopeViewApi, KogitoEditorEnvelopeApiImpl } from "@kie-tools-core/editor/dist/envelope";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { Node, Edge, Definition } from "../api/StunnerEditorEnvelopeAPI";
import { ServerlessWorkflowDiagramEditorChannelApi, ServerlessWorkflowDiagramEditorEnvelopeApi } from "../api";
import { ServerlessWorkflowDiagramEditor } from "./ServerlessWorkflowDiagramEditor";
import { StunnerEdge, StunnerEditor, StunnerSession, StunnerNode, StunnerContentView } from "../api/StunnerAPI";

export type ServerlessWorkflowDiagramEnvelopeApiFactoryArgs = EnvelopeApiFactoryArgs<
  ServerlessWorkflowDiagramEditorEnvelopeApi,
  ServerlessWorkflowDiagramEditorChannelApi,
  EditorEnvelopeViewApi<ServerlessWorkflowDiagramEditor>,
  KogitoEditorEnvelopeContextType<ServerlessWorkflowDiagramEditorChannelApi>
>;

export class ServerlessWorkflowDiagramEditorEnvelopeApiImpl
  extends KogitoEditorEnvelopeApiImpl<
    ServerlessWorkflowDiagramEditor,
    ServerlessWorkflowDiagramEditorEnvelopeApi,
    ServerlessWorkflowDiagramEditorChannelApi
  >
  implements ServerlessWorkflowDiagramEditorEnvelopeApi
{
  constructor(
    private readonly serverlessWorkflowArgs: ServerlessWorkflowDiagramEnvelopeApiFactoryArgs,
    editorFactory: EditorFactory<ServerlessWorkflowDiagramEditor, ServerlessWorkflowDiagramEditorChannelApi>
  ) {
    super(serverlessWorkflowArgs, editorFactory);
  }

  public async editor_session_getEdgeByUUID(uuid: string) {
    const edge: StunnerEdge = this.getEditorOrThrowError().getEdgeByUUID(uuid);
    return this.toEdge(edge);
  }

  public async editor_session_getNodeByUUID(uuid: string) {
    const node: StunnerNode = this.getEditorOrThrowError().getNodeByUUID(uuid);
    return this.toNode(node);
  }

  public async editor_session_getDefinitionByElementUUID(uuid: string): Promise<Object> {
    return this.getEditorOrThrowError().getDefinitionByElementUUID(uuid);
  }

  public async editor_session_getNodeByName(name: string) {
    const node: StunnerNode = this.getEditorOrThrowError().getNodeByName(name);
    return this.toNode(node);
  }

  public async editor_session_getNodeName(uuid: string) {
    return this.getEditorOrThrowError().getNodeName(uuid);
  }

  public async editor_session_getSelectedElementUUID() {
    return this.getEditorOrThrowError().getSelectedElementUUID();
  }

  public async editor_session_getSelectedNode() {
    const node: StunnerNode = this.getEditorOrThrowError().getSelectedNode();
    return this.toNode(node);
  }

  public async editor_session_getSelectedEdge() {
    const edge: StunnerEdge = this.getEditorOrThrowError().getSelectedEdge();
    return this.toEdge(edge);
  }

  public async editor_session_getSelectedDefinition() {
    return this.getEditorOrThrowError().getSelectedDefinition();
  }

  public async editor_session_selectByUUID(uuid: string) {
    this.getEditorOrThrowError().selectByUUID(uuid);
  }

  public async editor_session_selectByName(name: string) {
    this.getEditorOrThrowError().selectByName(name);
  }

  public async editor_session_clearSelection() {
    this.getEditorOrThrowError().clearSelection();
  }

  private toNode(node: StunnerNode) {
    const jsNode = new Node();

    jsNode.uuid = node.getUUID();
    jsNode.definition = this.toDefinition(node.getContent().getDefinition());

    const inEdges: StunnerEdge[] = node.inConnectors();
    jsNode.inEdges = new Array();
    inEdges.forEach((inEdge) => {
      const inResultEdge: Edge = this.toEdge(inEdge);
      jsNode.inEdges.push(inResultEdge);
    });

    const outEdges: StunnerEdge[] = node.outConnectors();
    jsNode.outEdges = new Array();
    outEdges.forEach((outEdge) => {
      const outResultEdge: Edge = this.toEdge(outEdge);
      jsNode.outEdges.push(outResultEdge);
    });

    return jsNode;
  }

  private toEdge(edge: StunnerEdge) {
    const inResultEdge: Edge = new Edge();
    const inEdgeContent: StunnerContentView = edge.getContent();
    inResultEdge.uuid = edge.getUUID();
    inResultEdge.definition = this.toDefinition(inEdgeContent.getDefinition());
    inResultEdge.source = edge.getSourceNode().getUUID();
    inResultEdge.target = edge.getTargetNode().getUUID();
    return inResultEdge;
  }

  private toDefinition(bean: Object) {
    const defId: string = this.getEditorOrThrowError().getDefinitionId(bean);
    const defName: string = this.getEditorOrThrowError().getDefinitionName(bean);
    const result: Definition = new Definition();
    result.id = defId;
    result.name = defName;
    return result;
  }

  public async editor_canvas_getShapeIds() {
    return this.getEditorOrThrowError().getShapeIds();
  }

  public async editor_canvas_getBackgroundColor(uuid: string) {
    return this.getEditorOrThrowError().getBackgroundColor(uuid);
  }

  public async editor_canvas_setBackgroundColor(uuid: string, backgroundColor: string) {
    return this.getEditorOrThrowError().setBackgroundColor(uuid, backgroundColor);
  }

  public async editor_canvas_getBorderColor(uuid: string) {
    return this.getEditorOrThrowError().getBorderColor(uuid);
  }

  public async editor_canvas_setBorderColor(uuid: string, borderColor: string) {
    return this.getEditorOrThrowError().setBorderColor(uuid, borderColor);
  }

  public async editor_canvas_getLocation(uuid: string) {
    return this.getEditorOrThrowError().getLocation(uuid);
  }

  public async editor_canvas_getAbsoluteLocation(uuid: string) {
    return this.getEditorOrThrowError().getAbsoluteLocation(uuid);
  }

  public async editor_canvas_getDimensions(uuid: string) {
    return this.getEditorOrThrowError().getDimensions(uuid);
  }

  public async editor_canvas_center(uuid: string) {
    return this.getEditorOrThrowError().center(uuid);
  }

  public async editor_canvas_draw() {
    return this.getEditorOrThrowError().draw();
  }

  public kogitoSwfDiagramEditor__highlightNode(args: { nodeName: string | null }) {
    return this.getEditorOrThrowError().selectStateByName(args.nodeName);
  }
}
