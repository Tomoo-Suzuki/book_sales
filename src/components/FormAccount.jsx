import React from "react";
import * as Redux from "react-redux";

import Navigation from "_components/organisms/Navigation";
import { Helmet } from "react-helmet";

import Name from "_components/atoms/formParts/Name";
import NameKana from "_components/atoms/formParts/NameKana";
import Address from "_components/atoms/formParts/Address";
import Tel from "_components/atoms/formParts/Tel";
import Email from "_components/atoms/formParts/Email";
import Gender from "_components/atoms/formParts/Gender";
import Purpose from "_components/atoms/formParts/Purpose";
import Birthday from "_components/atoms/formParts/Birthday";
import ReceptionDate from "_components/atoms/formParts/ReceptionDate";
import BtnPost from "_components/atoms/submitBtn/form/BtnPost";
import ProgressTracker from "_components/atoms/ProgressTracker";

import moment from "moment";

import { insertAccount } from "_queries/mutation/insertAccount";
import { insert_account } from "_redux/actions/action.js";
import { set_form_status } from "_redux/actions/action.js";
import { selectAccount } from "_queries/query/selectAccount";

import initialStateAccount from "_redux/state/initialStateAccount";

import { validator } from "_lib/validate/";

import "_scss/index";

const txtArray = ["入力・編集", "確認", "完了"];

class FormAccount extends React.Component {
  constructor(props) {
    super(props);
    const today = moment().format("YYYY年MM月DD日");
    this.submitFormData = this.submitFormData.bind(this);
    this.validate = this.validate.bind(this);
    this.progressStatus = this.progressStatus.bind(this);
    this.email = "rryuusei_y@gmail.com";
    this.props.dispatch(set_form_status(0));
    if (this.email === "ryuusei_y@gmail.com") {
      console.log("passIf");
      selectAccount(this.email, this.props.dispatch);
    } else {
      console.log("passElse");

      //init form state
      this.props.dispatch(insert_account(initialStateAccount.user));
    }
  }
  progressStatus(status) {
    this.props.dispatch(set_form_status(status));
  }
  submitFormData() {
    console.log(this.props.account.user);
    insertAccount(this.props.account.user, this.props.dispatch);
  }
  validate(e) {
    validator(e, this.props.dispatch);
  }
  render() {
    const error = this.props.account.msg;
    const status = this.props.ui.status_form;

    return (
      <div className="Bookseries">
        <Helmet>
          <title>Book Sell | Account Form</title>
          <meta name="description" content="会員登録フォーム" />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h2 className="ttl_h2">アカウントの登録</h2>
        <Navigation />
        <main className="form-book">
          <ProgressTracker txtArray={txtArray} status={status} />
          {(status === 0 || status === 1) && (
            <form name="accountForm">
              <input type="hidden" name="id_user" value="00003" />
              <ReceptionDate
                updateForm={(e) => {
                  this.formDispatch(e);
                }}
              />
              <Name
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <NameKana
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <Tel
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Email
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Address
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Gender
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />

              <Purpose
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              <Birthday
                validate={(e) => {
                  this.validate(e);
                }}
                status={status}
                error={error}
              />
              {status === 0 && (
                <div className="btnContainer">
                  <BtnPost
                    btnClick={() => this.progressStatus(1)}
                    btnName="確認する"
                  />
                </div>
              )}
              {status === 1 && (
                <>
                  {" "}
                  <div className="btnContainer">
                    <BtnPost
                      btnClick={() => this.progressStatus(0)}
                      btnName="戻る"
                    />
                    <BtnPost
                      btnClick={this.submitFormData}
                      btnClick={() => this.progressStatus(2)}
                      btnName="送信する"
                    />
                  </div>
                </>
              )}
            </form>
          )}
          {status === 2 && <div>登録いたしました。</div>}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default Redux.connect(mapStateToProps)(FormAccount);
