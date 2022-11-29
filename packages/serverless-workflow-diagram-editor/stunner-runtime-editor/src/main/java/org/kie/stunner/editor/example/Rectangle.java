package org.kie.stunner.editor.example;

import jsinterop.annotations.JsType;

@JsType
public class Rectangle {

    public String name;

    public Rectangle() {
        this.name = "Rectangle";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
