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
      if (Object.keys(this.props.item.ranking).length > 1) {
        itemListsBest = (
          <ItemList data={this.props.item.ranking.bestRanking} pageType={1} />
        );
        itemListsEach1 = (
          <ItemList data={this.props.item.ranking.eachNo1} pageType={1} />
        );
        itemListsGenre1 = (
          <ItemList data={this.props.item.ranking.rankGenre1} pageType={1} />
        );
        itemListsGenre2 = (
          <ItemList data={this.props.item.ranking.rankGenre2} pageType={1} />
        );
        itemListsGenre3 = (
          <ItemList data={this.props.item.ranking.rankGenre3} pageType={1} />
        );
        itemListsGenre4 = (
          <ItemList data={this.props.item.ranking.rankGenre4} pageType={1} />
        );
        itemListsGenre5 = (
          <ItemList data={this.props.item.ranking.rankGenre5} pageType={1} />
        );
        itemListsGenre6 = (
          <ItemList data={this.props.item.ranking.rankGenre6} pageType={1} />
        );
        itemListsGenre7 = (
          <ItemList data={this.props.item.ranking.rankGenre7} pageType={1} />
        );
        itemListsGenre8 = (
          <ItemList data={this.props.item.ranking.rankGenre8} pageType={1} />
        );
        itemListsGenre9 = (
          <ItemList data={this.props.item.ranking.rankGenre9} pageType={1} />
        );
        itemListsGenre10 = (
          <ItemList data={this.props.item.ranking.rankGenre10} pageType={1} />
        );
        itemListsGenre11 = (
          <ItemList data={this.props.item.ranking.rankGenre11} pageType={1} />
        );
      }
    } catch (e) {
      if (this.props.item.ranking === undefined) {
        console.log("props still undef");
      }
    }
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
          <h3 className="ttl_h3">各ジャンル2ランキング</h3>
          {itemListsGenre2}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル3ランキング</h3>
          {itemListsGenre3}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル4ランキング</h3>

          {itemListsGenre4}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル5ランキング</h3>
          {itemListsGenre5}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル6ランキング</h3>
          {itemListsGenre6}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル7ランキング</h3>
          {itemListsGenre7}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル8ランキング</h3>
          {itemListsGenre8}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル9ランキング</h3>
          {itemListsGenre9}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル10ランキング</h3>
          {itemListsGenre10}
        </section>
        <section className="ranking">
          <h3 className="ttl_h3">各ジャンル11ランキング</h3>
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
