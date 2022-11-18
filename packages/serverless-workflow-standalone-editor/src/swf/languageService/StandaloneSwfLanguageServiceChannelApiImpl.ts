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

import { SwfLanguageServiceChannelApi } from "@kie-tools/serverless-workflow-language-service/dist/api";
import {
  LsHover,
  SwfJsonLanguageService,
  SwfLanguageServiceArgs,
  SwfYamlLanguageService,
} from "@kie-tools/serverless-workflow-language-service/dist/channel";
import { CodeLens, CompletionItem, Position, Range } from "vscode-languageserver-types";
import { ServerlessWorkflowType } from "../../common/Editor";
import { StandaloneSwfServiceCatalogStore } from "../serviceCatalog";

export class StandaloneSwfLanguageServiceChannelApiImpl implements SwfLanguageServiceChannelApi {
  private readonly ls: SwfJsonLanguageService | SwfYamlLanguageService;

  constructor(
    private readonly args: {
      workflowType: ServerlessWorkflowType;
      serviceCatalogStore: StandaloneSwfServiceCatalogStore;
    }
  ) {
    const lsArgs = this.getDefaultLsArgs();
    this.ls =
      this.args.workflowType == "json" ? new SwfJsonLanguageService(lsArgs) : new SwfYamlLanguageService(lsArgs);
  }

  public async kogitoSwfLanguageService__getCompletionItems(args: {
    content: string;
    uri: string;
    cursorPosition: Position;
    cursorWordRange: Range;
  }): Promise<CompletionItem[]> {
    return this.ls.getCompletionItems(args);
  }

  public async kogitoSwfLanguageService__getCodeLenses(args: { uri: string; content: string }): Promise<CodeLens[]> {
    return this.ls.getCodeLenses(args);
  }

  public async kogitoSwfLanguageService__getHovers(args: {
    content: string;
    uri: string;
    cursorPosition: Position;
    cursorWordRange: Range;
  }): Promise<LsHover[]> {
    return this.ls.getHoverItems(args);
  }

  private getDefaultLsArgs = (): Omit<SwfLanguageServiceArgs, "lang"> => {
    return {
      fs: {},
      serviceCatalog: {
        global: {
          getServices: async () => this.args.serviceCatalogStore.storedServices,
        },
        relative: {
          getServices: async (_textDocument) => [],
        },
        getServiceFileNameFromSwfServiceCatalogServiceId: async (
          registryName: string,
          swfServiceCatalogServiceId: string
        ) => `${registryName}__${swfServiceCatalogServiceId}__latest.yaml`,
      },
      config: {
        shouldDisplayServiceRegistriesIntegration: async () => false,
        shouldIncludeJsonSchemaDiagnostics: async () => true,
        shouldReferenceServiceRegistryFunctionsWithUrls: async () => true,
        getSpecsDirPosixPaths: async (_textDocument) => ({
          specsDirRelativePosixPath: "",
          specsDirAbsolutePosixPath: "",
        }),
        shouldConfigureServiceRegistries: () => false,
        shouldServiceRegistriesLogIn: () => false,
        canRefreshServices: () => this.args.serviceCatalogStore.canRefreshServices,
      },
    };
  };
}
