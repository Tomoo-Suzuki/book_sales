import initialStateAccount from "_redux/state/initialStateAccount";

function account(state = initialStateAccount, action) {
  switch (action.type) {
    case "INSERT_ACCOUNT":
      return Object.assign({}, state, {
        user: action.value,
      });
    case "INSERT_ACCOUNT":
      return Object.assign({}, state, {
        user: action.value,
      });
    case "SELECT_ACCOUNT":
      return Object.assign({}, state, {
        user: action.value,
      });
    case "UPDATE_ACCOUNT":
      return Object.assign({}, state, {
        user: action.value,
      });
    case "DELETE_ACCOUNT":
      return Object.assign({}, state, {
        user: action.value,
      });
    case "FORM_CONTROLL":
      const key = action.value.key;
      const val = action.value.val;
      let tempState = Object.assign({}, state.user);
      tempState[key] = val;
      return Object.assign({}, state, {
        user: tempState,
      });
    case "FORM_VALIDATE":
      const key_validate = action.value.key;
      const val_validate = action.value.val;
      let tempState_validate = Object.assign({}, state.msg);
      tempState_validate[key_validate] = val_validate;
      return Object.assign({}, state, {
        msg: tempState_validate,
      });
    case "RESULT_VALIDATE":
      const key_res_validate = action.value.key;
      const val_res_validate = action.value.val;
      let tempState_res_validate = Object.assign({}, state.flag);
      tempState_res_validate[key_res_validate] = val_res_validate;
      return Object.assign({}, state, {
        flag: tempState_res_validate,
      });
    default:
      return state;
  }
}

export default account;
