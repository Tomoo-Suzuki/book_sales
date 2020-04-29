import initialState from '_redux/state/initialState.js'

function account(state = initialState, action) {
  switch (action.type) {
    case 'INSERT_ACCOUNT':
      return Object.assign({}, state, {
        pageType: action.value
      })
    case 'SELECT_ACCOUNT':
      return Object.assign({}, state, {
        pageType: action.value
      })
    case 'UPDATE_ACCOUNT':
      return Object.assign({}, state, {
        pageType: action.value
      })
    case 'DELETE_ACCOUNT':
      return Object.assign({}, state, {
        pageType: action.value
      })
    default:
      return state
  }
}

export default account;