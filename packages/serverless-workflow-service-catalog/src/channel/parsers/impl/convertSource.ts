/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

import { SwfCatalogSourceType, SwfServiceCatalogFunctionSource, SwfServiceCatalogServiceSource } from "../../../api";

export function convertSource(catalogSource: SwfServiceCatalogServiceSource): SwfServiceCatalogFunctionSource {
  if (catalogSource?.type === SwfCatalogSourceType.LOCAL_FS) {
    return {
      type: catalogSource.type,
      serviceFileAbsolutePath: catalogSource.absoluteFilePath,
    };
  }

  if (catalogSource?.type === SwfCatalogSourceType.SERVICE_REGISTRY) {
    return {
      type: catalogSource.type,
      registry: catalogSource.registry,
      serviceId: catalogSource.id,
    };
  }

  // TODO: Ansible pere changes skipped - see: https://github.com/romartin/kie-tools/commit/1d31ae4c7d949fe4fef7671a3a7ab65962633951#diff-675c2ac487230b0753810fe60314f185abea23245fa8e183dd9ae91d31fe3c01
  // TODO: field catalogSource.url used for all params.
  return {
    type: catalogSource.type,
    registry: catalogSource.url,
    resource: catalogSource.url,
    operation: catalogSource.url,
  };
}
