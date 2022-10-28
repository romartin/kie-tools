package org.kie.workbench.common.stunner.sw.client.js;

import com.ait.lienzo.client.core.types.JsCanvas;
import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandFactory;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.sw.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.sw.jsadapter.JsRuleAdapter;

// TODO: Move to stunner core
@JsType
public class JsStunnerEditor {

    public JsDefinitionManager definitionManager;
    public JsStunnerSession session;

    public JsStunnerEditor(JsDefinitionAdapter definitionAdapter,
                           JsPropertyAdapter propertyAdapter,
                           JsRuleAdapter ruleAdapter,
                           JsCanvas canvas,
                           CanvasCommandFactory factory,
                           NodeFactory nodeFactory,
                           EdgeFactory edgeFactory,
                           ViewerSession session) {
        this.definitionManager = new JsDefinitionManager(definitionAdapter, propertyAdapter, ruleAdapter);
        this.session = new JsStunnerSession(definitionManager, session, canvas, new JsStunnerCommands(factory, nodeFactory, edgeFactory, session));
    }
}
