import * as React from "react";
import * as Redux from "react-redux";

import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemListShelf from "_components/organisms/ItemListShelf";

import { selectBookshelfTop } from "_queries/query/selectBookshelfTop.ts";

import { InterfaceBookshelfTop } from "../types/InterfaceBookshelfTop";

interface Props {
  id_series: string;
  bookshelf: {
    top: InterfaceBookshelfTop;
  };
  ui: {
    display_style: Number;
  };
}
// propsにdispatchが含まれる場合
interface State {}

class BookshelfTop extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    selectBookshelfTop("u00001", this.props.dispatch);
  }

  render() {
    const bookshelf = this.props.bookshelf.top;
    const display_style = this.props.ui.display_style;
    let itemLists: {} | null | undefined;
    try {
      if (Object.keys(bookshelf).length > 1) {
        const cloneLists = Object.assign(bookshelf);
        const arrayLists = Array.from(cloneLists);
        arrayLists.sort((a: any, b: any): any => {
          const a_id_series: number = Number(a.id_series);
          const b_id_series: number = Number(b.id_series);
          const a_id_book: number = Number(a.id_book);
          const b_id_book: number = Number(b.id_book);
          if (Number(a_id_series) > Number(b_id_series)) return 1;
          if (Number(a_id_series) < Number(b_id_series)) return -1;
          if (Number(a_id_book) > Number(b_id_book)) return -1;
          if (Number(a_id_book) < Number(b_id_book)) return 1;
        });
        let latestLists = {};
        arrayLists.map((item: any): any => {
          if (
            latestLists[item.id_series] === undefined ||
            Number(latestLists[item.id_series]) < Number(item.id_book)
          ) {
            latestLists[item.id_series] = item;
          }
          return;
        });
        const items = Object.values(latestLists);
        itemLists = <ItemListShelf data={items} shelfType={0} />;
      }
    } catch (e) {
      if (bookshelf === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookshelf | Top</title>
          <meta name="description" content="BookshelfTopのディスクリプション" />
          <meta name="keyword" content="suzuki,book,bookshelf,top" />
        </Helmet>
        <h2 className="ttl_h2">BookshelfTop</h2>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(BookshelfTop);
