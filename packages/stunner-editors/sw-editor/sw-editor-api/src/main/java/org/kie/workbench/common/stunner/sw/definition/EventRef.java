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
import org.kie.workbench.common.stunner.core.definition.property.PropertyMetaTypes;

@Bindable
@Definition
@JsType
public class EventRef implements BaseNode {

    public static final String LABEL_EVENT = "event";

    @JsIgnore
    public static final double BB_WIDTH = 56d;
    @JsIgnore
    public static final double BB_HEIGHT = 56d;

    @Category
    @JsIgnore
    public static final transient String category = Categories.EVENTS;

    @Labels
    @JsIgnore
    private final Set<String> labels = new Sets.Builder<String>()
            .add(Workflow.LABEL_ROOT_NODE)
            .add(LABEL_EVENT)
            .build();

    @Property
    // TODO: Is there a real need for making this dynamic?
    // @Id
    // @Title
    // @Description
    public String eventRef;

    @Property(meta = PropertyMetaTypes.NAME)
    public String name;

    public EventRef() {
    }

    public Set<String> getLabels() {
        return labels;
    }

    public String getCategory() {
        return category;
    }

    public String getEventRef() {
        return eventRef;
    }

    public void setEventRef(String eventRef) {
        this.eventRef = eventRef;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
