session.selectByName(STATES[0]);
console.log(session.getSelectedDefinition());
var node = session.getNodeByName(STATES[0]);
console.log(canvas.getLocation(node.getUUID()));
