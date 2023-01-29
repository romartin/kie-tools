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

package org.kie.workbench.common.stunner.sw.client.editor;

import com.google.gwt.core.client.ScriptInjector;
import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;
import org.kie.workbench.common.stunner.core.client.shape.factory.ShapeFactory;

// TODO: Move to core.
@JsType
public class JsDomainInitializer {

    @JsIgnore
    private DomainInitializer domainInitializer;
    @JsIgnore
    private ShapeFactory shapeFactory;

    public static JsDomainInitializer build(DomainInitializer domainInitializer,
                                            ShapeFactory shapeFactory) {
        JsDomainInitializer i = new JsDomainInitializer();
        i.domainInitializer = domainInitializer;
        i.shapeFactory = shapeFactory;
        return i;
    }

    public JsDomainInitializer initializeDefinition(Object type) {
        domainInitializer.initializeDefinition(type);
        return this;
    }

    public JsDomainInitializer initializeCategory(Object type, String category) {
        domainInitializer.initializeCategory(type, category);
        return this;
    }

    public JsDomainInitializer initializeLabels(Object type, String... definitionLabels) {
        domainInitializer.initializeLabels(type, definitionLabels);
        return this;
    }

    public void injectScript() {
        if (!isInjected()) {
            ScriptInjector.fromString(JsDomainInitializerBundle.INSTANCE.initialize().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
        }
    }

    //TODO If necessary, migrate from JSNI to Native, otherwise drop this.
    private native final boolean isInjected() /*-{
        if (true) {
            return false;
        }
        if (!(typeof $wnd.ELK === "undefined") && !(null === $wnd.ELK)) {
            return true;
        }
        return false;
    }-*/;
}
