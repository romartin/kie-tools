package org.kie.workbench.common.stunner.sw.client.js;

import com.ait.lienzo.client.core.types.JsCanvas;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsRuleAdapter;

// TODO: Move to stunner core
@JsType
public class JsStunnerEditor {

    public JsDefinitionManager definitionManager;
    public JsStunnerSession session;
    public JsCanvas canvas;

    public JsStunnerEditor(JsDefinitionAdapter definitionAdapter,
                           JsPropertyAdapter propertyAdapter,
                           JsRuleAdapter ruleAdapter,
                           JsCanvas canvas,
                           ViewerSession session) {
        this.definitionManager = new JsDefinitionManager(definitionAdapter, propertyAdapter, ruleAdapter);
        this.session = new JsStunnerSession(session);
        this.canvas = canvas;
    }
}
