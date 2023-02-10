package org.kie.stunner.editor.workflow;

import jsinterop.annotations.JsType;

@JsType
public class Activity {

    public String name;

    public Activity() {
        this.name = "Activity";
    }

    public String getName() {
        return name;
    }

    public Activity setName(String name) {
        this.name = name;
        return this;
    }
}
