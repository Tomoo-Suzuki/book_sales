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
import { selectAccount } from "_queries/query/selectAccount";
import { form_controll } from "_redux/actions/action";

import { validator } from "_lib/validate/";

import "_scss/index";

const txtArray = ["入力・編集", "確認", "完了"];

class FormAccount extends React.Component {
  constructor(props) {
    super(props);
    const today = moment().format("YYYY年MM月DD日");
    // this.state = {};
    this.submitFormData = this.submitFormData.bind(this);
    this.getData = this.getData.bind(this);
    this.validate = this.validate.bind(this);
    this.formDispatch = this.formDispatch.bind(this);
    this.getData("rryuusei_y@gmail.com");
  }
  getData(email) {
    selectAccount(email, this.props.dispatch);
  }
  submitFormData() {
    const thisFrom = document.forms.accountForm;
    insertAccount(thisFrom, this.props.dispatch);
  }
  validate(e) {
    validator(e, this.props.dispatch);
  }
  formDispatch(e, isCheckbox) {
    let tempHash = {};
    tempHash.key = e.target.name;
    tempHash.val = e.target.value;
    this.props.dispatch(form_controll(tempHash));
  }
  render() {
    const val = this.props.account.user || {};
    const error = this.props.account.msg || {};
    console.log(this.props.account);
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
          <ProgressTracker txtArray={txtArray} status={0} />
          <form name="accountForm">
            <input type="hidden" name="id" value="00002" />
            <ReceptionDate
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
            />
            <Name
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />
            <NameKana
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />
            <Tel
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />

            <Email
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />

            <Address
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />

            <Gender
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />

            <Purpose
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />
            <Birthday
              val={val}
              updateForm={(e) => {
                this.formDispatch(e);
              }}
              validate={(e) => {
                this.validate(e);
              }}
              error={error}
            />

            <BtnPost submit={this.submitFormData} btnName="確認する" />
          </form>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { account: state.account };
};
export default Redux.connect(mapStateToProps)(FormAccount);
