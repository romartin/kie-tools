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
import jsinterop.annotations.JsType;
import org.jboss.errai.databinding.client.api.Bindable;
import org.kie.soup.commons.util.Sets;
import org.kie.workbench.common.stunner.core.definition.annotation.Definition;
import org.kie.workbench.common.stunner.core.definition.annotation.Property;
import org.kie.workbench.common.stunner.core.definition.annotation.definition.Category;
import org.kie.workbench.common.stunner.core.definition.annotation.definition.Labels;
import org.kie.workbench.common.stunner.core.rule.annotation.CanContain;

@Bindable
@Definition
@CanContain(roles = {EventRef.LABEL_EVENT, ActionNode.LABEL_ACTION})
@JsType
public class OnEvents implements BaseNode {

    public static final String LABEL_ONEVENTS = "on_events";

    @JsIgnore
    public static final double BB_WIDTH = 56d;
    @JsIgnore
    public static final double BB_HEIGHT = 56d;

    @Category
    public static final transient String category = Categories.EVENTS;

    @Labels
    private final Set<String> labels = new Sets.Builder<String>()
            .add(Workflow.LABEL_ROOT_NODE)
            .add(LABEL_ONEVENTS)
            .build();

    @Property
    public String actionMode;

    public OnEvents() {
    }

    public Set<String> getLabels() {
        return labels;
    }

    public String getCategory() {
        return category;
    }

    public String getActionMode() {
        return actionMode;
    }

    public void setActionMode(String actionMode) {
        this.actionMode = actionMode;
    }

    @Override
    @JsIgnore
    public double getWidth() {
        return BB_WIDTH;
    }

    @Override
    @JsIgnore
    public double getHeight() {
        return BB_HEIGHT;
    }
}
