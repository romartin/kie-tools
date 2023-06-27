/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
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

package org.kie.workbench.common.stunner.client.lienzo.components.toolbox.actions;

import java.util.HashMap;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.ait.lienzo.client.core.shape.Group;
import com.ait.lienzo.client.core.shape.toolbox.grid.FixedLayoutGrid;
import com.ait.lienzo.client.core.shape.toolbox.grid.Point2DGrid;
import com.ait.lienzo.client.core.shape.toolbox.items.ButtonGridItem;
import com.ait.lienzo.client.core.shape.toolbox.items.ButtonItem;
import com.ait.lienzo.client.core.shape.toolbox.items.impl.ToolboxFactory;
import com.ait.lienzo.client.core.shape.toolbox.items.tooltip.ToolboxTextTooltip;
import com.ait.lienzo.shared.core.types.Direction;
import elemental2.dom.DomGlobal;
import org.kie.workbench.common.stunner.client.lienzo.components.glyph.LienzoGlyphRenderers;
import org.kie.workbench.common.stunner.core.client.api.JsWindow;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.components.toolbox.actions.ActionsToolbox;
import org.kie.workbench.common.stunner.core.client.components.toolbox.actions.ActionsToolboxView;
import org.kie.workbench.common.stunner.core.client.components.toolbox.actions.GroupActionsToolbox;
import org.kie.workbench.common.stunner.core.client.components.toolbox.actions.GroupedActionsToolbox;
import org.kie.workbench.common.stunner.core.client.components.toolbox.actions.ToolboxAction;
import org.kie.workbench.common.stunner.core.definition.shape.Glyph;

@Dependent
@GroupActionsToolbox
public class GroupActionsToolboxView
        extends AbstractActionsToolboxView<GroupActionsToolboxView> {

    private HashMap<String, ButtonGridItem> gridItems;

    @Inject
    public GroupActionsToolboxView(final LienzoGlyphRenderers glyphRenderers) {
        this(glyphRenderers,
             ToolboxFactory.INSTANCE);
    }

    GroupActionsToolboxView(final LienzoGlyphRenderers glyphRenderers,
                            final ToolboxFactory toolboxFactory) {
        super(glyphRenderers,
              toolboxFactory);
        gridItems = new HashMap<>();
    }

    @Override
    protected void configure(final ActionsToolbox toolbox) {
        configureToolbox((GroupedActionsToolbox) toolbox);
        configureDropDown((GroupedActionsToolbox) toolbox);
    }

    private void addButton(final ButtonItem buttonItem,
                           final String definitionId) {

        final ButtonGridItem gridItem = gridItems.get(definitionId);

        if (null != gridItem) {
            gridItem.add(buttonItem);
        }
    }

    protected static Direction toDirection(String s) {
        return Direction.valueOf(s);
    }

    @Override
    protected ToolboxTextTooltip createTooltip(final ActionsToolbox toolbox) {
        return getToolboxFactory()
                .tooltips()
                .forToolbox(getToolboxView())
                .at(toDirection(JsWindow.editor.configuration.toolbox.tooltipAt))
                .towards(toDirection(JsWindow.editor.configuration.toolbox.tooltipTowards))
                .withText(defaultTextConsumer());
    }

    @Override
    protected double getGlyphSize() {
        DomGlobal.console.error("TOOLBOX VIEW USING CONFIGURATION INSTANCE: " + JsWindow.editor.configuration.toolbox);
        return JsWindow.editor.configuration.toolbox.buttonSizePx;
    }

    @SuppressWarnings("unchecked")
    @Override
    void initButtons(final ActionsToolbox<ActionsToolboxView<?>> toolbox) {
        GroupedActionsToolbox groupedActionsToolbox = (GroupedActionsToolbox) toolbox;
        if (null != groupedActionsToolbox.getNodeActions()) {
            groupedActionsToolbox.getNodeActions().forEach((action, definitionId) -> {
                final ToolboxAction toolboxAction = (ToolboxAction) action;

                final ButtonItem button = addButton(groupedActionsToolbox.getGlyph(toolboxAction),
                                                    groupedActionsToolbox.getTitle(toolboxAction),
                                                    (String) definitionId);
                button.onClick(event -> {
                    onButtonClick(groupedActionsToolbox, toolboxAction, button, event);
                });
            });
        }
    }

    private ButtonItem addButton(final Glyph glyph,
                                 final String title,
                                 final String definitionId) {
        final ButtonItem button =
                toolboxFactory.buttons()
                        .button(renderGlyph(glyph,
                                            getGlyphSize()))
                        .decorate(createDecorator())
                        .tooltip(tooltip.createItem(title))
                        .onMouseEnter(event -> onMouseEnter())
                        .onMouseExit(event -> onMouseExit());

        addButton(button, definitionId);
        return button;
    }

    private void configureToolbox(final GroupedActionsToolbox toolbox) {
        getToolboxView()
                .at(toDirection(JsWindow.editor.configuration.toolbox.toolboxAt))
                .grid(createFixedGrid(JsWindow.editor.configuration.toolbox.buttonSizePx,
                                      JsWindow.editor.configuration.toolbox.buttonPaddingPx,
                                      toolbox.getConnectorSize(),
                                      1));
    }

    private void configureDropDown(final GroupedActionsToolbox toolbox) {
        if (null != toolbox.getConnectorActions()) {
            toolbox.getConnectorActions().forEach((toolboxItem, definitionId) -> {
                Group glyphView = renderGlyph(toolbox.getGlyph((ToolboxAction<AbstractCanvasHandler>) toolboxItem),
                                              JsWindow.editor.configuration.toolbox.buttonSizePx);
                Point2DGrid grid = createFixedGrid(JsWindow.editor.configuration.toolbox.buttonSizePx,
                                                   JsWindow.editor.configuration.toolbox.buttonPaddingPx,
                                                   toolbox.getConnectorSize(),
                                                   toolbox.getNodeSize((String) definitionId));

                ButtonGridItem gridItem =
                        getToolboxFactory()
                                .buttons()
                                .groupDropRight(glyphView)
                                .grid(grid)
                                .decorateGrid(getToolboxFactory()
                                                      .decorators()
                                                      .button()
                                                      .setPadding(JsWindow.editor.configuration.toolbox.decoratorPaddingPx)
                                                      .configure(path -> {
                                                          path.setFillColor("#f2f2f2");
                                                          path.setFillAlpha(0.95);
                                                          path.setStrokeAlpha(0);
                                                      }));

                gridItems.put((String) definitionId, gridItem);
                getToolboxView().add(gridItem);
            });
        }
    }

    private Point2DGrid createFixedGrid(final double buttonSize,
                                        final double padding,
                                        final int rows,
                                        final int cols) {
        return new FixedLayoutGrid(padding,
                                   buttonSize,
                                   toDirection(JsWindow.editor.configuration.toolbox.itemGridTowards),
                                   rows,
                                   cols);
    }
}
