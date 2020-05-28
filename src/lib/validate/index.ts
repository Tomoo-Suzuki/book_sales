import { form_validate, form_controll } from "_redux/actions/action";

import * as regs from "_lib/validate/regularExpressions";
import * as logics from "_lib/validate/logics";

const text_error = {
  required: {
    first_name: "名前は必須項目です",
    last_name: "苗字は必須項目です",
    first_name_kana: "フリガナ(名)は必須項目です",
    last_name_kana: "フリガナ(苗字)は必須項目です",
    tel: "電話番号は必須項目です",
    email: "メールは必須項目です",
    email_confirm: "メール(確認)は必須項目です",
    prefecture: "都道府県は必須項目です。",
    zip: "郵便番号は必須項目です",
    city: "市区町村は必須項目です",
    address3: "番地は必須項目です",
    gender: "ジェンダーは必須項目です",
    birthday: "お誕生日は必須項目です。",
  },
};

export const validator = (e, dispatch) => {
  const is_required = e.target.required;
  console.log(is_required);
  const name = e.target.name;
  console.log(name);
  let value = e.target.value;
  console.log(value);
  //   let tempHash: {
  //     [key: string]: string;
  //   } = {};
  let tempHash = { key: "", val: "" };
  tempHash.key = name;
  if (value) {
    value = logics.trim_space(value);
    value = logics.delete_htmlspecialchars(value);
  }
  if (is_required) {
    const res = logics.check_empty(value);
    if (res) {
      tempHash.val = text_error.required[name];
      dispatch(form_validate(tempHash));
    } else {
      tempHash.val = "";
      dispatch(form_validate(tempHash));
    }
  }
  tempHash.val = value;
  dispatch(form_controll(tempHash));
  if (value) {
    if (name === "last_name_kana" || name === "first_name_kana") {
      const is_kana = regs.katakana_all.test(value);
      if (!is_kana) {
        tempHash.val = "カタカナのご入力をお願いいたします。";
        dispatch(form_validate(tempHash));
      }
    }
    if (name === "tel") {
      const is_tel = regs.tel.test(value);
      if (!is_tel) {
        tempHash.val = "数字9桁か10桁でご入力ください。";
        dispatch(form_validate(tempHash));
      }
    }
    if (name === "email") {
      const is_email = regs.email.test(value);
      if (!is_email) {
        tempHash.val = "emailアドレスをご入力ください。";
        dispatch(form_validate(tempHash));
      }
    }
    if (name === "email_confirm") {
      const is_email = regs.email.test(value);
      if (!is_email) {
        tempHash.val = "emailアドレスをご入力ください。";
        dispatch(form_validate(tempHash));
      }
    }

    if (name === "zip") {
      value = logics.num_conversion(value);
      const is_zip = regs.zip.test(value);
      if (!is_zip) {
        tempHash.val = "郵便番号を数字７桁でご入力ください。";
        dispatch(form_validate(tempHash));
      }
    }
    // if (name === 'gender') {
    //   if (!value) {
    //     tempHash.val = '郵便番号を数字７桁でご入力ください。';
    //     dispatch(form_validate(tempHash));
    //   }
    // }

    //trim_space(name, value);
  }
};
