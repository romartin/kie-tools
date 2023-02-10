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

package org.kie.stunner.editor;

import jsinterop.annotations.JsType;
import org.kie.stunner.editor.workflow.Activity;

import static org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter.toClassNames;

@JsType
public class StunnerJsDefinitionSet {

    public String definitions;

    public StunnerJsDefinitionSet() {
        // TODO Just for local testing.... value must be empty string.
        definitions = toClassNames(Activity.class);
    }
}
