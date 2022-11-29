package org.kie.stunner.editor.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

// TODO: Refactor stuff into stunner core.
@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "window")
public class JsWindow {

    @JsProperty
    public static JsStunnerCommands commands;

    @JsProperty
    public static JsDomainInitializer domainInitializer;
}