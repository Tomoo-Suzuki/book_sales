import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | Search</title>
          <meta
            name="description"
            content="BookseriesSearchのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,search" />
        </Helmet>
        <h2 className="ttl_h2">Search</h2>
        <Navigation />
      </div>
    );
  }
}

export default Search;
