import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/uiParts/Navigation";
import Itemlist from "_components/uiParts/ItemList";

class Detail extends React.Component {
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
          <title>Bookseries | Detail</title>
          <meta
            name="description"
            content="BookseriesDetailディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h1>Detail</h1>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default Detail;
