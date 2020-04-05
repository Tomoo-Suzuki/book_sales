import React from "react";
import Navigation from "components/uiParts/Navigation";
import { Helmet } from "react-helmet";

import Address from "components/formParts/Address";
import Email from "components/formParts/Email";
import ReceptionDate from "components/formParts/ReceptionDate";
import Color from "components/formParts/Color";
import File from "components/formParts/File";
import Size from "components/formParts/Size";
import Company from "components/formParts/Company";
import Name from "components/formParts/Name";
import Tel from "components/formParts/Tel";
import CustomerType from "components/formParts/CustomerType";
import NameKana from "components/formParts/NameKana";
import Detail from "components/formParts/Detail";
import ProductNumber from "components/formParts/ProductNumber";

import "scss/_reset";
import "scss/_form_reset";
import "scss/_common";
import "scss/_form";

class Form extends React.Component {
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
          <ReceptionDate />
          <Name />
          <NameKana />
          <Address />
          <Tel />
          <Email />
          <Company />
          <CustomerType />
          <Color />
          <Size />
          <ProductNumber />
          <Detail />
          <File />
        </main>
      </div>
    );
  }
}

export default Form;
