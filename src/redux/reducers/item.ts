import initialState from "_redux/state/initialState";

function item(state = initialState, action) {
  switch (action.type) {
    case "SELECT_GENRE":
      return Object.assign({}, state, {
        item: action.value,
      });
    case "SELECT_LIST":
      return Object.assign({}, state, {
        item: action.value,
      });
    case "SELECT_RANKING":
      return Object.assign({}, state, {
        ranking: action.value,
      });
    case "SELECT_DETAIL":
      return Object.assign({}, state, {
        detail: action.value,
      });
    default:
      return state;
  }
}

export default item;
