// See kie editors standalone examples at:
// - https://www.npmjs.com/package/@kogito-tooling/kie-editors-standalone?activeTab=readme
// - https://blog.kie.org/2020/10/bpmn-and-dmn-standalone-editors.html
import * as BpmnEditor from "../../node_modules/@kogito-tooling/kie-editors-standalone/dist/bpmn/index.js";
import StunnerEditor from "./editor-api.js";

// window.alert("Sources!");
window.editor = { roger: "RRR" };

window.openBpmnEditor = function () {
  const editor = window.BpmnEditor.open({
    container: document.getElementById("bpmn-editor-container"),
    initialContent: Promise.resolve(""),
    readOnly: false,
  });
};

window.createStunnerEditor = function () {
  let e = new StunnerEditor();
  e.open("someRawContent");
};
