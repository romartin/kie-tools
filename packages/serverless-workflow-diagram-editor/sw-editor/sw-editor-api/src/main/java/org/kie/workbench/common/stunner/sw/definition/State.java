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

import jsinterop.annotations.JsType;

@JsType
public class State {

    public String name;

    public String type;

    // TODO: Not all states supports this (eg: switch state)
    public Object transition;

    // TODO: Not all states supports this (eg: switch state)
    public Object end;

    public ErrorTransition[] onErrors;

    public String eventTimeout;

    public String compensatedBy;

    public State() {
        this.name = "State";
    }

    public State setName(String name) {
        this.name = name;
        return this;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public State setType(String type) {
        this.type = type;
        return this;
    }

    public Object getTransition() {
        return transition;
    }

    public State setTransition(Object transition) {
        this.transition = transition;
        return this;
    }

    public Object getEnd() {
        return end;
    }

    public State setEnd(Object end) {
        this.end = end;
        return this;
    }

    public ErrorTransition[] getOnErrors() {
        return onErrors;
    }

    public State setOnErrors(ErrorTransition[] onErrors) {
        this.onErrors = onErrors;
        return this;
    }

    public String getEventTimeout() {
        return eventTimeout;
    }

    public State setEventTimeout(String eventTimeout) {
        this.eventTimeout = eventTimeout;
        return this;
    }

    public String getCompensatedBy() {
        return compensatedBy;
    }

    public State setCompensatedBy(String compensatedBy) {
        this.compensatedBy = compensatedBy;
        return this;
    }
}
