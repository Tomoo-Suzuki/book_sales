import React from "react";
import Navigation from "_components/organisms/Navigation";
import { Helmet } from "react-helmet";

import UserId from "_components/atoms/formParts/UserId";
import Password from "_components/atoms/formParts/Password";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
    };
  }
  setFormData(e) {
    this.setState({ [e.target.name]: e.target.value });
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
        <h1>Form</h1>
        <Navigation />
        <main className="form-book">
          <h2>ログイン</h2>
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
        </main>
      </div>
    );
  }
}

export default FormLogin;
