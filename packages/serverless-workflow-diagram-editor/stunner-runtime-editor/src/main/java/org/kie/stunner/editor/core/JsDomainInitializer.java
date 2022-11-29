package org.kie.stunner.editor.core;

import java.lang.annotation.Annotation;

import jsinterop.annotations.JsIgnore;
import jsinterop.annotations.JsType;
import org.kie.stunner.editor.StunnerRuntimeEditorQualifier;
import org.kie.stunner.editor.example.ExampleDefinitionSet;
import org.kie.stunner.editor.example.Rectangle;
import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;
import org.kie.workbench.common.stunner.core.client.api.JsWindow;

@JsType
public class JsDomainInitializer {

    @JsIgnore
    private DomainInitializer domainInitializer;

    public static JsDomainInitializer build(DomainInitializer i) {
        JsDomainInitializer initializer = new JsDomainInitializer();
        initializer.domainInitializer = i;
        org.kie.stunner.editor.core.JsWindow.domainInitializer = initializer;
        return initializer;
    }

    public JsDomainInitializer() {
    }

    public JsDomainInitializer initialize() {
        domainInitializer.initializeDomainQualifier(new StunnerRuntimeEditorQualifier() {
            @Override
            public Class<? extends Annotation> annotationType() {
                return StunnerRuntimeEditorQualifier.class;
            }
        });

        if (false) {
            this
                    .initializeDefinitionSet(new ExampleDefinitionSet())
                    .initializeDefinitionsField("definitions")
                    .initializeCategory(Rectangle.class.getName(), "CATEGORY_SHAPES")
                    .initializeLabels(Rectangle.class.getName(), "LABEL_SHAPE");
        }

        return this;
    }

    public JsDomainInitializer initializeDefinitionSet(Object definitionSet) {
        domainInitializer.initializeDefinitionSet(definitionSet);
        return this;
    }

    public JsDomainInitializer initializeDefinitionsField(String definitionsField) {
        domainInitializer.initializeDefinitionsField(definitionsField);
        return this;
    }

    public JsDomainInitializer initializeCategory(String definitionId, String category) {
        // TODO: Delegate call to domainInitializer instead.
        JsWindow.editor.definitions.initializeCategory(definitionId, category);
        return this;
    }

    public JsDomainInitializer initializeLabels(String definitionId, String... definitionLabels) {
        // TODO: Delegate call to domainInitializer instead.
        JsWindow.editor.definitions.initializeLabels(definitionId, definitionLabels);
        return this;
    }
}
