import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "components/uiParts/Navigation";
import Itemlist from "components/uiParts/ItemList";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    let itemLists = this.items.map(function(elm, key) {
      return <Itemlist items={elm} key={key} />;
    });

    return (
      <div className="Bookseries">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="BookseriesTopのディスクリプション"
          />
          <meta name="keyword=" content="suzuki,book,bookseries,top" />
          <title>Book | Suzuki</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>

        <h1>Top</h1>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default Top;
