import { select_account } from "_redux/actions/action";
import request from "_lib/request";

export const selectAccount = (email, dispatch) => {
  const query =
    `{
    selectAccount(email:"` +
    email +
    `") {
    id_user,
    last_name,
    first_name,
    last_name_kana,
    first_name_kana,
    gender,
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
}`;
  request(query, "selectAccount").then((res) => {
    dispatch(select_account(res));
  });
};
