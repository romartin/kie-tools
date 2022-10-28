let input_greetings =
  "{\n" +
  '  "id": "jsongreet",\n' +
  '  "version": "1.0",\n' +
  '  "specVersion": "0.8",\n' +
  '  "name": "Greeting workflow",\n' +
  '  "expressionLang": "jsonpath",\n' +
  '  "description": "JSON based greeting workflow",\n' +
  '  "start": "HandleNewGreet",\n' +
  '  "functions": [\n' +
  "    {\n" +
  '      "name": "printMessage",\n' +
  '      "type": "custom",\n' +
  '      "operation": "sysout"\n' +
  "    }\n" +
  "  ],\n" +
  '  "events": [\n' +
  "    {\n" +
  '      "name": "NewGreetEvent",\n' +
  '      "source": "greetEvent",\n' +
  '      "type": "dev.knative.kafka.event"\n' +
  "    }\n" +
  "  ],\n" +
  '  "states": [\n' +
  "    {\n" +
  '      "name": "HandleNewGreet",\n' +
  '      "type": "event",\n' +
  '      "onEvents": [\n' +
  "        {\n" +
  '          "eventRefs": ["NewGreetEvent"],\n' +
  '          "actions": []\n' +
  "        }\n" +
  "      ],\n" +
  '      "transition": "ChooseOnLanguage"\n' +
  "    },\n" +
  "    {\n" +
  '      "name": "ChooseOnLanguage",\n' +
  '      "type": "switch",\n' +
  '      "dataConditions": [\n' +
  "        {\n" +
  '          "condition": "\'English\'",\n' +
  '          "transition": "GreetInEnglish"\n' +
  "        },\n" +
  "        {\n" +
  '          "condition": "\'Spanish\'",\n' +
  '          "transition": "GreetInSpanish"\n' +
  "        },\n" +
  "        {\n" +
  '          "condition": "\'Portuguese\'",\n' +
  '          "transition": "GreetInPortuguese"\n' +
  "        }\n" +
  "      ],\n" +
  '      "defaultCondition": {\n' +
  '        "transition": "GreetInEnglish"\n' +
  "      }\n" +
  "    },\n" +
  "    {\n" +
  '      "name": "GreetInEnglish",\n' +
  '      "type": "inject",\n' +
  '      "data": {\n' +
  '        "greeting": "Hello from JSON Workflow, "\n' +
  "      },\n" +
  '      "transition": "GreetPerson"\n' +
  "    },\n" +
  "    {\n" +
  '      "name": "GreetInSpanish",\n' +
  '      "type": "inject",\n' +
  '      "data": {\n' +
  '        "greeting": "Saludos desde JSON Workflow, "\n' +
  "      },\n" +
  '      "transition": "GreetPerson"\n' +
  "    },\n" +
  "    {\n" +
  '      "name": "GreetInPortuguese",\n' +
  '      "type": "inject",\n' +
  '      "data": {\n' +
  '        "greeting": "Saudações de JSON Workflow, "\n' +
  "      },\n" +
  '      "transition": "GreetPerson"\n' +
  "    },\n" +
  "    {\n" +
  '      "name": "GreetPerson",\n' +
  '      "type": "operation",\n' +
  '      "actions": [\n' +
  "        {\n" +
  '          "name": "greetAction",\n' +
  '          "functionRef": {\n' +
  '            "refName": "printMessage",\n' +
  '            "arguments": {\n' +
  '              "message": "$.greeting $.name"\n' +
  "            }\n" +
  "          }\n" +
  "        }\n" +
  "      ],\n" +
  '      "end": {\n' +
  '        "terminate": true\n' +
  "      }\n" +
  "    }\n" +
  "  ]\n" +
  "}\n";

const STATE_NEW_GREET = "HandleNewGreet";
const STATE_CHOOSE_LANG = "ChooseOnLanguage";
const STATE_GREET_EN = "GreetInEnglish";
const STATE_GREET_ES = "GreetInSpanish";
const STATE_GREET_PT = "GreetInPortuguese";
const STATE_GREET = "GreetPerson";
const STATES = [STATE_NEW_GREET, STATE_CHOOSE_LANG, STATE_GREET_EN, STATE_GREET_ES, STATE_GREET_PT, STATE_GREET];

let kogito_window = window.frames.editorFrame.contentWindow;
let kogito_editor = kogito_window.gwtEditorBeans.get("SWDiagramEditor").get();

let editor;
let session;
let canvas;

function kogito_editor_init_api() {
  setTimeout(function () {
    editor = kogito_window.editor;
    session = editor.session;
    canvas = editor.session.canvas;
  }, 150);
}

kogito_editor.setContent("", input_greetings).then(kogito_editor_init_api());
