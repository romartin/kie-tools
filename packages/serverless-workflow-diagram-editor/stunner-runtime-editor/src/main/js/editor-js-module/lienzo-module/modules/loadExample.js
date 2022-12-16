import "../../node_modules/systemjs/dist/system.js";

export default function loadExample() {
  System.import("./modules/org.kie.lienzo.LienzoShowcase.nocache.js").then((module) => {
    // TODO: Properly wait until GWT MODULE onLoad() gets called.
    setTimeout((t) => {
      LienzoNativeExample.createExample(document.getElementById("main"));
    }, 1500);
  });
}
