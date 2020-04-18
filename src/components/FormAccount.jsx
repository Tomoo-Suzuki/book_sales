import React from "react";
import axios from "axios";

import Navigation from "_components/organisms/Navigation";
import { Helmet } from "react-helmet";

import Name from "_components/atoms/formParts/Name";
import NameKana from "_components/atoms/formParts/NameKana";
import Address from "_components/atoms/formParts/Address";
import Tel from "_components/atoms/formParts/Tel";
import Email from "_components/atoms/formParts/Email";
import Gender from "_components/atoms/formParts/Gender";
import Birthday from "_components/atoms/formParts/Birthday";
import ReceptionDate from "_components/atoms/formParts/ReceptionDate";
import BtnPost from "_components/atoms/submitBtn/form/BtnPost";

import setFormData from "_lib/setFormData";

import "_scss/_reset";
import "_scss/_form_reset";
import "_scss/_common";
import "_scss/_form";

class FormAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      prefecture: "",
      city: "",
      adress3: "",
      building: "",
      birthday: "",
      email: "",
      emailConfirm: "",
      gender: "",
      firstName: "",
      firstNameKana: "",
      lastName: "",
      lastNameKana: "",
      tel: "",
      receptionDate: "",
    };
    this.setFormData = setFormData.bind(this);
  }
  submitFormData() {
    const accountForm = document.forms.accountForm;
    const formData = new FormData(accountForm);
    axios.post("/foo", formData);
    //確認用
    for (let item of formData) {
      console.log(item);
    }
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
          <form name="accountForm">
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
            <Birthday
              val={this.state}
              updateState={(e) => {
                this.setFormData(e);
              }}
            />
            <BtnPost submit={this.submitFormData} />
          </form>
        </main>
      </div>
    );
  }
}

export default FormAccount;
