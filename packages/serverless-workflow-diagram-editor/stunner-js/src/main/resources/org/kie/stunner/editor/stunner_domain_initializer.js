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
const ns = window;
console.log("Execution of custom js domain initializer script.");

class Start {
  name = "start";
}
ns.Start = Start;

class Activity {
  name = "activity";
}
ns.Activity = Activity;

class Transition {
  name = "transition";
}
ns.Transition = Transition;

if (true) {
  const init = e.domainInitializer;
  init.addDefinition(ns.Start);
  init.setCategory(ns.Start, "Activities");
  init.setLabels(ns.Start, "rootNode", "activity");
  init.addDefinition(ns.Activity);
  init.setCategory(ns.Activity, "Activities");
  init.setLabels(ns.Activity, "rootNode", "activity");
  init.addDefinition(ns.Transition);
  init.setCategory(ns.Transition, "transitions");
  init.setLabels(ns.Transition, "transition");
}

e.parser = function (context, raw) {
  console.log("Parsing: " + raw);
  context
    .addNode("start", new ns.Start())
    .setLocation("start", 350, 75)
    .addNode("activity1", new window.org.kie.stunner.editor.workflow.Activity())
    .setLocation("activity1", 350, 120)
    .addNode("activity2", new ns.Activity())
    .setLocation("activity2", 350, 300)
    .addEdge("activity1_to_activity2", new ns.Transition(), "activity1")
    .connect("activity1_to_activity2", "activity2");
};

e.shapeViewFactory = function (bean) {
  console.log("Creating view for: ");
  console.log(bean);
  if (bean instanceof ns.Activity) {
    return new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 250, 100);
  } else if (bean instanceof ns.Start) {
    return new window.com.ait.lienzo.client.core.shape.MultiPath().circle(25);
  } else if (bean instanceof ns.Transition) {
    return new window.org.kie.stunner.editor.shape.JsNativeConnector("#757575");
  }
  return null;
};
