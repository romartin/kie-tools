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

console.error("Execution of custom js domain initializer script.");

class Roger {
  name = "Roger";
}

if (true) {
  window.editor.domainInitializer.addDefinitionById(
    "org.kie.workbench.common.stunner.sw.definition.OperationState#ansible",
    null
  );

  window.editor.domainInitializer.setDynamicDefinitionBuilder((defId) => {
    const id = defId.value();
    console.error("CALLED CUSTOM DEF BUILDER YEAH FOR TYPE:" + id);
    const definition = eval("new window." + id + "()");
    definition.metadata = new window.org.kie.workbench.common.stunner.sw.definition.Metadata();
    definition.metadata.type = "ansible";
    return definition;
  });

  console.error("CONFIGURING TOOLBOX 0 - INSTANCE: " + window.editor.configuration.toolbox);
  window.editor.configuration.toolbox.buttonSizePx = 25;
  window.editor.configuration.toolbox.toolboxAt = "SOUTH_EAST";
  window.editor.configuration.toolbox.isNodeIdAllowed = (id) => {
    console.error("isNodeIdAllowed: " + id);
    // return id === "org.kie.workbench.common.stunner.sw.definition.OperationState#ansible";
    return true;
  };
  window.editor.configuration.toolbox.isConnectorIdAllowed = (id) => {
    console.error("isConnectorIdAllowed: " + id);
    return true;
  };
  console.error("CONFIGURING TOOLBOX END");
} else {
  window.Roger = Roger;
  window.editor.domainInitializer.addDefinition(Roger);
  window.editor.domainInitializer.setCategory(Roger, "SWStates");
  window.editor.domainInitializer.setLabels(Roger, "rootNode", "state");
}

/*
window.editor.parser = function (executionContext, raw) {
  console.log("Marshalling: " + raw);
  if (true) {
    console.log("Parsing graph from JS...");
    executionContext
      .addRootNode("sw_root_node", new window.org.kie.workbench.common.stunner.sw.definition.Workflow())
      .addNode(
        "state1",
        new window.org.kie.workbench.common.stunner.sw.definition.InjectState().setName("injectState1")
      )
      .changeLocation("state1", 350, 220)
      .addNode("roger1", new window.Roger())
      .changeLocation("roger1", 350, 420)
      .addEdge("state1_to_roger1", new window.org.kie.workbench.common.stunner.sw.definition.Transition(), "state1")
      .connect("state1_to_roger1", "roger1")
      .addNode("end", new window.org.kie.workbench.common.stunner.sw.definition.End())
      .changeLocation("end", 420, 670)
      .addEdge("roger1_to_end", new window.org.kie.workbench.common.stunner.sw.definition.Transition(), "roger1")
      .connect("roger1_to_end", "end");
  }
};

window.editor.shapeViewFactory = function (bean) {
  console.log("Creating shape view for: ");
  console.log(bean);
  var mpath = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 100, 100);
  return mpath;
};
*/
