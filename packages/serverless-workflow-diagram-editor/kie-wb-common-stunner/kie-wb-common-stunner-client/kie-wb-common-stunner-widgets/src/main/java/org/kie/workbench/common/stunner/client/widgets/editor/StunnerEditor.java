/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.kie.workbench.common.stunner.client.widgets.editor;

import java.util.Arrays;
import java.util.function.Consumer;

import javax.annotation.PreDestroy;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.LienzoBoundsPanel;
import com.google.gwt.core.client.JavaScriptException;
import com.google.gwt.user.client.ui.IsWidget;
import org.jboss.errai.ioc.client.api.ManagedInstance;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoCanvas;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoPanel;
import org.kie.workbench.common.stunner.client.lienzo.util.StunnerStateApplier;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerEditor;
import org.kie.workbench.common.stunner.client.widgets.api.JsStunnerWindow;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionDiagramPresenter;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionPresenter;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.impl.SessionEditorPresenter;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.impl.SessionViewerPresenter;
import org.kie.workbench.common.stunner.core.api.DomainInitializer;
import org.kie.workbench.common.stunner.core.api.JsDefinitionManager;
import org.kie.workbench.common.stunner.core.api.JsDomainInitializer;
import org.kie.workbench.common.stunner.core.client.api.JsStunnerCommands;
import org.kie.workbench.common.stunner.core.client.api.JsStunnerSession;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvas;
import org.kie.workbench.common.stunner.core.client.canvas.CanvasHandler;
import org.kie.workbench.common.stunner.core.client.canvas.controls.AlertsControl;
import org.kie.workbench.common.stunner.core.client.command.CanvasCommandFactory;
import org.kie.workbench.common.stunner.core.client.i18n.ClientTranslationService;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.session.ClientSession;
import org.kie.workbench.common.stunner.core.client.session.impl.AbstractSession;
import org.kie.workbench.common.stunner.core.client.session.impl.EditorSession;
import org.kie.workbench.common.stunner.core.client.session.impl.ViewerSession;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.definition.exception.DefinitionNotFoundException;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.diagram.Diagram;
import org.kie.workbench.common.stunner.core.diagram.DiagramParsingException;
import org.kie.workbench.common.stunner.core.factory.graph.EdgeFactory;
import org.kie.workbench.common.stunner.core.factory.graph.NodeFactory;
import org.kie.workbench.common.stunner.core.i18n.CoreTranslationMessages;
import org.kie.workbench.common.widgets.client.errorpage.ErrorPage;

@Dependent
public class StunnerEditor {

    private final ManagedInstance<SessionEditorPresenter<EditorSession>> editorSessionPresenterInstances;
    private final ManagedInstance<SessionViewerPresenter<ViewerSession>> viewerSessionPresenterInstances;
    private final ClientTranslationService translationService;
    private final StunnerEditorView view;
    private final ErrorPage errorPage;
    private boolean hasErrors;

    private SessionDiagramPresenter diagramPresenter;
    private boolean isReadOnly;
    private Consumer<DiagramParsingException> parsingExceptionProcessor;
    private Consumer<Throwable> exceptionProcessor;
    private AlertsControl<AbstractCanvas> alertsControl;

    @Inject
    public StunnerEditor(ManagedInstance<SessionEditorPresenter<EditorSession>> editorSessionPresenterInstances,
                         ManagedInstance<SessionViewerPresenter<ViewerSession>> viewerSessionPresenterInstances,
                         ClientTranslationService translationService,
                         StunnerEditorView view,
                         ErrorPage errorPage) {
        this.editorSessionPresenterInstances = editorSessionPresenterInstances;
        this.viewerSessionPresenterInstances = viewerSessionPresenterInstances;
        this.translationService = translationService;
        this.isReadOnly = false;
        this.view = view;
        this.errorPage = errorPage;
        this.parsingExceptionProcessor = e -> {
        };
        this.exceptionProcessor = e -> {
        };
    }

    @Inject
    JsDefinitionSetAdapter jsDefinitionSetAdapter;
    @Inject
    JsDefinitionAdapter jsDefinitionAdapter;
    @Inject
    JsPropertyAdapter jsPropertyAdapter;
    @Inject
    JsRuleAdapter jsRuleAdapter;

    public StunnerEditor initialize(DomainInitializer domainInitializer) {
        JsStunnerWindow.editor = new JsStunnerEditor();
        JsStunnerWindow.editor.definitions = JsDefinitionManager.build(jsDefinitionSetAdapter,
                                                                       jsDefinitionAdapter,
                                                                       jsPropertyAdapter,
                                                                       jsRuleAdapter);
        JsStunnerWindow.editor.domainInitializer = JsDomainInitializer.build(JsStunnerWindow.editor.definitions,
                                                                             domainInitializer);
        return this;
    }

    public StunnerEditor setReadOnly(boolean readOnly) {
        isReadOnly = readOnly;
        return this;
    }

    public StunnerEditor setParsingExceptionProcessor(Consumer<DiagramParsingException> parsingExceptionProcessor) {
        this.parsingExceptionProcessor = parsingExceptionProcessor;
        return this;
    }

    public StunnerEditor setExceptionProcessor(Consumer<Throwable> exceptionProcessor) {
        this.exceptionProcessor = exceptionProcessor;
        return this;
    }

    @SuppressWarnings("all")
    public void open(final Diagram diagram,
                     final SessionPresenter.SessionPresenterCallback callback) {
        if (isClosed()) {
            if (!isReadOnly) {
                diagramPresenter = editorSessionPresenterInstances.get();
            } else {
                diagramPresenter = viewerSessionPresenterInstances.get();
            }
            diagramPresenter.displayNotifications(type -> true);
            diagramPresenter.withPalette(!isReadOnly);
            diagramPresenter.withToolbar(false);
            view.setWidget(diagramPresenter.getView());
        }
        diagramPresenter.open(diagram, new SessionPresenter.SessionPresenterCallback() {
            @Override
            public void onOpen(Diagram diagram) {
                callback.onOpen(diagram);
            }

            @Override
            public void afterSessionOpened() {
                callback.afterSessionOpened();
            }

            @Override
            public void afterCanvasInitialized() {
                ClientSession session = getSession();
                if (isReadOnly) {
                    alertsControl = ((ViewerSession) session).getAlertsControl();
                } else {
                    alertsControl = ((EditorSession) session).getAlertsControl();
                }
                callback.afterCanvasInitialized();
            }

            @Override
            public void onSuccess() {
                alertsControl.clear();
                initializeJsSession((AbstractSession) getSession());
                callback.onSuccess();
            }

            @Override
            public void onError(ClientRuntimeError error) {
                handleError(error);
                callback.onError(error);
            }
        });
    }

    @Inject
    private CanvasCommandFactory commandFactory;
    @Inject
    private NodeFactory nodeFactory;
    @Inject
    private EdgeFactory edgeFactory;

    @SuppressWarnings("all")
    private void initializeJsSession(AbstractSession session) {
        JsStunnerSession jssession = new JsStunnerSession(session, JsStunnerWindow.editor.definitions);
        JsStunnerWindow.editor.session = jssession;
        JsStunnerCommands commands = new JsStunnerCommands(commandFactory, nodeFactory, edgeFactory, jssession);
        JsStunnerWindow.editor.commands = commands;
        initializeJsCanvas(session);
    }

    @SuppressWarnings("all")
    private void initializeJsCanvas(AbstractSession session) {
        final LienzoCanvas canvas = (LienzoCanvas) session.getCanvasHandler().getCanvas();
        final LienzoPanel panel = (LienzoPanel) canvas.getView().getPanel();
        final LienzoBoundsPanel lienzoPanel = panel.getView();
        JsCanvas jsCanvas = new JsCanvas(lienzoPanel, lienzoPanel.getLayer(), new StunnerStateApplier() {
            @Override
            public Shape getShape(String uuid) {
                return canvas.getShape(uuid);
            }
        });
        JsStunnerWindow.editor.canvas = jsCanvas;
        JsStunnerWindow.canvas = jsCanvas;
    }

    public int getCurrentContentHash() {
        if (null == getSession()) {
            return 0;
        }
        if (null == getCanvasHandler().getDiagram()) {
            return 0;
        }
        return getCanvasHandler().getDiagram().hashCode();
    }

    public void handleError(final ClientRuntimeError error) {
        final Throwable throwable = error.getThrowable();
        String message;
        if (throwable instanceof DiagramParsingException) {
            final DiagramParsingException diagramParsingException = (DiagramParsingException) throwable;
            parsingExceptionProcessor.accept(diagramParsingException);
            JavaScriptException javaScriptException = (JavaScriptException) diagramParsingException.getCause();
            if (javaScriptException != null) {
                message = error.getMessage() + "\r\n";
                message += javaScriptException.getLocalizedMessage();
            } else {
                final String title = translationService.getValue(CoreTranslationMessages.DIAGRAM_LOAD_FAIL_PARSING);
                message = buildErrorMessage(error, throwable, title);
            }
        } else if (throwable instanceof DefinitionNotFoundException) {
            final DefinitionNotFoundException dnfe = (DefinitionNotFoundException) throwable;
            exceptionProcessor.accept(dnfe);
            message = translationService.getValue(CoreTranslationMessages.DIAGRAM_LOAD_FAIL_UNSUPPORTED_ELEMENTS) + "\r\n";
            message += dnfe.getDefinitionId();
        } else {
            exceptionProcessor.accept(error.getThrowable());
            final String title = translationService.getValue(CoreTranslationMessages.DIAGRAM_LOAD_FAIL_GENERIC);
            message = buildErrorMessage(error, throwable, title);
        }

        hasErrors = true;
        if ((diagramPresenter != null) &&
                (diagramPresenter.getView() != null)) {
            addError(message);
        } else {
            view.setWidget(errorPage);
        }
    }

    public StunnerEditor close() {
        if (!isClosed()) {
            diagramPresenter.destroy();
            diagramPresenter = null;
            alertsControl = null;
            editorSessionPresenterInstances.destroyAll();
            viewerSessionPresenterInstances.destroyAll();
            view.clear();
        }
        return this;
    }

    public boolean isClosed() {
        return null == diagramPresenter;
    }

    public boolean isReadOnly() {
        return isReadOnly;
    }

    public CanvasHandler getCanvasHandler() {
        return (CanvasHandler) diagramPresenter.getHandler();
    }

    public Diagram getDiagram() {
        return getCanvasHandler().getDiagram();
    }

    public SessionDiagramPresenter getPresenter() {
        return diagramPresenter;
    }

    public ClientSession getSession() {
        return (ClientSession) diagramPresenter.getInstance();
    }

    public IsWidget getView() {
        return view;
    }

    public boolean hasErrors() {
        return hasErrors;
    }

    public void addMessage(String message) {
        if (!isClosed()) {
            alertsControl.addInfo(message);
        }
    }

    public void addWarning(String message) {
        if (!isClosed()) {
            alertsControl.addWarning(message);
        }
    }

    public void addError(String message) {
        if (!isClosed()) {
            hasErrors = true;
            alertsControl.addError(message);
        }
    }

    public void clearAlerts() {
        if (!isClosed()) {
            hasErrors = false;
            alertsControl.clear();
        }
    }

    private String buildErrorMessage(ClientRuntimeError error, Throwable throwable, String errorTitle) {
        String message;
        message = errorTitle + "\r\n";
        if (throwable != null) {
            message += throwable + "\r\n";
            message += "\r\n";
            message += translationService.getValue(CoreTranslationMessages.DIAGRAM_LOAD_FAIL_STACK_TRACE);
            message += Arrays.toString(throwable.getStackTrace());
        } else {
            message += error.toString();
        }
        return message;
    }

    @PreDestroy
    public void destroy() {
        close();
    }
}
