import React from "react";
import Navigation from "_components/uiParts/Navigation";
import { Helmet } from "react-helmet";

import Name from "_components/formParts/Name";
import NameKana from "_components/formParts/NameKana";
import Address from "_components/formParts/Address";
import Tel from "_components/formParts/Tel";
import Email from "_components/formParts/Email";
import Gender from "_components/formParts/Gender";
import Birthday from "_components/formParts/Birthday";
import ReceptionDate from "_components/formParts/ReceptionDate";

import "_scss/_reset";
import "_scss/_form_reset";
import "_scss/_common";
import "_scss/_form";

class FormAccount extends React.Component {
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
        <main className="form-book">
          <ReceptionDate />
          <Name />
          <NameKana />
          <Tel />
          <Email />
          <Address />
          <Gender />
          <Birthday />
        </main>
      </div>
    );
  }
}

export default FormAccount;
