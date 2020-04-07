import React from "react";
import Navigation from "components/uiParts/Navigation";
import { Helmet } from "react-helmet";

import UserId from "components/formParts/UserId";
import Password from "components/formParts/Password";

import "scss/_reset";
import "scss/_form_reset";
import "scss/_common";
import "scss/_form";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
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
        <main class="form-book">
          <h2>ログイン</h2>
          <UserId />
          <Password />
          <div>
            <input name="skip" value="1" id="skip" type="checkbox" />
            <label htmlFor="skip">次回から自動的にログイン</label>
            <p class="attention">
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
