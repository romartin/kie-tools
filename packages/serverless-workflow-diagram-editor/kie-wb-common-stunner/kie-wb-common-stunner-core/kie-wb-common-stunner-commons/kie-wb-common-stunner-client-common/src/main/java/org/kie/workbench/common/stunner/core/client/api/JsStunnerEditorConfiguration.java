package org.kie.workbench.common.stunner.core.client.api;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.components.toolbox.JsToolboxConfig;

@JsType
public class JsStunnerEditorConfiguration {

    public static JsStunnerEditorConfiguration create() {
        DomGlobal.console.error("BUILDING JsStunnerEditorConfiguration");
        JsStunnerEditorConfiguration configuration = new JsStunnerEditorConfiguration();
        configuration.toolbox = JsToolboxConfig.create();
        return configuration;
    }

    public JsToolboxConfig toolbox;
}
