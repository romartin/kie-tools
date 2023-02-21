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

package org.kie.workbench.common.stunner.core.api;

import com.google.gwt.core.client.ScriptInjector;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;

@JsType
public class JsDomainInitializer {

    @JsIgnore
    private DomainInitializer domainInitializer;

    public static JsDomainInitializer build(DomainInitializer domainInitializer) {
        JsDomainInitializer i = new JsDomainInitializer();
        i.domainInitializer = domainInitializer;
        return i;
    }

    public JsDomainInitializer addDefinition(Object type) {
        domainInitializer.addDefinition(type);
        return this;
    }

    public JsDomainInitializer setCategory(Object type, String category) {
        domainInitializer.setCategory(type, category);
        return this;
    }

    public JsDomainInitializer setLabels(Object type, String... definitionLabels) {
        domainInitializer.setLabels(type, definitionLabels);
        return this;
    }

    public JsDomainInitializer addConnectionRule(Object type, String[]... roles) {
        domainInitializer.addConnectionRule(type, roles);
        return this;
    }

    public JsDomainInitializer initializeRules() {
        domainInitializer.initializeRules();
        return this;
    }

    public void injectScript(String src) {
        ScriptInjector.fromString(src).setWindow(ScriptInjector.TOP_WINDOW).inject();
    }
}
