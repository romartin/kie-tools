/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as monaco from "monaco-editor";
import { languages } from "monaco-editor";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import { ServerlessWorkflowTextEditorChannelApi } from "../../../../api";
import { LsHover } from "@kie-tools/serverless-workflow-language-service/dist/channel";

export function initHovers(
  channelApi: MessageBusClientApi<ServerlessWorkflowTextEditorChannelApi>
): monaco.IDisposable {
  return monaco.languages.registerHoverProvider(["json", "yaml"], {
    provideHover: async (
      model: monaco.editor.ITextModel,
      position: monaco.Position,
      token: monaco.CancellationToken
    ) => {
      const currentWordPosition = model.getWordAtPosition(position);

      if (!currentWordPosition) {
        return;
      }

      const lsHoverItems: LsHover[] = await channelApi.requests.kogitoSwfLanguageService__getHovers({
        content: model.getValue(),
        uri: model.uri.toString(),
        cursorPosition: {
          line: position.lineNumber - 1,
          character: position.column - 1,
        },
        cursorWordRange: {
          start: {
            line: position.lineNumber - 1,
            character: (currentWordPosition?.startColumn ?? position.column) - 1,
          },
          end: {
            line: position.lineNumber - 1,
            character: (currentWordPosition?.endColumn ?? position.column) - 1,
          },
        },
      });

      return {
        contents: lsHoverItems.map((item) => {
          return {
            value: item.contents,
            isTrusted: true,
          };
        }),
      };
    },
  });
}
