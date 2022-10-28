function createBadge(value) {
  var badge = new kogito_window.com.ait.lienzo.client.core.shape.Group();
  badge.listening = false;
  badge.alpha = 0;
  var text = new kogito_window.com.ait.lienzo.client.core.shape.Text(value, "arial", "italic", 12);
  text.strokeColor = "#FFFFFF";
  var bb = text.getBoundingBox();
  var decorator = new kogito_window.com.ait.lienzo.client.core.shape.Rectangle(bb.getWidth() + 10, bb.getHeight() + 10);
  decorator.x = bb.getX() - 5;
  decorator.y = bb.getY() - 5;
  decorator.fillAlpha = 1;
  decorator.fillColor = "darkgrey";
  decorator.strokeAlpha = 1;
  decorator.strokeColor = "black";
  decorator.strokeWitrh = 2;
  decorator.cornerRadius = 5;
  badge.add(decorator);
  badge.add(text);
  return badge;
}
function showBadge(shape, text) {
  var bb = shape.getBoundingBox();
  var badge = createBadge(text);
  badge.x = shape.getComputedLocation().x + bb.getWidth() / 2;
  badge.y = shape.getComputedLocation().y + (bb.getHeight() + 10);
  kogito_window.canvas.add(badge);
  kogito_window.canvas.animations().alpha(badge, 1, 500);
}

var node = session.getNodeByName(STATES[0]);
var shape = canvas.getWiresShape(node.getUUID());
showBadge(shape, "#123");
