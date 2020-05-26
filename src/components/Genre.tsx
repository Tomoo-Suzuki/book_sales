import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectGenre } from "_queries/query/selectGenre.ts";

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

class Genre extends React.Component<any, any> {
  id_genre: string = "";
  constructor(props) {
    super(props);
    this.id_genre = props.match.params.id;
    this.getData = this.getData.bind(this);
    this.getData(this.id_genre);
  }
  getData(id_genre) {
    selectGenre(id_genre, this.props.dispatch);
  }
  render() {
    const items = this.props.item.item;
    const display_style = this.props.ui.display_style;

    let itemLists;
    try {
      if (Object.keys(items).length > 1) {
        itemLists = <ItemList data={items} pageType={0} />;
      }
    } catch (e) {
      if (items === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookseries | Genre</title>
          <meta
            name="description"
            content="BookseriesGenreのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookserie,genre" />
        </Helmet>
        <h2 className="ttl_h2">Genre</h2>
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
export default Redux.connect(mapStateToProps)(Genre);
