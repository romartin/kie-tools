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
  name = "";
}
ns.Start = Start;

class Activity {
  name = "activity";
}
ns.Activity = Activity;

class Transition {
  name = "";
}
ns.Transition = Transition;

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
init.addConnectionRule(ns.Transition, ["activity", "activity"]);
init.initializeRules();

e.parser = function (context, raw) {
  context
    .addNode("start", new ns.Start())
    .setLocation("start", 350, 75)
    .addNode("activity1", new ns.Activity())
    .setLocation("activity1", 350, 120)
    .addEdge("start_to_activity1", new ns.Transition(), "start")
    .connect("start_to_activity1", "activity1")
    .addNode("activity2", new ns.Activity())
    .setLocation("activity2", 350, 300)
    .addEdge("activity1_to_activity2", new ns.Transition(), "activity1")
    .connect("activity1_to_activity2", "activity2");
};

e.shapeViewFactory = function (bean) {
  let shapeview;
  if (bean instanceof ns.Activity) {
    shapeview = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 250, 100);
    shapeview.fillColor = "lightgrey";
  } else if (bean instanceof ns.Start) {
    shapeview = new window.com.ait.lienzo.client.core.shape.MultiPath().circle(25);
    shapeview.fillColor = "green";
  } else if (bean instanceof ns.Transition) {
    shapeview = new window.org.kie.stunner.editor.shape.JsNativeConnector("#757575");
  }
  return shapeview;
};
