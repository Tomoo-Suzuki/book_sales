import React from "react";
import { Helmet } from "react-helmet";

class BrowserViewer extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
    this.id_book = props.match.params.id_book;
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="BrowserViewerのディスクリプション"
          />
          <meta name="keyword=" content="suzuki,book,bookseries,top" />
          <title>BookSales | BrowserViewer</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>

        <h2 className="ttl_h2">BrowserViewer</h2>
        <h3 className="ttl_h3">{this.id_book}</h3>
      </div>
    );
  }
}

export default BrowserViewer;
