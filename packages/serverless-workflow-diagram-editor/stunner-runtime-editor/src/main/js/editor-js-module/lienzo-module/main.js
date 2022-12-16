import loadExample from "./modules/loadExample.js";
import createLienzo from "./modules/createPanel.js";

document.getElementById("openButton").addEventListener("click", function () {
  console.log("Loading Example...");
  loadExample();
});

function createLienzoPanel(htmlTarget) {
  console.log("Creating Lienzo Panel...");
  createLienzo(htmlTarget);
}

globalThis.createLienzoPanel = createLienzoPanel;

console.log("Hello From Lienzo Module!");
