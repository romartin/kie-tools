package org.kie.stunner.editor.example;

import javax.enterprise.context.ApplicationScoped;

import org.kie.workbench.common.stunner.client.lienzo.shape.impl.ShapeStateDefaultHandler;
import org.kie.workbench.common.stunner.core.client.shape.MutationContext;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.client.shape.factory.ShapeFactory;
import org.kie.workbench.common.stunner.core.client.shape.impl.AbstractShape;
import org.kie.workbench.common.stunner.core.client.shape.impl.NodeShapeImpl;
import org.kie.workbench.common.stunner.core.client.shape.impl.ShapeStateHandler;
import org.kie.workbench.common.stunner.core.client.shape.view.ShapeView;
import org.kie.workbench.common.stunner.core.definition.shape.Glyph;
import org.kie.workbench.common.stunner.core.definition.shape.ShapeGlyph;
import org.kie.workbench.common.stunner.core.graph.Element;

@ApplicationScoped
public class ExampleShapeFactory implements ShapeFactory<Object, Shape> {

    @Override
    public Shape newShape(Object instance) {
        if (instance instanceof Rectangle) {
            RectangleShapeView view = new RectangleShapeView();
            return new NodeShapeImpl(new AbstractShape() {

                private final ShapeStateDefaultHandler shapeStateHandler = new ShapeStateDefaultHandler()
                        .setBorderShape((() -> view))
                        .setBackgroundShape(() -> view);

                @Override
                public ShapeStateHandler getShapeStateHandler() {
                    return shapeStateHandler;
                }

                @Override
                public void setUUID(String uuid) {
                    view.setUUID(uuid);
                }

                @Override
                public String getUUID() {
                    return view.getUUID();
                }

                @Override
                public ShapeView getShapeView() {
                    return view;
                }
            }) {
                @Override
                public void applyTitle(String title, Element element, MutationContext mutationContext) {
                    super.applyTitle(title, element, mutationContext);
                    view.initializeTitle(title);
                }
            };
        }
        return null;
    }

    @Override
    public Glyph getGlyph(String definitionId) {
        ShapeGlyph glyph = ShapeGlyph.create();
        glyph.setDefinitionId(definitionId);
        glyph.setFactorySupplier(() -> this);
        return glyph;
    }
}
