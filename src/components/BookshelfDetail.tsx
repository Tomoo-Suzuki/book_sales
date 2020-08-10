import * as React from "react";
import * as Redux from "react-redux";

import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemListShelf from "_components/organisms/ItemListShelf";

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

class BookshelfDetail extends React.Component<Props, State> {
  id_series: string = "";
  constructor(props: Props) {
    super(props);
    // this.getData = this.getData.bind(this);
    this.id_series = props.match.params.id_series;
    console.log(this.id_series);
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
          if (Number(a.id_series) > Number(b.id_series)) return 1;
          if (Number(a.id_series) < Number(b.id_series)) return -1;
          if (Number(a.id_book) > Number(b.id_book)) return -1;
          if (Number(a.id_book) < Number(b.id_book)) return 1;
        });
        let latestLists = {};
        arrayLists.map((item: any, index: number): any => {
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

const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(BookshelfDetail);
