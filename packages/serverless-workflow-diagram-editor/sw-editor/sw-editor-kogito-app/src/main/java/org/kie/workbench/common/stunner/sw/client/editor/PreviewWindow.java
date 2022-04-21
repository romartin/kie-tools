/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.sw.client.editor;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.google.gwt.dom.client.Style;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.RootPanel;
import elemental2.dom.DomGlobal;
import org.jboss.errai.ioc.client.api.ManagedInstance;
import org.kie.workbench.common.stunner.client.widgets.canvas.PreviewLienzoPanel;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionDiagramPreview;
import org.kie.workbench.common.stunner.client.widgets.presenters.session.SessionViewer;
import org.kie.workbench.common.stunner.core.client.api.SessionManager;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.client.session.ClientSession;
import org.kie.workbench.common.stunner.core.client.session.impl.AbstractSession;
import org.kie.workbench.common.stunner.core.diagram.Diagram;

// TODO: This is just a PoC.
@ApplicationScoped
public class PreviewWindow {

    @Inject
    private SessionManager sessionManager;
    @Inject
    private ManagedInstance<SessionDiagramPreview<AbstractSession>> sessionPreviews;
    private SessionDiagramPreview<AbstractSession> previewWidget;

    public static final int PREVIEW_WIDTH = PreviewLienzoPanel.DEFAULT_WIDTH;
    public static final int PREVIEW_HEIGHT = PreviewLienzoPanel.DEFAULT_HEIGHT;

    private FlowPanel previewRoot;

    public void show(double x, double y) {
        ClientSession session = sessionManager.getCurrentSession();
        if (session instanceof AbstractSession) {
            if (null != previewWidget) {
                close();
            }
            previewWidget = sessionPreviews.get();
            previewWidget.open((AbstractSession) session,
                               new SessionViewer.SessionViewerCallback<Diagram>() {
                                   @Override
                                   public void afterCanvasInitialized() {

                                   }

                                   @Override
                                   public void onSuccess() {
                                       previewWidget.scale(PREVIEW_WIDTH, PREVIEW_HEIGHT);
                                       addWidget(previewWidget.getView(), x, y);
                                   }

                                   @Override
                                   public void onError(final ClientRuntimeError error) {
                                       showError(error);
                                   }
                               });
        }
    }

    public void setVisible(boolean visible) {
        if (null != previewRoot) {
            previewRoot.setVisible(visible);
        }
    }

    public boolean isVisible() {
        return null != previewRoot && previewRoot.isVisible();
    }

    public void close() {
        deleteWidget();
        if (null != previewWidget) {
            previewWidget.destroy();
            sessionPreviews.destroy(previewWidget);
            previewWidget = null;
        }
    }

    public boolean isClosed() {
        return null == previewRoot;
    }

    public void destroy() {
        // TODO: CDI & class state.
    }

    private void addWidget(IsWidget widget, double x, double y) {
        deleteWidget();
        previewRoot = new FlowPanel();
        Style style = previewRoot.getElement().getStyle();
        style.setPosition(Style.Position.ABSOLUTE);
        style.setTop(y, Style.Unit.PX);
        style.setLeft(x, Style.Unit.PX);
        RootPanel.get().add(previewRoot);
        previewRoot.add(widget);
    }

    private void deleteWidget() {
        if (null != previewRoot) {
            previewRoot.removeFromParent();
            previewRoot = null;
        }
    }

    private static void showError(final ClientRuntimeError error) {
        final String s = error.toString();
        DomGlobal.console.error(s);
    }
}
