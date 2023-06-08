package org.kie.workbench.common.stunner.core.client.api;

import jsinterop.annotations.JsType;
import org.kie.workbench.common.stunner.core.api.JsDefinitionManager;

@JsType
public class JsStunnerEditor {

    public JsDefinitionManager definitions;
    public JsDomainInitializer domainInitializer;
    public JsStunnerSession session;
    public JsShapeViewFactory shapeViewFactory;
    public Object canvas;
}
