import * as React from "react";
import * as Redux from "react-redux";

import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemListShelf from "_components/organisms/ItemListShelf";

import { selectBookshelfTop } from "_queries/query/selectBookshelfTop.ts";

interface Props {
  id_series: string;
  bookshelf: {
    top: object;
  };
  ui: {
    display_style: Number;
  };
}
interface State {}

type bookshelf = {
  id_book: string;
  no_title: number;
  name_book: string;
  point_sales: number;
  genre: number;
  name_genre: string;
  name_category: string;
  is_complete: boolean;
  is_latest: boolean;
  is_reserve: boolean;
  id_series: string;
  name_series: string;
  price_unit: string;
  price_now: number;
  book_detail: string;
  point_id: string;
  point: number;
  id_author: string;
  id_publisher: string;
  id_shop: string;
  url_detail: string;
  url_img: string;
  url_img_t: string;
  url_reader: string;
  date_register: string;
  date_sales: string;
  label_free: number;
  label_free_s: number;
  label_disc: number;
  label_disc_s: number;
  label_new: number;
  label_off: number;
  label_complete_s: number;
};

class BookshelfDetail extends React.Component<Props, State> {
  id_series: string = "";
  constructor(props) {
    super(props);
    // this.getData = this.getData.bind(this);
    this.id_series = props.match.params.id_series;
    console.log(this.id_series);
  }

  render() {
    const bookshelf = this.props.bookshelf.top;
    const display_style = this.props.ui.display_style;
    let itemLists;
    try {
      if (Object.keys(bookshelf).length > 1) {
        const cloneLists = Object.assign(bookshelf);
        const arrayLists = Array.from(cloneLists);
        arrayLists.sort((a: bookshelf, b: bookshelf): any => {
          if (Number(a.id_series) > Number(b.id_series)) return 1;
          if (Number(a.id_series) < Number(b.id_series)) return -1;
          if (Number(a.id_book) > Number(b.id_book)) return -1;
          if (Number(a.id_book) < Number(b.id_book)) return 1;
        });
        let latestLists = {};
        arrayLists.map((item: bookshelf, index: number): any => {
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
