import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/uiParts/Navigation";
import Itemlist from "_components/uiParts/ItemList";

class BookshelfDetail extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    let itemLists = this.items.map(function(elm, key) {
      return <Itemlist items={elm} key={key} />;
    });

    return (
      <div className="Bookshelf">
        <Helmet>
          <title>Bookshelf | Detail</title>
          <meta
            name="description"
            content="BookshelfDetailのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookshelf,detail" />
        </Helmet>
        <h1>BookshelfDetail</h1>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default BookshelfDetail;
