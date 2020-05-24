const initialStateAccount = {
  user: {
    id_user: "",
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    gender: null,
    tel: "",
    email: "",
    email_confirm: "",
    birthday: "",
    zip: "",
    prefecture: "",
    city: "",
    address3: "",
    building: "",
    purpose: ""
  },
  msg: {
    last_name: "",
    first_name: "",
    last_name_kana: "",
    first_name_kana: "",
    tel: "",
    email: "",
    email_confirm: "",
    zip: "",
    prefecture: "",
    city: "",
    address3: "",
    gender: "",
    birthday: ""
  },
  flag: {
    last_name: false,
    first_name: false,
    last_name_kana: false,
    first_name_kana: false,
    birthday: false,
    tel: false,
    email: false,
    email_confirm: false,
    zip: false,
    prefecture: false,
    city: false,
    address3: false,
    gender: false,
  }
}

export default initialStateAccount;