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
import React from "react";
import { Label } from "@patternfly/react-core/dist/js/components/Label";
import { useMemo } from "react";
import { ServerlessCategory, ServerlessCategoryMap } from "../workspace/components/ServerlessCategoryMap";

export function SampleCategoryComponent(props: { category: ServerlessCategory }) {
  const categoryTag = useMemo(() => ServerlessCategoryMap[props.category], [props.category]);

  return (
    <Label color={categoryTag.color}>
      <categoryTag.icon />
      &nbsp;&nbsp;<b>{categoryTag.label}</b>
    </Label>
  );
}
