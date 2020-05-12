import React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectRanking } from "_queries/query/selectRanking.js";

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    selectRanking(this.props.dispatch);
  }
  render() {
    const ranking = this.props.item.ranking;
    const display_style = this.props.ui.display_style;
    let itemListsBest;
    let itemListsEach1;
    let itemListsGenre1;
    let itemListsGenre2;
    let itemListsGenre3;
    let itemListsGenre4;
    let itemListsGenre5;
    let itemListsGenre6;
    let itemListsGenre7;
    let itemListsGenre8;
    let itemListsGenre9;
    let itemListsGenre10;
    let itemListsGenre11;

    try {
      if (Object.keys(ranking).length > 1) {
        // console.log(Object.keys(ranking));
        itemListsBest = (
          <ItemList
            data={ranking.bestRanking}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsEach1 = (
          <ItemList
            data={ranking.eachNo1}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre1 = (
          <ItemList
            data={ranking.rankGenre1}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre2 = (
          <ItemList
            data={ranking.rankGenre2}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre3 = (
          <ItemList
            data={ranking.rankGenre3}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre4 = (
          <ItemList
            data={ranking.rankGenre4}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre5 = (
          <ItemList
            data={ranking.rankGenre5}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre6 = (
          <ItemList
            data={ranking.rankGenre6}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre7 = (
          <ItemList
            data={ranking.rankGenre7}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre8 = (
          <ItemList
            data={ranking.rankGenre8}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre9 = (
          <ItemList
            data={ranking.rankGenre9}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre10 = (
          <ItemList
            data={ranking.rankGenre10}
            display_style={display_style}
            pageType={1}
          />
        );
        itemListsGenre11 = (
          <ItemList
            data={ranking.rankGenre11}
            display_style={display_style}
            pageType={1}
          />
        );
      }
    } catch (e) {
      if (ranking === undefined) {
        console.log("props still undef");
      }
    }
    return (
      <div className={`Bookseries display_` + display_style}>
        <Helmet>
          <title>Bookseries | Ranking</title>
          <meta
            name="description"
            content="BookseriesListのディスクリプション"
          />
          <meta name="keyword" content="suzuki,book,bookseries,list" />
        </Helmet>
        <h2 className="ttl_h2">Ranking</h2>
        <Navigation />
        <section className="ranking">
          <h3 className="ttl_h3">全体ランキング</h3>
          {itemListsBest}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル１位</h3>
          {itemListsEach1}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル1ランキング</h3>
          {itemListsGenre1}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル2ランキング</h3>
          {itemListsGenre2}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル3ランキング</h3>
          {itemListsGenre3}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル4ランキング</h3>

          {itemListsGenre4}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル5ランキング</h3>
          {itemListsGenre5}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル6ランキング</h3>
          {itemListsGenre6}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル7ランキング</h3>
          {itemListsGenre7}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル8ランキング</h3>
          {itemListsGenre8}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル9ランキング</h3>
          {itemListsGenre9}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル10ランキング</h3>
          {itemListsGenre10}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">ジャンル11ランキング</h3>
          {itemListsGenre11}
        </section>
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
export default Redux.connect(mapStateToProps)(Ranking);
