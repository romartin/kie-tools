/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { JavaCodeCompletionApi } from "@kie-tools-core/vscode-java-code-completion/dist/api";
import { DiagramExposedInteropApi } from "../../api/DiagramExposedInteropApi";
import { DiagramService } from "../../api/DiagramService";
import { StunnerJSDiagramEditor, StunnerJSDiagramEditorFactory } from "../../envelope";
import { VsCodeServerlessWorkflowDiagramEditorChannelApi } from "../api/VsCodeServerlessWorkflowDiagramEditorChannelApi";

export interface CustomWindow extends Window {
  envelope: {
    javaCodeCompletionService: JavaCodeCompletionApi;
    diagramService: DiagramExposedInteropApi;
  };
}

declare let window: CustomWindow;

class JavaCodeCompletionService implements JavaCodeCompletionApi {
  constructor(
    private readonly envelopeContext: KogitoEditorEnvelopeContextType<VsCodeServerlessWorkflowDiagramEditorChannelApi>
  ) {}
  getAccessors(fqcn: string, query: string) {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__getAccessors(fqcn, query);
  }
  getClasses(query: string) {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__getClasses(query);
  }
  isLanguageServerAvailable() {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__isLanguageServerAvailable();
  }
}

export class VsCodeServerlessWorkflowDiagramEditorFactory
  implements EditorFactory<StunnerJSDiagramEditor, VsCodeServerlessWorkflowDiagramEditorChannelApi>
{
  constructor(private readonly gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean }) {}

  public createEditor(
    ctx: KogitoEditorEnvelopeContextType<VsCodeServerlessWorkflowDiagramEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<StunnerJSDiagramEditor> {
    window.envelope = {
      ...(window.envelope ?? {}),
      ...{ javaCodeCompletionService: new JavaCodeCompletionService(ctx) },
      diagramService: new DiagramService(ctx),
    };

    const factory = new StunnerJSDiagramEditorFactory(this.gwtEditorEnvelopeConfig);
    return factory.createEditor(ctx, initArgs);
  }
}
