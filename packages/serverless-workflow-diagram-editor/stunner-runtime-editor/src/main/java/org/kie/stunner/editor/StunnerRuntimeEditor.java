package org.kie.stunner.editor;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.google.gwt.user.client.ui.IsWidget;
import elemental2.dom.DomGlobal;
import elemental2.promise.Promise;
import org.kie.stunner.editor.core.JsStunnerCommands;
import org.kie.stunner.editor.example.ExampleDomainInitializer;
import org.kie.stunner.editor.example.ExampleParser;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.client.api.DomainInitializer;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandFactory;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.Metadata;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.uberfire.backend.vfs.Path;
import org.uberfire.backend.vfs.PathFactory;
import org.uberfire.client.promise.Promises;
import org.uberfire.mvp.PlaceRequest;
import org.uberfire.workbench.model.bridge.Notification;

@ApplicationScoped
public class StunnerRuntimeEditor {

    public static final String EDITOR_ID = "StunnerRuntimeEditor";

    @Inject
    private Promises promises;

    @Inject
    private StunnerEditor stunnerEditor;

    @Inject
    private DomainInitializer domainInitializer;

    @Inject
    private ExampleDomainInitializer exampleDomainInitializer;

    @Inject
    private ExampleParser parser;

    public void onStartup(PlaceRequest place) {
        stunnerEditor.setReadOnly(true);
        initializeDomain();
    }

    // TODO: Move to stunner core.
    private void initializeDomain() {
        exampleDomainInitializer.initialize();
        // TODO JsDomainInitializer.build(domainInitializer).initialize();
    }

    public void onOpen() {
    }

    public void onClose() {
        close();
    }

    void close() {
        stunnerEditor.close();
    }

    public Promise<Void> setContent(final String path, final String value) {
        Diagram diagram = parser.parse(value);
        return promises.create((success, failure) -> {
            stunnerEditor.close().open(diagram, new SessionPresenter.SessionPresenterCallback() {
                @Override
                public void onSuccess() {
                    updateMetadata();
                    initCustomJsAPIs();
                    success.onInvoke((Void) null);
                }

                @Override
                public void onError(ClientRuntimeError error) {
                    stunnerEditor.handleError(error);
                    DomGlobal.console.error(error);
                    success.onInvoke((Void) null);
                }
            });
        });
    }

    @Inject
    private CanvasCommandFactory commandFactory;
    @Inject
    private NodeFactory nodeFactory;
    @Inject
    private EdgeFactory edgeFactory;

    // TODO: Move to stunner core.
    private void initCustomJsAPIs() {
        JsStunnerCommands.build(commandFactory, nodeFactory, edgeFactory);
    }

    private void updateMetadata() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        Metadata metadata = diagram.getMetadata();
        String title = metadata.getTitle();
        Path path = PathFactory.newPath(title, "/" + title + ".stunner");
        metadata.setPath(path);
    }

    public Promise<String> getContent() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        String result = parser.format(diagram);
        return promises.resolve(result);
    }

    // TODO
    public Promise<Void> selectStateByName(final String name) {
        return null;
    }

    // TODO
    public Promise<String> getPreview() {
        getContent().then(s -> {
            DomGlobal.console.log(s);
            return null;
        });
        return promises.resolve("");
    }

    // TODO
    public Promise validate() {
        return Promise.resolve(new Notification[0]);
    }

    public IsWidget asWidget() {
        return stunnerEditor.getView();
    }
}
