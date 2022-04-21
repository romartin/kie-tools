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

import javax.enterprise.context.Dependent;
import javax.enterprise.event.Observes;
import javax.enterprise.inject.Specializes;
import javax.inject.Inject;

import com.google.gwt.user.client.ui.IsWidget;
import org.kie.workbench.common.stunner.client.lienzo.components.mediators.ZoomLevelSelector;
import org.kie.workbench.common.stunner.client.lienzo.components.mediators.ZoomLevelSelectorPresenter;
import org.kie.workbench.common.stunner.core.client.components.views.FloatingView;
import org.kie.workbench.common.stunner.core.client.i18n.ClientTranslationService;

// TODO: This is just a PoC.
@Specializes
@Dependent
public class CustomZoomLevelSelectorPresenter extends ZoomLevelSelectorPresenter {

    public static boolean isResetCustomized = false;

    @Inject
    public CustomZoomLevelSelectorPresenter(ClientTranslationService translationService, FloatingView<IsWidget> floatingView, ZoomLevelSelector selector) {
        super(translationService, floatingView, selector);
    }

    @Override
    public void reset() {
        if (!isResetCustomized) {
            super.reset();
        } else {
            switchPreview();
        }
    }

    @Inject
    private PreviewWindow previewWindow;

    public void setVisible(boolean visible) {
        if (visible) {
            if (previewWindow.isClosed()) {
                initPreview();
            }
            if (!previewWindow.isVisible()) {
                previewWindow.setVisible(true);
            }
        } else {
            previewWindow.setVisible(false);
        }
    }

    public void onShowPreviewEvent(@Observes ShowPreviewEvent event) {
        setVisible(true);
    }

    public void onHidePreviewEvent(@Observes HidePreviewEvent event) {
        setVisible(false);
    }

    private void switchPreview() {
        setVisible(!previewWindow.isVisible());
    }

    private void initPreview() {
        int clientTop = getSelectorElement().clientTop;
        int clientLeft = getSelectorElement().clientLeft;
        // TODO: Manage properly pixel size.
        previewWindow.show(clientLeft, clientTop);
    }

    private void closePreview() {
        previewWindow.close();
    }
}
