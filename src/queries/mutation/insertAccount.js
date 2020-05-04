import {
  insert_account
} from "_redux/actions/action.js";
import formDataToHash from "_lib/formDataToHash";
import request from "_lib/request";

export const insertAccount = (form, dispatch) => {
  const hash = formDataToHash(form);
  const query =
    `mutation{
      insertAccount(id:"` + hash.id + `",
              last_name:"` + hash.last_name + `",
              first_name:"` + hash.first_name + `",
              last_name_kana:"` + hash.last_name_kana + `",
              first_name_kana:"` + hash.first_name_kana + `",
              birthday:"` + hash.birthday + `",
              zip:"` + hash.zip + `",
              prefecture:"` + hash.prefecture + `",
              city:"` + hash.city + `",
              address3:"` + hash.address3 + `",
              building:"` + hash.building + `",
              purpose:"` + hash.purpose + `",
              ){
              id,
              last_name,
              first_name,
              last_name_kana,
              first_name_kana,
              birthday,
              zip,
              prefecture,
              city,
              address3,
              building,
              purpose
      }
    }`;
  request(query, 'insertAccount', insert_account, dispatch);
};