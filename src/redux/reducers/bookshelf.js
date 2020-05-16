import initialState from '_redux/state/initialState.js'

function bookshelf(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_BOOKSHEL_TOP':
      return Object.assign({}, state, {
        top: action.value
      })
    case 'SELECT_BOOKSHEL_DETAIL':
      return Object.assign({}, state, {
        detail: action.value
      })
    default:
      return state
  }
}

export default bookshelf;