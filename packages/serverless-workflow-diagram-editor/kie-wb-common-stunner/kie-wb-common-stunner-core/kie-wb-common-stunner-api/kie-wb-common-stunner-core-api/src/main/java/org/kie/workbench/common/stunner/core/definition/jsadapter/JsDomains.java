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

package org.kie.workbench.common.stunner.core.definition.jsadapter;

import javax.enterprise.context.ApplicationScoped;

// TODO: Only supports a single domain right now, per global scope.
@ApplicationScoped
public class JsDomains {

    private JsDomain domain;

    public JsDomains() {
        domain = new JsDomain();
    }

    public JsDomain getDomain() {
        return domain;
    }

    public JsDomain getDomain(Object pojo) {
        if (domain.definitionSet == pojo) {
            return domain;
        }
        throw new UnsupportedOperationException("Just a single JsDomain instance is supported.");
    }
}
