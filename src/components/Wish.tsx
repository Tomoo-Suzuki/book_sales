import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";

interface Props {
  id_series: string;
  items: Array<item>;
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

class Wish extends React.Component<Props, State> {
  items: object = {};
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="BookseriesTopのディスクリプション"
          />
          <meta name="keyword=" content="suzuki,book,bookseries,top" />
          <title>BookSales | Wish</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>
        <h2 className="ttl_h2">Wish</h2>
        <Navigation />
      </div>
    );
  }
}

export default Wish;
