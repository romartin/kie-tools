/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

export const INSECURELY_DISABLE_TLS_CERTIFICATE_VALIDATION = "insecurely-disable-tls-certificate-validation";
export const TARGET_URL_HEADER = "target-url";

export type CorsConfig = {
  exposeHeaders: string[];
  allowMethods: string[];
  allowHeaders: string[];
  customHeaders: Record<string, string>;
};

export interface CorsProxy<Req, Res> {
  handle(req: Req, res: Res, next: Function): void;
}
