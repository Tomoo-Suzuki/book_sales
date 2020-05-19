import initialStateAccount from '_redux/state/initialStateAccount.js'

function account(state = initialStateAccount, action) {
  switch (action.type) {
    case 'INSERT_ACCOUNT':
      return Object.assign({}, state, {
        user: action.value
      })
    case 'SELECT_ACCOUNT':
      return Object.assign({}, state, {
        user: action.value
      })
    case 'UPDATE_ACCOUNT':
      return Object.assign({}, state, {
        user: action.value
      })
    case 'DELETE_ACCOUNT':
      return Object.assign({}, state, {
        user: action.value
      })
    case 'FORM_CONTROLL':
      const key = action.value.key
      const val = action.value.val
      let tempState = Object.assign({}, state.user);
      tempState[key] = val
      return Object.assign({}, state, {
        user: tempState
      })
    case 'FORM_VALIDATE':
      const key_validate = action.value.key
      const val_validate = action.value.val
      let tempState_validate = Object.assign({}, state.msg);
      tempState_validate[key_validate] = val_validate;
      return Object.assign({}, state, {
        msg: tempState_validate
      })
    default:
      return state
  }
}

export default account;