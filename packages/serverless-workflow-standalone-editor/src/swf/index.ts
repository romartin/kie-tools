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

import swfCombinedEditorEnvelopeIndex from "!!raw-loader!../../dist/resources/swf/swfCombinedEditorEnvelopeIndex.html";
import swfDiagramEditorEnvelopeIndex from "!!raw-loader!../../dist/resources/swf/swfDiagramEditorEnvelopeIndex.html";
import swfTextEditorEnvelopeIndex from "!!raw-loader!../../dist/resources/swf/swfTextEditorEnvelopeIndex.html";
import { createEditor, Editor, ServerlessWorkflowType, StandaloneEditorApi } from "../common/Editor";
import { StateControl } from "@kie-tools-core/editor/dist/channel";
import { EnvelopeServer } from "@kie-tools-core/envelope-bus/dist/channel";
import { ChannelType, KogitoEditorChannelApi } from "@kie-tools-core/editor/dist/api";
import { StandaloneEditorsEditorChannelApiImpl } from "../envelope/StandaloneEditorsEditorChannelApiImpl";
import {
  SwfPreviewOptionsChannelApiImpl,
  NoOpSwfServiceCatalogChannelApiImpl,
  SwfStaticEnvelopeContentProviderChannelApiImpl,
} from "@kie-tools/serverless-workflow-combined-editor/dist/impl";
import { StandaloneServerlessWorkflowCombinedEditorChannelApi } from "./channel";
import { StandaloneSwfLanguageServiceChannelApiImpl, getLanguageServiceChannelApi } from "./languageService";
import { SwfPreviewOptions } from "@kie-tools/serverless-workflow-combined-editor/dist/api";
import { SwfServiceCatalogService } from "@kie-tools/serverless-workflow-service-catalog/dist/api";
import { StandaloneSwfServiceCatalogStore, SwfServiceCatalogProvider } from "./serviceCatalog";
import { StandaloneSwfServiceCatalogChannelApiImpl } from "./serviceCatalog";

declare global {
  interface Window {
    SwfEditor: Editor;
  }
}

const createEnvelopeServer = (
  iframe: HTMLIFrameElement,
  languageType: ServerlessWorkflowType,
  swfPreviewOptions?: SwfPreviewOptions,
  readOnly?: boolean,
  origin?: string
) => {
  const defaultOrigin = window.location.protocol === "file:" ? "*" : window.location.origin;
  return new EnvelopeServer<KogitoEditorChannelApi, any>(
    { postMessage: (message) => iframe.contentWindow?.postMessage(message, "*") },
    origin ?? defaultOrigin,
    (self) => {
      return self.envelopeApi.requests.kogitoEditor_initRequest(
        {
          origin: self.origin,
          envelopeServerId: self.id,
        },
        {
          resourcesPathPrefix: "",
          fileExtension: `sw.${languageType}`,
          initialLocale: "en-US",
          isReadOnly: readOnly ?? true,
          channel: ChannelType.STANDALONE,
          swfPreviewOptions,
        }
      );
    }
  );
};

export const open = (args: {
  container: Element;
  initialContent: Promise<string>;
  languageType: ServerlessWorkflowType;
  readOnly?: boolean;
  origin?: string;
  onError?: () => any;
  // TODO: Ansible pere changes skipped - see:
  // https://github.com/romartin/kie-tools/commit/1d31ae4c7d949fe4fef7671a3a7ab65962633951#diff-675c2ac487230b0753810fe60314f185abea23245fa8e183dd9ae91d31fe3c01
  swfPreviewOptions?: SwfPreviewOptions;
}): StandaloneEditorApi => {
  if (!args.languageType.match(/^(json|yaml|yml)$/)) {
    throw new Error('Specified language type is not correct. It must be one among these "json" | "yaml" | "yml" ');
  }

  const iframe = document.createElement("iframe");
  iframe.srcdoc = swfCombinedEditorEnvelopeIndex;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  const envelopeServer = createEnvelopeServer(
    iframe,
    args.languageType,
    args.swfPreviewOptions,
    args.readOnly,
    args.origin
  );

  const stateControl = new StateControl();

  let receivedSetContentError = false;

  const serviceCatalogStore = new StandaloneSwfServiceCatalogStore({
    serviceCatalogProvider: new SwfServiceCatalogProvider({
      provider: args.serviceCatalogProvider,
    }),
  });

  const languageServiceChannelApiImpl = new StandaloneSwfLanguageServiceChannelApiImpl({
    serviceCatalogStore,
    workflowType: args.languageType,
  });

  const channelApiImpl = new StandaloneServerlessWorkflowCombinedEditorChannelApi(
    new StandaloneEditorsEditorChannelApiImpl(
      stateControl,
      {
        fileName: `new-document.sw.${args.languageType}`,
        fileExtension: `sw.${args.languageType}`,
        getFileContents: () => Promise.resolve(args.initialContent),
        isReadOnly: args.readOnly ?? false,
      },
      "en-US",
      {
        kogitoEditor_setContentError() {
          if (!receivedSetContentError) {
            args.onError?.();
            receivedSetContentError = true;
          }
        },
      }
    ),
    // TODO: Ansible pere changes skipped - see:
    // https://github.com/romartin/kie-tools/commit/1d31ae4c7d949fe4fef7671a3a7ab65962633951#diff-675c2ac487230b0753810fe60314f185abea23245fa8e183dd9ae91d31fe3c01
    new NoOpSwfServiceCatalogChannelApiImpl(),
    languageServiceChannelApiImpl,
    new SwfPreviewOptionsChannelApiImpl(args.swfPreviewOptions ?? undefined),
    new SwfStaticEnvelopeContentProviderChannelApiImpl({
      diagramEditorEnvelopeContent: swfDiagramEditorEnvelopeIndex,
      textEditorEnvelopeContent: swfTextEditorEnvelopeIndex,
    })
  );

  const listener = (message: MessageEvent) => {
    envelopeServer.receive(message.data, channelApiImpl);
  };
  window.addEventListener("message", listener);

  args.container.appendChild(iframe);
  envelopeServer.startInitPolling(channelApiImpl);

  const editor = createEditor(envelopeServer.envelopeApi, stateControl, listener, iframe);
  return {
    ...editor,
  };
};

window.SwfEditor = { open };
