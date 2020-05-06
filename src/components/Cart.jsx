import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="BookseriesTopのディスクリプション"
          />
          <meta name="keyword=" content="suzuki,book,bookseries,top" />
          <title>BookSales | Cart</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>

        <h1>Cart</h1>
        <Navigation />
      </div>
    );
  }
}

export default Cart;
