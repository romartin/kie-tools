package org.kie.lienzo.client.js;

import jsinterop.annotations.JsType;

@JsType(isNative = true)
public class SomeNativeJsType {

    public String name;

    public SomeNativeJsType() {
        this.name = "SomeJsType1";
    }
}
