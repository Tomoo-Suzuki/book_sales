import React from "react";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import Itemlist from "_components/organisms/ItemList";

class Ranking extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Bookseries">
        <Helmet>
          <title>Bookseries | Ranking</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h1>List</h1>
        <Navigation />
        <div>全体ランキング</div>
        <div>各ジャンル１位</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
        <div>各ジャンルランキング</div>
      </div>
    );
  }
}

export default Ranking;
