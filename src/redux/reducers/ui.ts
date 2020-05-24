import initialState from "_redux/state/initialState";

function item(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DISPLAY":
      return Object.assign({}, state, {
        display_style: action.value,
      });
    case "SET_FORM_STATUS":
      return Object.assign({}, state, {
        status_form: action.value,
      });

    default:
      return state;
  }
}

export default item;
