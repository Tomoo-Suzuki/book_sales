import actions from 'action/actions.js'
import initialState from 'state/initialState.js'

function book(state = initialState, actions) {
  switch (actions.type) {
    case 'SET_PAGE_TYPE':
      return Object.assign({}, state, {
        pageType: action.value
      })
    default:
      return state
  }
}

export default book;