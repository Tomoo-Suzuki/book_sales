import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

class BookshelfTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Bookshelf">
        <Helmet>
          <title>Bookshelf | Top</title>
          <meta name="description" content="BookshelfTopのディスクリプション" />
          <meta name="keyword" content="suzuki,book,bookshelf,top" />
        </Helmet>
        <h1>BookshelfTop</h1>
        <Navigation />
      </div>
    );
  }
}

export default BookshelfTop;
