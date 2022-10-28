var node = session.getNodeByName(STATES[0]);
var shape = canvas.getWiresShape(node.getUUID());
var iconGroup = shape.getChild(2).getChildren()[1];
canvas.rotateGroupOverCenter(iconGroup, 360, 1500);
