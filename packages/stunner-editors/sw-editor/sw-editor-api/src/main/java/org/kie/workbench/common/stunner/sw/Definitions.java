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

package org.kie.workbench.common.stunner.sw;

import javax.enterprise.context.ApplicationScoped;

import org.jboss.errai.databinding.client.api.Bindable;
import org.kie.workbench.common.stunner.core.definition.annotation.DefinitionSet;
import org.kie.workbench.common.stunner.core.definition.builder.Builder;
import org.kie.workbench.common.stunner.core.factory.graph.GraphFactory;
import org.kie.workbench.common.stunner.core.rule.annotation.Occurrences;
import org.kie.workbench.common.stunner.sw.definition.ActionTransition;
import org.kie.workbench.common.stunner.sw.definition.CallFunction;
import org.kie.workbench.common.stunner.sw.definition.CallSubflow;
import org.kie.workbench.common.stunner.sw.definition.End;
import org.kie.workbench.common.stunner.sw.definition.ErrorTransition;
import org.kie.workbench.common.stunner.sw.definition.EventNode;
import org.kie.workbench.common.stunner.sw.definition.EventState;
import org.kie.workbench.common.stunner.sw.definition.EventTransition;
import org.kie.workbench.common.stunner.sw.definition.InjectState;
import org.kie.workbench.common.stunner.sw.definition.Start;
import org.kie.workbench.common.stunner.sw.definition.StartTransition;
import org.kie.workbench.common.stunner.sw.definition.SwitchState;
import org.kie.workbench.common.stunner.sw.definition.Transition;

@ApplicationScoped
@Bindable
@DefinitionSet(
        graphFactory = GraphFactory.class,
        qualifier = SWEditor.class,
        definitions = {
                Start.class,
                End.class,
                InjectState.class,
                SwitchState.class,
                EventState.class,
                EventNode.class,
                CallFunction.class,
                CallSubflow.class,
                StartTransition.class,
                ErrorTransition.class,
                EventTransition.class,
                ActionTransition.class,
                Transition.class
        },
        builder = Definitions.DefinitionsBuilder.class
)
@Occurrences(role = Start.LABEL_START, min = 1, max = 1)
@Occurrences(role = End.LABEL_END, min = 0, max = 1)
public class Definitions {

    public Definitions() {
    }

    public static class DefinitionsBuilder implements Builder<Definitions> {

        @Override
        public Definitions build() {
            return new Definitions();
        }
    }
}
