import React from "react";
import Navigation from "components/uiParts/Navigation";
import { Helmet } from "react-helmet";

import Name from "components/formParts/Name";
import NameKana from "components/formParts/NameKana";
import Address from "components/formParts/Address";
import Tel from "components/formParts/Tel";
import Email from "components/formParts/Email";
import Gender from "components/formParts/Gender";
import Birthday from "components/formParts/Birthday";
import ReceptionDate from "components/formParts/ReceptionDate";

import "scss/_reset";
import "scss/_form_reset";
import "scss/_common";
import "scss/_form";

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
