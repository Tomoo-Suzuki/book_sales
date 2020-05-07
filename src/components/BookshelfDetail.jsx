import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

class BookshelfDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      </div>
    );
  }
}

export default BookshelfDetail;
