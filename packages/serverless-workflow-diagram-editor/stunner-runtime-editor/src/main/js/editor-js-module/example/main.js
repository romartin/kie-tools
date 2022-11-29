import { create, createReportList } from "./modules/canvas.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import randomSquare from "./modules/square.js";
import { Square } from "./modules/squareClass.js";

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

if (true) {
  let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
  reportArea(square1.length, reportList);
  reportPerimeter(square1.length, reportList);
} else {
  let squareClass1 = new Square(myCanvas.ctx, reportList, 50, 50, 100, "blue");
  squareClass1.draw();
  squareClass1.reportArea();
  squareClass1.reportPerimeter();
}

// Use the default
let square2 = randomSquare(myCanvas.ctx);
