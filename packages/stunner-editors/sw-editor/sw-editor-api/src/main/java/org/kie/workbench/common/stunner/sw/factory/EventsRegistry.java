/*
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.sw.factory;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;

import org.kie.workbench.common.stunner.sw.spec.CNCFEvent;

// TODO: Really need for this?
@ApplicationScoped
public class EventsRegistry implements TypeByNameRegistry<CNCFEvent> {

    private final Map<String, CNCFEvent> definitions;

    public EventsRegistry() {
        this.definitions = new HashMap<>();
    }

    @Override
    @SuppressWarnings("all")
    public Collection<CNCFEvent> items() {
        // It is done for GWT/Errai compatibility since HashMap$Values do not
        // have empty constructor. Do not simplify!
        return definitions.values().stream().collect(Collectors.toList());
    }

    @Override
    public CNCFEvent get(final String name) {
        return definitions.get(name);
    }

    public void register(final CNCFEvent def) {
        definitions.put(def.name, def);
    }

    public CNCFEvent remove(final String name) {
        return definitions.remove(name);
    }

    public boolean isEmpty() {
        return definitions.isEmpty();
    }

    public void clear() {
        definitions.clear();
    }

    @PreDestroy
    public void destroy() {
        clear();
    }
}
