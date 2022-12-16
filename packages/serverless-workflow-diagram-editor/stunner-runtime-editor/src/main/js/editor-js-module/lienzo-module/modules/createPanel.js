import "../../node_modules/systemjs/dist/system.js";

export default function createLienzo(htmlTarget) {
  System.import("./modules/org.kie.lienzo.LienzoShowcase.nocache.js").then((module) => {
    // TODO: Properly wait until GWT MODULE onLoad() gets called.
    setTimeout((t) => {
      LienzoNativeExample.createLienzo(htmlTarget);
      console.log("Lienzo Panel loaded!");
    }, 500);
  });
}
