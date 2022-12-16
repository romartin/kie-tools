import "../../node_modules/systemjs/dist/system.js";

export default function loadShowcase() {
  System.import("./modules/org.kie.lienzo.LienzoShowcase.nocache.js");
}
