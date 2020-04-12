import actions from '_action/actions.js'
import initialState from '_state/initialState.js'

function main(state = initialState, actions) {
  switch (actions.type) {
    case 'SET_PAGE_TYPE':
      return Object.assign({}, state, {
        pageType: action.value
      })
    default:
      return state
  }
}

export default main;