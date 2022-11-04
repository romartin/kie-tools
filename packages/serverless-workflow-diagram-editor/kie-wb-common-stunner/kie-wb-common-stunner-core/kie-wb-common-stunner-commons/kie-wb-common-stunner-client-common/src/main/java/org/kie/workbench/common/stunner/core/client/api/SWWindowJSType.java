package org.kie.workbench.common.stunner.core.client.api;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "window")
public class SWWindowJSType {

    @JsProperty
    private static Object editor;

    @JsOverlay
    public static final void linkEditor(Object editor) {
        SWWindowJSType.editor = editor;
    }
}