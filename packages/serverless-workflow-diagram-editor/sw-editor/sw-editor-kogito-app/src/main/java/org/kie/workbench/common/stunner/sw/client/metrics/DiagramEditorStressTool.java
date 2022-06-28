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

import java.util.LinkedList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.dom.DomGlobal;
import elemental2.promise.Promise;
import org.kie.workbench.common.stunner.sw.client.editor.DiagramEditor;
import org.kie.workbench.common.stunner.sw.dom.DomTimings;
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
        // int[] iterations = new int[]{ 1, 1, 2, 5 };
        int[] iterations = askForIterations();
        setContentByStatesCount(iterations);
    }

    private int[] askForIterations() {
        String raw = DomGlobal.prompt("State count iterations (comma separated)");
        String[] values = raw.split(",");
        int[] result = new int[values.length];
        for (int i = 0; i < values.length; i++) {
            String value = values[i];
            result[i] = Integer.parseInt(value.trim());
        }
        return result;
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

    private static final String OUT_SET_CONTENT = "SetContent";
    private static final String OUT_SET_CONTENT_COMPLETED = "SetContent COMPLETED";
    private static final String OUT_ITERATION = "ITERATION";
    private static final String OUT_STATES_COUNT = "STATES_COUNT";

    private Promise<Void> setContentByStatesCount(final int i, final int count) {
        return promises.create((success, failure) -> {
            DomGlobal.console.log(OUT_SET_CONTENT + " [i=" + i + ", states_count=" + count + "]");
            DomGlobal.console.log(OUT_ITERATION + ": " + i);
            DomGlobal.console.log(OUT_STATES_COUNT + ": " + count);
            String raw = workflow(count);
            editor
                    .setNewContent("workflow" + i + ".sw", raw)
                    .then(o -> {
                        DomGlobal.console.log(OUT_SET_CONTENT_COMPLETED + " [i=" + i + ", states_count=" + count + "]");
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

    public static void main(String[] args) {
        if (true) {
            printMetricsToCSV(M1);
            return;
        }

        String raw = args[0];
        if (null != raw && raw.trim().length() > 0) {
            printMetricsToCSV(raw);
        } else {
            System.err.println("No argument found.");
        }
    }

    private static void printMetricsToCSV(String raw) {
        raw = raw.replaceAll(DiagramEditorStressTool.class.getSimpleName() + ".java:\\d+", "");
        raw = raw.replaceAll(DomTimings.class.getSimpleName() + ".java:\\d+", "");
        List<StressTimings> sts = new LinkedList<>();
        String[] lines = raw.split("\n");
        StressTimings st = null;
        for (int i = 0; i < lines.length; i++) {
            String line = lines[i].trim();
            if (line.startsWith(OUT_SET_CONTENT_COMPLETED)) {
                sts.add(st);
            } else if (line.startsWith(OUT_SET_CONTENT)) {
                st = new StressTimings();
            } else {
                if (line.startsWith(OUT_ITERATION)) {
                    st.iteration = parseStressTimingIntType(line, OUT_ITERATION);
                }
                if (line.startsWith(OUT_STATES_COUNT)) {
                    st.statesCount = parseStressTimingIntType(line, OUT_STATES_COUNT);
                }
                if (line.startsWith(DomTimings.SWF_VIEWER_E2E)) {
                    st.end2end = parseStressTimingDoubleType(line, DomTimings.SWF_VIEWER_E2E);
                }
                if (line.startsWith(DomTimings.TRANSFORM)) {
                    st.transform = parseStressTimingDoubleType(line, DomTimings.TRANSFORM);
                }
                if (line.startsWith(DomTimings.OPEN)) {
                    st.open = parseStressTimingDoubleType(line, DomTimings.OPEN);
                }
                if (line.startsWith(DomTimings.PARSE)) {
                    st.parse = parseStressTimingDoubleType(line, DomTimings.PARSE);
                }
                if (line.startsWith(DomTimings.UNMARSHALL)) {
                    st.unmarshall = parseStressTimingDoubleType(line, DomTimings.UNMARSHALL);
                }
                if (line.startsWith(DomTimings.AUTOLAYOUT)) {
                    st.autolayout = parseStressTimingDoubleType(line, DomTimings.AUTOLAYOUT);
                }
            }
        }
        if (!sts.isEmpty()) {
            for (StressTimings stressTimings : sts) {
                System.out.println(StressTimings.toCSV(stressTimings));
            }
        }
    }

    private static int parseStressTimingIntType(String line, String label) {
        return Integer.parseInt(parseStressTiming(line, label));
    }

    private static double parseStressTimingDoubleType(String line, String label) {
        return Double.parseDouble(parseStressTiming(line, label));
    }

    private static String parseStressTiming(String line, String label) {
        return line
                .replace(label + " ", "")
                .replace(label + ":", "")
                .replace("ms", "")
                .trim();
    }

    private static class StressTimings {

        private int iteration;
        private int statesCount;
        private double end2end;
        private double transform;
        private double open;
        private double parse;
        private double unmarshall;
        private double autolayout;

        private static String toCSV(StressTimings st) {
            String s = "";
            s += st.iteration + ",";
            s += st.statesCount + ",";
            s += st.end2end + ",";
            s += st.transform + ",";
            s += st.open + ",";
            s += st.parse + ",";
            s += st.unmarshall + ",";
            s += st.autolayout;
            return s;
        }
    }

    public static final String M1 = "SetContent [i=0, states_count=1]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 0\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 1\n" +
            "DomTimings.java:33 PARSE: 7.43603515625 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 21.473876953125 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 371.965087890625 ms\n" +
            "DomTimings.java:33 TRANSFORM: 448.018798828125 ms\n" +
            "DomTimings.java:33 OPEN: 179.156005859375 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 628.505126953125 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=0, states_count=1]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=1, states_count=1]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 1\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 1\n" +
            "DomTimings.java:33 PARSE: 0.781982421875 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 5.663818359375 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 22.745849609375 ms\n" +
            "DomTimings.java:33 TRANSFORM: 30.376220703125 ms\n" +
            "DomTimings.java:33 OPEN: 72.677978515625 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 103.3828125 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=1, states_count=1]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=2, states_count=2]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 2\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 2\n" +
            "DomTimings.java:33 PARSE: 0.41796875 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 4.14306640625 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 19.64599609375 ms\n" +
            "DomTimings.java:33 TRANSFORM: 24.990966796875 ms\n" +
            "DomTimings.java:33 OPEN: 77.8291015625 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 103.18212890625 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=2, states_count=2]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=3, states_count=5]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 3\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 5\n" +
            "DomTimings.java:33 PARSE: 0.59912109375 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 7.426025390625 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 23.759033203125 ms\n" +
            "DomTimings.java:33 TRANSFORM: 32.5029296875 ms\n" +
            "DomTimings.java:33 OPEN: 126.096923828125 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 159.043212890625 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=3, states_count=5]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=4, states_count=10]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 4\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 10\n" +
            "DomTimings.java:33 PARSE: 0.708251953125 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 8.862060546875 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 55.974853515625 ms\n" +
            "DomTimings.java:33 TRANSFORM: 66.324951171875 ms\n" +
            "DomTimings.java:33 OPEN: 175.223876953125 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 242.0048828125 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=4, states_count=10]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=5, states_count=25]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 5\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 25\n" +
            "DomTimings.java:33 PARSE: 1.268798828125 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 26.0009765625 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 51.220947265625 ms\n" +
            "DomTimings.java:33 TRANSFORM: 79.47802734375 ms\n" +
            "DomTimings.java:33 OPEN: 304.370849609375 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 384.237060546875 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=5, states_count=25]\n" +
            "DiagramEditorStressTool.java:88 SetContent [i=6, states_count=50]\n" +
            "DiagramEditorStressTool.java:89 ITERATION: 6\n" +
            "DiagramEditorStressTool.java:90 STATES_COUNT: 50\n" +
            "DomTimings.java:33 PARSE: 1.96875 ms\n" +
            "DomTimings.java:33 UNMARSHALL: 21.591064453125 ms\n" +
            "DomTimings.java:33 AUTOLAYOUT: 101.925048828125 ms\n" +
            "DomTimings.java:33 TRANSFORM: 126.4072265625 ms\n" +
            "DomTimings.java:33 OPEN: 497.78076171875 ms\n" +
            "DomTimings.java:33 SWF_VIEWER_E2E: 624.62890625 ms\n" +
            "DiagramEditorStressTool.java:95 SetContent COMPLETED [i=6, states_count=50]";
}
