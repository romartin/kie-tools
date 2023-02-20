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

import { initCustom } from "@kie-tools-core/editor/dist/envelope";
import {
  StunnerJSDiagramEditorChannelApi,
  StunnerJSDiagramEditorEnvelopeApi,
} from "@kie-tools/stunner-js-editor-envelope/dist/api";
import {
  StunnerJSDiagramEditor,
  StunnerJSDiagramEditorEnvelopeApiImpl,
  StunnerJSDiagramEditorFactory,
} from "@kie-tools/stunner-js-editor-envelope/dist/envelope";

const initEnvelope = () => {
  initCustom<StunnerJSDiagramEditor, StunnerJSDiagramEditorEnvelopeApi, StunnerJSDiagramEditorChannelApi>({
    container: document.getElementById("diagram-envelope-app")!,
    bus: { postMessage: (message, targetOrigin, _) => window.parent.postMessage(message, "*", _) },
    apiImplFactory: {
      create: (args) =>
        new StunnerJSDiagramEditorEnvelopeApiImpl(
          args,
          new StunnerJSDiagramEditorFactory({ shouldLoadResourcesDynamically: false })
        ),
    },
  });
};

// Envelope should be initialized only after page was loaded.
if (document.readyState !== "loading") {
  initEnvelope();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    initEnvelope();
  });
}
