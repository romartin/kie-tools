package org.kie.stunner.editor;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.google.gwt.user.client.ui.IsWidget;
import elemental2.dom.DomGlobal;
import elemental2.promise.IThenable;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerWindow;
import org.kie.workbench.common.stunner.client.widgets.editor.StunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.uberfire.client.promise.Promises;
import org.uberfire.mvp.PlaceRequest;
import org.uberfire.workbench.model.bridge.Notification;

import static org.kie.workbench.common.stunner.core.definition.adapter.binding.BindableAdapterUtils.getDefinitionSetId;

@ApplicationScoped
public class StunnerJSEditor {

    public static final String EDITOR_ID = "StunnerJSEditor";

    @Inject
    private Promises promises;

    @Inject
    private StunnerEditor stunnerEditor;

    @Inject
    private StunnerJsDomainInitializer workflowDomainInitializer;

    @Inject
    private StunnerJsDiagramService diagramService;

    public void onStartup(PlaceRequest place) {
        workflowDomainInitializer.initialize();

        stunnerEditor
                .setReadOnly(false)
                .initialize(workflowDomainInitializer.getDomainInitializer());

        JsStunnerWindow.editor.domainInitializer.injectScript(StunnerJsDomainInitializerBundle.INSTANCE.initialize().getText());
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
        return promises.create((success, failure) -> {
            diagramService.parse(getDefinitionSetId(StunnerJsDefinitionSet.class), "someRawContent")
                    .then(diagram -> {
                        stunnerEditor.close().open(diagram, new SessionPresenter.SessionPresenterCallback() {
                            @Override
                            public void onSuccess() {
                                success.onInvoke((Void) null);
                            }

                            @Override
                            public void onError(ClientRuntimeError error) {
                                stunnerEditor.handleError(error);
                                DomGlobal.console.error(error);
                                success.onInvoke((Void) null);
                            }
                        });
                        return null;
                    }, (IThenable.ThenOnRejectedCallbackFn<Object>) error -> {
                        DomGlobal.console.error(error);
                        success.onInvoke((Void) null);
                        return null;
                    });
        });
    }

    public Promise<String> getContent() {
        Diagram diagram = stunnerEditor.getCanvasHandler().getDiagram();
        String result = diagramService.format(diagram);
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
