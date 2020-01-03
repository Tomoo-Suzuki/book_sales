import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "components/uiParts/Navigation";
import Itemlist from "components/uiParts/ItemList";

class List extends React.Component {
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
          <title>Bookseries | List</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h1>List</h1>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

export default List;
