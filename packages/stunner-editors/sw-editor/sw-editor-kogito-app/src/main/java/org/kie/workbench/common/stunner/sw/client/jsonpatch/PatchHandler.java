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

package org.kie.workbench.common.stunner.sw.client.jsonpatch;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.dom.DomGlobal;
import org.kie.workbench.common.stunner.core.client.canvas.AbstractCanvasHandler;
import org.kie.workbench.common.stunner.core.client.command.CanvasViolation;
import org.kie.workbench.common.stunner.core.command.Command;
import org.kie.workbench.common.stunner.sw.client.js.JsWindow;
import org.kie.workbench.common.stunner.sw.client.services.CommandRegistryListener;
import org.kie.workbench.common.stunner.sw.marshall.Marshaller;

@ApplicationScoped
public class PatchHandler {

    private final PatchBuilder builder;
    private final CommandRegistryListener commandListener;

    @Inject
    public PatchHandler(PatchBuilder builder,
                        CommandRegistryListener commandListener) {
        this.builder = builder;
        this.commandListener = commandListener;
    }

    public void run() {
        commandListener.setProvider(this::applyPatchForCommand);
    }

    @SuppressWarnings("all")
    private void applyPatchForCommand(AbstractCanvasHandler canvasHandler,
                                      Command<AbstractCanvasHandler, CanvasViolation> command) {
        Patch[] patches = new Patch[0];
        try {
            patches = builder.build(canvasHandler, command);
        } catch (Exception e) {
            DomGlobal.console.error("ERROR building JSON patch: " + (null == e.getCause() ? e.getMessage() : e.getCause().getMessage()));
            patches = new Patch[0];
        }

        String raw = null;
        try {
            if (null != patches && patches.length > 0) {
                raw = Marshaller.stringify(patches);
                DomGlobal.console.log("-> " + raw);
            }
        } catch (Exception e) {
            DomGlobal.console.error("ERROR stringyfing JSON for patch [" + patches[0].toString() + "]: " + (null == e.getCause() ? e.getMessage() : e.getCause().getMessage()));
        }

        try {
            if (null != raw) {
                JsWindow.onJsonChanged(raw);
            }
        } catch (Exception e) {
            DomGlobal.console.error("ERROR applying JSON Patch [" + raw + "]: " + (null == e.getCause() ? e.getMessage() : e.getCause().getMessage()));
        }
    }
}
