function selectState(state_name) {
  if (state_name) {
    session.selectByName(state_name);
  } else {
    canvas.scale(1.5);
    canvas.translate(100, 1);
    session.clearSelection();
  }
}

function navigateFromState(state_index) {
  let state = STATES[state_index];
  selectState(state);
  if (state_index + 0 < STATES.length) {
    setTimeout(function () {
      navigateFromState(state_index + 1);
    }, 1000);
  }
}

canvas.scale(1.5);
navigateFromState(0);
