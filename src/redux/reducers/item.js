import initialState from '_redux/state/initialState.js'

function item(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_GENRE':
      return Object.assign({}, state, {
        item: action.value
      })
    case 'SELECT_LIST':
      return Object.assign({}, state, {
        item: action.value
      })
    case 'SELECT_RANKING':
      return Object.assign({}, state, {
        ranking: action.value
      })
    default:
      return state
  }
}

export default item;