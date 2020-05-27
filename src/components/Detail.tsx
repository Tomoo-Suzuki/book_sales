import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import { selectDetail } from "_queries/query/selectDetail.ts";

import Navigation from "_components/organisms/Navigation";
import ItemDetail from "_components/organisms/ItemDetail";

interface Props {
  id_series: string;
  item: {
    detail: item;
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

class Detail extends React.Component<any, any> {
  id_book: string;

  constructor(props) {
    super(props);
    this.id_book = props.match.params.id_book;
    this.getData = this.getData.bind(this);
    this.getData(this.id_book);
  }
  getData(id_book) {
    selectDetail(id_book, this.props.dispatch);
  }
  render() {
    const item = this.props.item.detail;
    let thisItem;
    try {
      if (item.id_book === this.id_book) {
        thisItem = <ItemDetail data={item} pageType={0} />;
      }
    } catch (e) {
      if (this.props.item.detail === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | Detail</title>
          <meta
            name="description"
            content="BookseriesDetailディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries, detail" />
        </Helmet>
        <h2 className="ttl_h2">Detail</h2>
        <Navigation />
        {thisItem}
        <div>tableitemlistDetail</div>
        <div>seriesList</div>
        <div>AuthorItemList</div>
        <div>LabelItemList</div>
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
export default Redux.connect(mapStateToProps)(Detail);
