import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectList } from "_queries/query/selectList.ts";

interface Props {
  id_series: string;
  item: {
    item: object;
  };
  ui: {
    display_style: Number;
  };
}
interface State {}
interface item {
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
}

class List extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    selectList(this.props.dispatch);
  }
  render() {
    const display_style = this.props.ui.display_style;
    let itemLists;
    try {
      if (Object.keys(this.props.item.item).length > 1) {
        itemLists = <ItemList data={this.props.item.item} />;
      }
    } catch (e) {
      if (this.props.item.item === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookseries | List</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h2 className="ttl_h2">List</h2>
        <Navigation />
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
// const mapDispatchToProps = (dispatch) => ({
//   selectGenre: (id_genre) => dispatch(selectGenre(id_genre)),
// });
export default Redux.connect(mapStateToProps)(List);
