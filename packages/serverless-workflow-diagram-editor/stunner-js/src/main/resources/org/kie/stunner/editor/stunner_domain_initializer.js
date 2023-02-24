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
        ELK = f();
    }
})(function () {

})*/

const e = window.editor;
console.log("Execution of custom js domain initializer script.");

class Animal {
  name;
  kind = "Dog";
  someField = 0;
  static __SOME_STATIC_FIELD__ = "someValue";

  #somePrivateField = 0;
  static #SOME_STATIC_PRIVATE_FIELD = "someStaticValue";

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speaks.`);
  }
}

class Workflow {
  name = "";
}

class Start {
  name = "";
}

class Activity {
  name = "activity";
}

class Transition {
  name = "";
}

e.domainInitializer
  .addDefinition(Workflow, {
    category: "workflow",
    labels: ["workflow"],
  })
  .addDefinition(Start, {
    category: "activities",
    labels: ["rootNode", "activity"],
  })
  .addDefinition(Activity, {
    category: "activities",
    labels: ["rootNode", "activity"],
  })
  .addDefinition(Transition, {
    category: "transitions",
    labels: ["transition"],
  })
  .addContainmentRule(Workflow, ["rootNode"])
  .addConnectionRules(Transition, [
    {
      from: "activity",
      to: "activity",
    },
  ])
  .done();

e.parser = function (context, raw) {
  context
    .addRootNode("workflow", new Workflow())
    .addNode("start", new Start())
    .setLocation("start", 350, 75)
    .addNode("activity1", new Activity())
    .setLocation("activity1", 350, 120)
    .addEdge("start_to_activity1", new Transition(), "start")
    .connect("start_to_activity1", "activity1")
    .addNode("activity2", new Activity())
    .setLocation("activity2", 350, 300)
    .addEdge("activity1_to_activity2", new Transition(), "activity1")
    .connect("activity1_to_activity2", "activity2");
};

e.shapeViewFactory = function (bean) {
  let shapeview;
  if (bean instanceof Workflow) {
    // TODO: Makes no sense.
    shapeview = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 1200, 600);
  } else if (bean instanceof Activity) {
    shapeview = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 250, 100);
    shapeview.fillColor = "lightgrey";
  } else if (bean instanceof Start) {
    shapeview = new window.com.ait.lienzo.client.core.shape.MultiPath().circle(25);
    shapeview.fillColor = "green";
  } else if (bean instanceof Transition) {
    shapeview = new window.org.kie.stunner.editor.shape.JsNativeConnector("#757575");
  }
  return shapeview;
};
