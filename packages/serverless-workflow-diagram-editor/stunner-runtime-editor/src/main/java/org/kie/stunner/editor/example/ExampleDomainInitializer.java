package org.kie.stunner.editor.example;

import java.lang.annotation.Annotation;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.kie.stunner.editor.StunnerRuntimeEditorQualifier;
import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;

@ApplicationScoped
public class ExampleDomainInitializer {

    @Inject
    private DomainInitializer domainInitializer;

    public static final String CATEGORY_SHAPES = "Shapes";
    public static final String LABEL_SHAPE = "shape";

    public void initialize() {
        domainInitializer
                .initializeDefinitionSet(new ExampleDefinitionSet())
                .initializeDefinitionsField("definitions")
                .initializeDomainQualifier(new StunnerRuntimeEditorQualifier() {
                    @Override
                    public Class<? extends Annotation> annotationType() {
                        return StunnerRuntimeEditorQualifier.class;
                    }
                })
                .initializeCategory(Rectangle.class, CATEGORY_SHAPES)
                .initializeLabels(Rectangle.class, LABEL_SHAPE);
    }
}
