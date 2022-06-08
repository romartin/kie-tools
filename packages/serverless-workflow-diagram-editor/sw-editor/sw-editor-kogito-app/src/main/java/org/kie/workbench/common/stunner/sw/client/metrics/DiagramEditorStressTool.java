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

package org.kie.workbench.common.stunner.sw.client.metrics;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.dom.DomGlobal;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.sw.client.editor.DiagramEditor;
import org.uberfire.client.promise.Promises;

@ApplicationScoped
public class DiagramEditorStressTool {

    private final Promises promises;
    private final DiagramEditor editor;

    @Inject
    public DiagramEditorStressTool(Promises promises, DiagramEditor editor) {
        this.promises = promises;
        this.editor = editor;
    }

    public void run() {
        setContentByStatesCount(new int[]{1, 1, 2, 3, 4});
    }

    private void setContentByStatesCount(int[] iterations) {
        DomGlobal.console.log("STRESSING...");
        setContentByStatesCount(iterations, 0);
    }

    private void setContentByStatesCount(int[] iterations, final int index) {
        if (index < iterations.length) {
            final int count = iterations[index];
            setContentByStatesCount(index, count)
                    .then(unused -> {
                        setContentByStatesCount(iterations, index + 1);
                        return null;
                    }, e -> {
                        DomGlobal.console.error("STRESS ERROR during workflow[" + index + "]: " + e);
                        return null;
                    });
        } else {
            DomGlobal.console.log("STRESS COMPLETED");
        }
    }

    private Promise<Void> setContentByStatesCount(final int i, final int count) {
        return promises.create((success, failure) -> {
            DomGlobal.console.log("SetContent [i=" + i + ", count=" + count + "]");
            String raw = workflow(count);
            editor
                    .setNewContent("workflow" + i + ".sw", raw)
                    .then(o -> {
                        DomGlobal.console.log("SetContent COMPLETED [i=" + i + ", count=" + count + "]");
                        editor.onClose();
                        success.onInvoke((Void) null);
                        return null;
                    }, o -> {
                        DomGlobal.console.error("SOME ERROR during SetContent: " + o);
                        failure.onInvoke(o);
                        return null;
                    });
        });
    }

    public static final String WORKFLOW_START = "{\n" +
            " \"id\": \"workflow\",\n" +
            " \"version\": \"1.0\",\n" +
            " \"specVersion\": \"0.8\",\n" +
            " \"name\": \"Workflow\",\n" +
            " \"description\": \"Workflow\",\n" +
            " \"states\": [";

    public static final String WORKFLOW_END = " ]\n" +
            "}";

    public static String workflow(int count) {
        String raw = WORKFLOW_START + injectStates("state", count) + WORKFLOW_END;
        return raw;
    }

    public static String injectStates(String name, int count) {
        String result = "";
        for (int i = 0; i < count; i++) {
            String sname = name + "_" + i;
            boolean isLast = i == (count - 1);
            String transition = !isLast ? name + "_" + (i + 1) : "";
            String state = injectState(sname, transition, isLast);
            if (!isLast) {
                state += ",\n";
            }
            result += state;
        }
        return result;
    }

    public static String injectState(String name,
                                     String transition,
                                     boolean end) {
        return "{\n" +
                "   \"name\": \"" + name + "\",\n" +
                "   \"type\": \"inject\",\n" +
                "   \"transition\": \"" + (null != transition ? transition : "") + "\",\n" +
                "   \"end\": " + end + "\n" +
                "  }";
    }

    /*private static class StressTimings {

        private int count;
        private double end2end;
        private double transform;
        private double open;
        private double parse;
        private double unmarshall;
        private double autolayout;

        private static StressTimings build(int count) {
            StressTimings stressTimings = new StressTimings();
            stressTimings.count = count;
            stressTimings.end2end = DomTimings.getEndTime(DomTimings.SWF_VIEWER_E2E);
            stressTimings.transform = DomTimings.getEndTime(DomTimings.TRANSFORM);
            stressTimings.open = DomTimings.getEndTime(DomTimings.OPEN);
            stressTimings.parse = DomTimings.getEndTime(DomTimings.PARSE);
            stressTimings.unmarshall = DomTimings.getEndTime(DomTimings.UNMARSHALL);
            stressTimings.autolayout = DomTimings.getEndTime(DomTimings.AUTOLAYOUT);
            return stressTimings;
        }

        private static String logCSV(int iteration, StressTimings st) {
            String s = "";
            s += iteration + ",";
            s += st.count + ",";
            s += st.end2end + ",";
            s += st.transform + ",";
            s += st.open + ",";
            s += st.parse + ",";
            s += st.unmarshall + ",";
            s += st.autolayout;
            s += "\n";
            return s;
        }

        private static String logStressTiming(int iteration, StressTimings st) {
            String s = "[>" + iteration + "]" + "=====================================================================\n";
            s += "COUNT:" + st.count + "\n";
            s += "E2E:" + st.end2end + "\n";
            s += "TRANSF:" + st.transform + "\n";
            s += "OPEN:" + st.open + "\n";
            s += "PARSE:" + st.parse + "\n";
            s += "UNMARHSALL:" + st.unmarshall + "\n";
            s += "AUTOLAYOUT:" + st.autolayout + "\n";
            s += "[<" + iteration + "]" + "=====================================================================\n";
            return s;
        }

        private static void log(StressTimings[] stressTimings) {
            String s = "\n********************** STRESS RESULTS: ********************** \n";
            for (int i = 0; i < stressTimings.length; i++) {
                StressTimings st = stressTimings[i];
                // s += logStressTiming(i, st);
                s += logCSV(i, st);
            }
            DomGlobal.console.log(s);
        }
    }*/
}
