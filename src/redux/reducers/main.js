import initialState from '_state/initialState.js'

function main(state = initialState, action) {
  switch (action.type) {
    case 'SET_PAGE_TYPE':
      return Object.assign({}, state, {
        pageType: action.value
      })
    default:
      return state
  }
}

export default main;