import {
  select_account
} from "_redux/actions/action.js";
import request from "_lib/request";

export const selectAccount = (dispatch) => {
  const query = `{
  selectAccount(id:"00001") {
    id,
    last_name,
    first_name,
    last_name_kana,
    first_name_kana,
    tel,
    email,
    email_confirm,
    birthday,
    zip,
    prefecture,
    city,
    address3,
    building,
    purpose
  }
}`
  const res = request(query, 'selectAccount', select_account, dispatch);

};