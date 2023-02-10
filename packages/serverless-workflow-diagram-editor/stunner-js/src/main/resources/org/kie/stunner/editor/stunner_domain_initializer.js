/*
TODO: Check actual js scope.
(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.ELK = f();
    }
})(function () {

})*/

const e = window.editor;
const w_ns = window.org.kie.stunner.editor.workflow;
console.log("Execution of custom js domain initializer script.");

class Start {
  name = "start";
}
window.Start = Start;

class Activity {
  name = "activity";
}
window.Activity = Activity;

if (true) {
  const init = e.domainInitializer;
  // init.addDefinition(w_ns.Workflow);
  // init.setLabels(w_ns.Workflow, "rootNode");
  init.addDefinition(window.Start);
  init.setCategory(window.Start, "Activities");
  init.setLabels(window.Start, "rootNode", "activity");
  init.addDefinition(window.Activity);
  init.setCategory(window.Activity, "Activities");
  init.setLabels(window.Activity, "rootNode", "activity");
}

e.parser = function (context, raw) {
  console.log("Marshalling: " + raw);
  if (true) {
    console.log("Parsing graph from JS...");
    context
      // .addRootNode("sw_root_node", new w_ns.Workflow())
      .addNode("start", new window.Start())
      .setLocation("start", 350, 75)
      .addNode("activity1", new w_ns.Activity())
      .setLocation("activity1", 350, 120)
      .addNode("activity2", new window.Activity())
      .setLocation("activity2", 350, 300);
  }
};

e.shapeViewFactory = function (bean) {
  const lienzo_ns = window.com.ait.lienzo.client.core.shape;
  console.log("Creating shape view for: ");
  console.log(bean);
  if (bean instanceof window.Activity) {
    var mpath = new lienzo_ns.MultiPath().rect(0, 0, 250, 100);
  } else if (bean instanceof window.Start) {
    var mpath = new lienzo_ns.MultiPath().circle(25);
  }
  return mpath;
};
