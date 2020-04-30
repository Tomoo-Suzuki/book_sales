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

import moment from "moment";

import setFormData from "_lib/setFormData";
import { insertAccount } from "_queries/mutation/insertAccount";
import { account } from "_queries/query/account";

import "_scss/_reset";
import "_scss/_form_reset";
import "_scss/_common";
import "_scss/_form";

class FormAccount extends React.Component {
  constructor(props) {
    super(props);
    const today = moment().format("YYYY年MM月DD日");

    this.state = {
      zip: "",
      prefecture: "",
      city: "",
      address3: "",
      building: "",
      birthday: "",
      email: "",
      email_confirm: "",
      gender: "",
      purpose: {
        upload: "",
        read: "",
        buy: "",
        sell: "",
        other: "",
      },
      first_name: "",
      first_name_kana: "",
      last_name: "",
      last_name_kana: "",
      tel: "",
      reception_date: today,
    };

    this.setFormData = setFormData.bind(this);
    this.submitFormData = this.submitFormData.bind(this);
    //account = account.bind(this);
    //this.addAccount = addAccount.bind(this);
    account(this.props.dispatch);
  }
  submitFormData() {
    const thisFrom = document.forms.accountForm;
    insertAccount(thisFrom, this.props.dispatch);
  }

  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Book Sell | Account Form</title>
          <meta name="description" content="会員登録フォーム" />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h1>Form</h1>
        <Navigation />
        <main className="form-book">
          <form name="accountForm">
            <input type="hidden" name="id" value="00028" />
            <ReceptionDate
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Name
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <NameKana
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Tel
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Email
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Address
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Gender
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <Purpose
              val={this.state}
              updateState={(e) => {
                this.setFormData(e, true);
              }}
            />
            <Birthday
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <BtnPost submit={this.submitFormData} btnName="確認する" />
          </form>
        </main>
      </div>
    );
  }
}

// export default FormAccount;
export default Redux.connect()(FormAccount);
