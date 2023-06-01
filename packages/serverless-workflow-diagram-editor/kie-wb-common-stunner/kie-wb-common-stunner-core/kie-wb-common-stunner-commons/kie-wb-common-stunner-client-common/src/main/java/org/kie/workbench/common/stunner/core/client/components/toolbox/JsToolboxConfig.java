package org.kie.workbench.common.stunner.core.client.components.toolbox;

import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsType;

@JsType
public class JsToolboxConfig {

    @JsFunction
    public interface IsElementIdAllowed {

        boolean test(String id);
    }

    public double buttonSizePx;
    public double buttonPaddingPx;
    public double decoratorPaddingPx;
    public String toolboxAt;
    public String itemGridTowards;
    public String tooltipAt;
    public String tooltipTowards;
    public IsElementIdAllowed isConnectorIdAllowed;
    public IsElementIdAllowed isNodeIdAllowed;

    public static JsToolboxConfig create() {
        JsToolboxConfig config = new JsToolboxConfig();
        config.buttonSizePx = 15;
        config.buttonPaddingPx = 5;
        config.decoratorPaddingPx = 10;
        config.toolboxAt = "NORTH_EAST";
        config.itemGridTowards = "SOUTH_EAST";
        config.tooltipAt = "SOUTH";
        config.tooltipTowards = "SOUTH";
        config.isConnectorIdAllowed = (id) -> {
            DomGlobal.console.error("DEFAULT isConnectorIdAllowed");
            return true;
        };
        config.isNodeIdAllowed = (id) -> {
            DomGlobal.console.error("DEFAULT isNodeIdAllowed");
            return true;
        };
        return config;
    }
}
