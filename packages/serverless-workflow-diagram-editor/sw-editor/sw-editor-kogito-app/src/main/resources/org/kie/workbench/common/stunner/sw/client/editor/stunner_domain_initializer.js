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

console.log("Execution of custom js domain initializer script.");

class Roger {
  name = "Roger";
}

window.Roger = Roger;
window.editor.domainInitializer.addDefinition(Roger);
window.editor.domainInitializer.setCategory(Roger, "SWStates");
window.editor.domainInitializer.setLabels(Roger, "rootNode", "state");

window.editor.shapeViewFactory = function (bean) {
  console.log("Creating shape view for: ");
  console.log(bean);
  // var mpath = new window.com.ait.lienzo.client.core.shape.MultiPath().circle(25);
  var mpath = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 100, 100);

  // window.canvas.add(mpath);
  // window.canvas.draw();

  return mpath;
};
