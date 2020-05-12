import initialState from '_redux/state/initialState.js'

function item(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return Object.assign({}, state, {
        display_style: action.value
      })

    default:
      return state
  }
}

export default item;