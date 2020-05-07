import initialState from '_redux/state/initialState.js'

function item(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_GENRE':
      return Object.assign({}, state, {
        genre: action.value
      })
    default:
      return state
  }
}

export default item;