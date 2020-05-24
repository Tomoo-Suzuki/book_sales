import * as React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

class Home extends React.Component {
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
          <title>Book | Suzuki</title>
          <link rel="canonical" href="http://suzuki-tomoo.com/" />
        </Helmet>

        <h2 className="ttl_h2">Top</h2>
        <Navigation />
        <div>売れてる商品</div>
        <div>注目商品</div>
        <div>お得なキャンペーン</div>
        <div>新着</div>
        <div>ランキング</div>
        <div>割引</div>
        <div>閲覧履歴からのおすすめ</div>
        <div>予約</div>
      </div>
    );
  }
}

export default Home;
