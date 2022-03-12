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

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils;
import org.kie.workbench.common.stunner.core.definition.builder.Builder;
import org.kie.workbench.common.stunner.core.factory.definition.DefinitionFactory;
import org.kie.workbench.common.stunner.sw.definition.Event;
import org.kie.workbench.common.stunner.sw.definition.EventRef;

// TODO: Really need for this?
@ApplicationScoped
public class EventFactory
        implements DefinitionFactory<EventRef> {

    private static final String PREFIX = BindableAdapterUtils.getGenericClassName(EventRef.class);

    private final EventsRegistry registry;

    protected EventFactory() {
        this.registry = null;
    }

    @Inject
    public EventFactory(final EventsRegistry registry) {
        this.registry = registry;
    }

    @Override
    public boolean accepts(final String identifier) {
        // TODO: Returning false now in order to "disable" this bean factory. Drop this?
        // return identifier.startsWith(PREFIX);
        return false;
    }

    @Override
    public EventRef build(final String identifier) {
        final String name = BindableAdapterUtils.getDynamicId(EventRef.class,
                                                              identifier);
        return null != name ?
                buildItem(name) :
                EventBuilder.newInstance();
    }

    @SuppressWarnings("all")
    public EventRef buildItem(final String name) {
        final Event eventDef = getRegistry().get(name);

        return new EventBuilder(eventDef).build();
    }

    private EventsRegistry getRegistry() {
        return registry;
    }

    public static class EventBuilder implements Builder<EventRef> {

        private final Event eventDef;

        public EventBuilder(final Event eventDef) {
            this.eventDef = eventDef;
        }

        public static EventRef newInstance() {
            return new EventRef();
        }

        @Override
        public EventRef build() {
            final EventRef event = newInstance();

            if (null != eventDef) {
                event.setName(eventDef.name);
                event.setEventRef(eventDef.name);
            }

            return event;
        }
    }
}
