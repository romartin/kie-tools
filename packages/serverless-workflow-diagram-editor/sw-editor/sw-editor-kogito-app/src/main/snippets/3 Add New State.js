var state = new kogito_window.org.kie.workbench.common.stunner.sw.definition.InjectState();
state.name = "New State";
var node = session.commands.buildNode(state);
session.commands.addNode(node);
session.commands.updateNodePosition(node, 650, 220);
canvas.draw();
