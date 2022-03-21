/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.sw.definition;

import java.util.Set;

import jsinterop.annotations.JsIgnore;
import org.kie.soup.commons.util.Sets;
import org.kie.workbench.common.stunner.core.definition.annotation.definition.Category;
import org.kie.workbench.common.stunner.core.definition.annotation.definition.Labels;
import org.kie.workbench.common.stunner.core.definition.annotation.morph.MorphBase;

@MorphBase(defaultType = EventTimeout.class)
public class Timeout {

    public static final String LABEL_TIMEOUT = "timeout";

    @Category
    @JsIgnore
    public static final transient String category = Categories.TIMEOUTS;

    @Labels
    @JsIgnore
    private final Set<String> labels = new Sets.Builder<String>()
            .add(Workflow.LABEL_ROOT_NODE)
            .add(LABEL_TIMEOUT)
            .build();

    public Timeout() {
    }

    public Set<String> getLabels() {
        return labels;
    }

    public String getCategory() {
        return category;
    }
}
