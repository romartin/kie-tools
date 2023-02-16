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
import { GwtEditorWrapperFactory } from "@kie-tools/kie-bc-editors/dist/common";
import { getStunnerJSDiagramEditorLanguageData, StunnerJSDiagramEditorChannelApi } from "../api";
import { DiagramExposedInteropApi } from "../api/DiagramExposedInteropApi";
import { DiagramService } from "../api/DiagramService";
import { StunnerJSDiagramEditor, StunnerJSDiagramEditorImpl } from "./StunnerJSDiagramEditor";

export interface CustomWindow {
  envelope: {
    diagramService: DiagramExposedInteropApi;
  };
}

declare let window: CustomWindow;

export class StunnerJSDiagramEditorFactory
  implements EditorFactory<StunnerJSDiagramEditor, StunnerJSDiagramEditorChannelApi>
{
  constructor(private readonly gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean }) {}

  public createEditor(
    ctx: KogitoEditorEnvelopeContextType<StunnerJSDiagramEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<StunnerJSDiagramEditor> {
    window.envelope = {
      ...(window.envelope ?? {}),
      diagramService: new DiagramService(ctx),
    };
    const languageData = getStunnerJSDiagramEditorLanguageData(initArgs.resourcesPathPrefix);
    const factory = new GwtEditorWrapperFactory<StunnerJSDiagramEditor>(
      languageData,
      (self) =>
        new StunnerJSDiagramEditorImpl(
          languageData.editorId,
          self.gwtAppFormerConsumedInteropApi.getEditor(languageData.editorId),
          ctx.channelApi,
          self.textFormatter,
          self.gwtStateControlService,
          self.kieBcEditorsI18n
        ),
      this.gwtEditorEnvelopeConfig
    );

    return factory.createEditor(ctx, initArgs);
  }
}
