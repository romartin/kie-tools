package org.kie.workbench.common.stunner.core.client.components.toolbox.actions;

import jsinterop.annotations.JsType;

@JsType
public interface JsToolboxConfig {

    JsToolboxConfig INSTANCE = new JsToolboxConfig() {
    };

    default double getButtonSize() {
        return 15;
    }

    default double getButtonPadding() {
        return 5;
    }

    default double getDecoratorPadding() {
        return 10;
    }

    default String getToolboxAt() {
        return "NORTH_EAST";
    }

    default String getItemGridTowards() {
        return "SOUTH_EAST";
    }

    default String getTooltipAt() {
        return "SOUTH";
    }

    default String getTooltipTowards() {
        return "SOUTH";
    }

    default boolean isConnectorIdAllowed(String id) {
        return true;
    }

    default boolean isNodeIdAllowed(String id) {
        return true;
    }
}
