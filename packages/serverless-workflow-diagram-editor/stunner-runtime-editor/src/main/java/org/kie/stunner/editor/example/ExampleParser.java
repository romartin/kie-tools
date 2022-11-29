package org.kie.stunner.editor.example;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.core.Global;
import elemental2.core.JsArray;
import org.kie.workbench.common.stunner.core.api.DefinitionManager;
import org.kie.workbench.common.stunner.core.api.FactoryManager;
import org.kie.workbench.common.stunner.core.client.api.ShapeManager;
import org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.diagram.MetadataImpl;
import org.kie.workbench.common.stunner.core.graph.Graph;
import org.kie.workbench.common.stunner.core.graph.Node;
import org.kie.workbench.common.stunner.core.graph.content.Bounds;
import org.kie.workbench.common.stunner.core.graph.content.view.ViewImpl;
import org.kie.workbench.common.stunner.core.graph.impl.NodeImpl;

@ApplicationScoped
public class ExampleParser {

    @Inject
    private DefinitionManager definitionManager;

    @Inject
    private FactoryManager factoryManager;

    @Inject
    private ShapeManager shapeManager;

    public Diagram parse(String raw) {
        return createExampleDiagram();
    }

    public String format(Diagram diagram) {
        if (true) {
            return "";
        }
        Graph graph = diagram.getGraph();
        Iterable<Node> nodes = graph.nodes();
        JsArray<Node> nodesArray = new JsArray<>();
        nodes.spliterator().forEachRemaining(nodesArray::push);
        return Global.JSON.stringify(nodesArray,
                                     (field, object) -> {
                                         // DomGlobal.console.log("p0: " + field);
                                         //DomGlobal.console.log("object: " + object);
                                         return field.contains("_") ? null : object;
                                     });
    }

    private Diagram createExampleDiagram() {
        final String title = "default";
        final String defSetId = BindableAdapterUtils.getDefinitionSetId(ExampleDefinitionSet.class);
        final Metadata metadata = new MetadataImpl.MetadataImplBuilder(defSetId,
                                                                       definitionManager)
                .build();
        metadata.setTitle(title);
        final Diagram diagram = factoryManager.newDiagram(title,
                                                          defSetId,
                                                          metadata);
        updateClientMetadata(diagram);
        populateDiagram(diagram);
        return diagram;
    }

    private void populateDiagram(final Diagram diagram) {
        Graph graph = diagram.getGraph();
        Rectangle rectangle = new Rectangle();
        Node rectangleNode = new NodeImpl("rectangle");
        rectangleNode.setContent(new ViewImpl<>(rectangle, Bounds.create(0, 0, 250, 90)));
        if (true) {
            graph.addNode(rectangleNode);
        }
    }

    private void updateClientMetadata(final Diagram diagram) {
        final Metadata metadata = diagram.getMetadata();
        if (isEmpty(metadata.getShapeSetId())) {
            final String sId = shapeManager.getDefaultShapeSet(metadata.getDefinitionSetId()).getId();
            metadata.setShapeSetId(sId);
        }
    }

    private static boolean isEmpty(CharSequence str) {
        return null == str || str.length() == 0;
    }
}
