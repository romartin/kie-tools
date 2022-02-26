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

package org.kie.workbench.common.stunner.sw.client.editor.popup;

import com.google.gwt.dom.client.Style;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.RootPanel;
import elemental2.dom.DomGlobal;
import org.kie.workbench.common.stunner.client.widgets.canvas.ScrollableLienzoPanel;
import org.kie.workbench.common.stunner.client.widgets.presenters.diagram.DiagramViewer;
import org.kie.workbench.common.stunner.core.client.service.ClientRuntimeError;
import org.kie.workbench.common.stunner.core.diagram.Diagram;

// TODO: Drop?
public abstract class AbstractContainerPopup {

    protected abstract DiagramViewer getViewer();

    protected abstract ScrollableLienzoPanel getCanvasPanel();

    @SuppressWarnings("all")
    public void open(Diagram diagram, double width, double height) {
        log("Opening popup container...");
        attach(width, height);
        getViewer().open(diagram,
                         new DiagramViewer.DiagramViewerCallback<Diagram>() {
                             @Override
                             public void onOpen(Diagram diagram) {
                                 onceOpen(diagram);
                             }

                             @Override
                             public void afterCanvasInitialized() {
                                 onceAfterCanvasInitialized();
                             }

                             @Override
                             public void onSuccess() {
                                 onceOnSuccess(width, height);
                             }

                             @Override
                             public void onError(ClientRuntimeError error) {
                                 onceOnError(error);
                             }
                         });
    }

    protected void onceOpen(Diagram diagram) {
        log("Popup#OnOpen");
    }

    protected void onceAfterCanvasInitialized() {
        log("Popup#afterCanvasInitialized");
    }

    protected void onceOnSuccess(double width, double height) {
        log("Popup#onSuccess");
        // viewer.scale(600, 600);
        ScrollableLienzoPanel panel = getCanvasPanel();
        panel.getView().setPxSize((int) width, (int) height);
        panel.getView().onResize();
        panel.refresh();
    }

    protected void onceOnError(ClientRuntimeError error) {
        error("[ERROR] Popup#onError: " + error.getMessage());
    }

    protected void attach(double width, double height) {
        log("Attaching Popup Container...");
        final AbsolutePanel panel = new AbsolutePanel();
        panel.getElement().getStyle().setPosition(Style.Position.ABSOLUTE);
        panel.getElement().getStyle().setLeft(300, Style.Unit.PX);
        panel.getElement().getStyle().setTop(300, Style.Unit.PX);
        panel.getElement().getStyle().setWidth(width, Style.Unit.PX);
        panel.getElement().getStyle().setHeight(height, Style.Unit.PX);
        panel.getElement().getStyle().setBorderWidth(1, Style.Unit.PX);
        panel.getElement().getStyle().setBorderColor("black");
        panel.getElement().getStyle().setBorderStyle(Style.BorderStyle.SOLID);
        RootPanel.get().add(panel);

        Button close = new Button("Close");
        close.addClickHandler(clickEvent -> {
            getViewer().destroy();
            panel.removeFromParent();
        });
        panel.add(close);

        IsWidget view = getViewer().getView();
        panel.add(view);
    }

    protected static void log(String s) {
        DomGlobal.console.log(s);
    }

    protected static void error(String s) {
        DomGlobal.console.error(s);
    }
}
