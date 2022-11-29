package org.kie.stunner.editor.example;

import jsinterop.annotations.JsType;

import static org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter.toClassNames;

@JsType
public class ExampleDefinitionSet {

    public String definitions;

    public ExampleDefinitionSet() {
        definitions = toClassNames(Rectangle.class);
    }
}
