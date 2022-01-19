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

package org.kie.workbench.common.stunner.sw.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.kie.workbench.common.stunner.core.util.UUID;
import org.kie.workbench.common.stunner.sw.spec.CNCFWorkflow;

public class MarshallerContext {

    public CNCFWorkflow workflow;
    public Map<String, String> nameToIdBindings;
    public List<String> uuidIndexes;

    public MarshallerContext(CNCFWorkflow workflow) {
        int size = workflow.states.length + 2;
        this.workflow = workflow;
        this.nameToIdBindings = new HashMap<>(size);
        this.uuidIndexes = new ArrayList<>(size);
    }

    public static String generateUUID() {
        return UUID.uuid();
    }

    public String getUUID(String name) {
        String uuid = nameToIdBindings.get(name);
        if (null == uuid) {
            uuid = generateUUID();
            nameToIdBindings.put(name, uuid);
        }
        return uuid;
    }

    public int getStateIndex(String uuid) {
        return uuidIndexes.indexOf(uuid);
    }

    public int getStatesCount() {
        return uuidIndexes.size();
    }

    public void removeStateIndex(String uuid) {
        uuidIndexes.remove(uuid);
    }

    public void addStateIndex(String uuid) {
        uuidIndexes.add(uuid);
    }
}
