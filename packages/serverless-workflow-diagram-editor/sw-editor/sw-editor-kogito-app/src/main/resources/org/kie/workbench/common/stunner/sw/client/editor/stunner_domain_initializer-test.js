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

window.createShapeFor = function (bean) {
  console.log("Creating shape view for " + bean);
  // var mpath = new window.com.ait.lienzo.client.core.shape.MultiPath().circle(25);
  var mpath = new window.com.ait.lienzo.client.core.shape.MultiPath().rect(0, 0, 100, 100);

  // window.canvas.add(mpath);
  // window.canvas.draw();

  return mpath;
};
class Roger {
  name = "Roger";
}

console.log("ClassId: " + window.editor.definitions.getClassId(Roger));

const roger1 = new Roger();
roger1.name = "Roger1";
console.log("DefId1: " + window.editor.definitions.getId(roger1).value());
console.log("ObjectId1: " + window.editor.definitions.getObjectId(roger1));
console.log("Fields: " + window.editor.definitions.getPropertyFields(roger1));
console.log("Name: " + window.editor.definitions.getName(roger1));
