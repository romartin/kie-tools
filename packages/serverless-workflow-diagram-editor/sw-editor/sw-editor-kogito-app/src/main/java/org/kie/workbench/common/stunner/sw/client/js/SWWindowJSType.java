package org.kie.workbench.common.stunner.sw.client.js;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

// TODO: Move to stunner core - Just refactor actual WindowJSType
@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "window")
public class SWWindowJSType {

    @JsProperty
    private static Object editor;

    @JsOverlay
    public static final void linkEditor(Object editor) {
        SWWindowJSType.editor = editor;
    }
}