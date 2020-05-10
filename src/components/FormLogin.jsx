import React from "react";
import axios from "axios";
import Navigation from "_components/organisms/Navigation";
import { Helmet } from "react-helmet";

import UserId from "_components/atoms/formParts/UserId";
import Password from "_components/atoms/formParts/Password";
import BtnPost from "_components/atoms/submitBtn/form/BtnPost";

import request from "_lib/request";
import { login } from "_queries/query/login";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
    };
    this.request = request.bind(this);
    this.request(login);
  }
  setFormData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitFormData() {
    const loginForm = document.forms.loginForm;
    const formData = new FormData(loginForm);
    axios.post("/foo", formData);
    // //確認用
    // for (let item of formData) {
    //   console.log(item);
    // }
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | Detail</title>
          <meta
            name="description"
            content="BookseriesDetailディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h2 className="ttl_h2">Form</h2>
        <Navigation />
        <main className="form-book">
          <h2 className="ttl_h2">ログイン</h2>
          <form name="loginForm">
            <UserId
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Password
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <BtnPost submit={this.submitFormData} btnName="ログイン" />
            <div>
              <input name="skip" value="1" id="skip" type="checkbox" />
              <label htmlFor="skip">次回から自動的にログイン</label>
              <p className="attention">
                ネットカフェや公共の場所、学校など、自分専用のパソコン以外では自動ログインのチェックをせず、使用後は必ずログアウトしてください。
              </p>
              <div>
                続行することで
                <a href="/">利用規約</a>
                および
                <a href="/">プライバシー規約</a>
                に同意するものとみなされます。
              </div>
            </div>
            <p>他サービスのIDでログイン</p>
            <p>パスワードを忘れた方</p>
          </form>
        </main>
      </div>
    );
  }
}

export default FormLogin;
