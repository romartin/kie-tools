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

import {
  SwfServiceCatalogChannelApi,
  SwfServiceCatalogService,
  SwfServiceRegistriesSettings,
} from "@kie-tools/serverless-workflow-service-catalog/dist/api";
import { SharedValueProvider } from "@kie-tools-core/envelope-bus/dist/api";
import { StandaloneSwfServiceCatalogStore } from "./StandaloneSwfServiceCatalogStore";

export class StandaloneSwfServiceCatalogChannelApiImpl implements SwfServiceCatalogChannelApi {
  constructor(private readonly serviceCatalogStore: StandaloneSwfServiceCatalogStore) {}

  kogitoSwfServiceCatalog_importFunctionFromCompletionItem(args: {
    containingService: SwfServiceCatalogService;
    documentUri: string;
  }): void {}

  kogitoSwfServiceCatalog_logInServiceRegistries(): void {
    console.log("do nothing");
  }

  kogitoSwfServiceCatalog_refresh(): void {
    console.log("StandaloneSwfServiceCatalogChannelApiImpl refresh!");
    this.serviceCatalogStore.refresh();
  }

  kogitoSwfServiceCatalog_serviceRegistriesSettings(): SharedValueProvider<SwfServiceRegistriesSettings> {
    return { defaultValue: { registries: [] } };
  }

  kogitoSwfServiceCatalog_services(): SharedValueProvider<SwfServiceCatalogService[]> {
    return { defaultValue: [] };
  }

  kogitoSwfServiceCatalog_setupServiceRegistriesSettings(): void {}
}
