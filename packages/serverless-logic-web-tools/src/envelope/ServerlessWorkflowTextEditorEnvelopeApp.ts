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

import * as EditorEnvelope from "@kie-tools-core/editor/dist/envelope";
import {
  ServerlessWorkflowTextEditorApi,
  ServerlessWorkflowTextEditorChannelApi,
  ServerlessWorkflowTextEditorEnvelopeApi,
} from "@kie-tools/serverless-workflow-text-editor/dist/api";
import { ServerlessWorkflowTextEditorFactory } from "@kie-tools/serverless-workflow-text-editor/dist/editor";
import { ServerlessWorkflowTextEditorEnvelopeApiImpl } from "@kie-tools/serverless-workflow-text-editor/dist/envelope";

EditorEnvelope.initCustom<
  ServerlessWorkflowTextEditorApi,
  ServerlessWorkflowTextEditorEnvelopeApi,
  ServerlessWorkflowTextEditorChannelApi
>({
  container: document.getElementById("swf-text-editor-envelope-app")!,
  bus: { postMessage: (message, targetOrigin, _) => window.parent.postMessage(message, targetOrigin!, _) },
  apiImplFactory: {
    create: (args) => new ServerlessWorkflowTextEditorEnvelopeApiImpl(args, new ServerlessWorkflowTextEditorFactory()),
  },
});
