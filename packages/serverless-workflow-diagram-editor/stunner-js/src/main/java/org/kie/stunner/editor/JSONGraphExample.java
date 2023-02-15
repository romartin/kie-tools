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

package org.kie.stunner.editor;

// TODO: Just for local testing... drop this.
public class JSONGraphExample {

    public static String EXAMPLE = "{\n" +
            "  \"nodes\": [\n" +
            "    {\n" +
            "      \"uuid\": \"start\",\n" +
            "      \"definition\": {\n" +
            "        \"id\": \"Start\",\n" +
            "        \"properties\": [\n" +
            "          {\n" +
            "            \"id\": \"name\",\n" +
            "            \"value\": \"start\"\n" +
            "          }\n" +
            "        ]\n" +
            "      },\n" +
            "      \"bounds\": {\n" +
            "        \"ul_x\": 350,\n" +
            "        \"ul_y\": 75,\n" +
            "        \"lr_x\": 351,\n" +
            "        \"lr_y\": 76\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"uuid\": \"activity1\",\n" +
            "      \"definition\": {\n" +
            "        \"id\": \"org.kie.stunner.editor.workflow.Activity\",\n" +
            "        \"properties\": [\n" +
            "          {\n" +
            "            \"id\": \"name\",\n" +
            "            \"value\": \"Activity\"\n" +
            "          }\n" +
            "        ]\n" +
            "      },\n" +
            "      \"bounds\": {\n" +
            "        \"ul_x\": 350,\n" +
            "        \"ul_y\": 120,\n" +
            "        \"lr_x\": 351,\n" +
            "        \"lr_y\": 121\n" +
            "      }\n" +
            "    },\n" +
            "    {\n" +
            "      \"uuid\": \"activity2\",\n" +
            "      \"definition\": {\n" +
            "        \"id\": \"Activity\",\n" +
            "        \"properties\": [\n" +
            "          {\n" +
            "            \"id\": \"name\",\n" +
            "            \"value\": \"activity\"\n" +
            "          }\n" +
            "        ]\n" +
            "      },\n" +
            "      \"bounds\": {\n" +
            "        \"ul_x\": 350,\n" +
            "        \"ul_y\": 300,\n" +
            "        \"lr_x\": 351,\n" +
            "        \"lr_y\": 301\n" +
            "      }\n" +
            "    }\n" +
            "  ],\n" +
            "  \"edges\": [\n" +
            "    {\n" +
            "      \"uuid\": \"activity1_to_activity2\",\n" +
            "      \"sourceUUID\": \"activity1\",\n" +
            "      \"targetUUID\": \"activity2\",\n" +
            "      \"definition\": {\n" +
            "        \"id\": \"Transition\",\n" +
            "        \"properties\": [\n" +
            "          {\n" +
            "            \"id\": \"name\",\n" +
            "            \"value\": \"transition\"\n" +
            "          }\n" +
            "        ]\n" +
            "      }\n" +
            "    }\n" +
            "  ]\n" +
            "}";
}
