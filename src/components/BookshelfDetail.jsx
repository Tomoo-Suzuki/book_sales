import React from "react";
import * as Redux from "react-redux";

import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemListShelf from "_components/organisms/ItemListShelf";

import { selectBookshelfTop } from "_queries/query/selectBookshelfTop.js";

class BookshelfDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.getData = this.getData.bind(this);
    this.id_series = props.match.params.id_series;
  }

  render() {
    const bookshelf = this.props.bookshelf.top;
    const display_style = this.props.ui.display_style;
    let itemLists;
    try {
      if (Object.keys(bookshelf).length > 1) {
        const cloneLists = Object.assign(bookshelf);
        const arrayLists = Array.from(cloneLists);
        arrayLists.sort((a, b) => {
          if (Number(a.id_series) > Number(b.id_series)) return 1;
          if (Number(a.id_series) < Number(b.id_series)) return -1;
          if (Number(a.id_book) > Number(b.id_book)) return -1;
          if (Number(a.id_book) < Number(b.id_book)) return 1;
        });
        let latestLists = {};
        arrayLists.map((item, index) => {
          if (latestLists[item.id_series] === undefined) {
            latestLists[item.id_series] = [];
          }
          latestLists[item.id_series].push(item);
        });
        const items = latestLists[this.id_series];
        itemLists = <ItemListShelf data={items} shelfType={1} />;
      }
    } catch (e) {
      if (bookshelf === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookshelf | DETAIL</title>
          <meta
            name="description"
            content="BookshelfDetailのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookshelf,top" />
        </Helmet>
        <h2 className="ttl_h2">BookshelfDetail</h2>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default Redux.connect(mapStateToProps)(BookshelfDetail);
