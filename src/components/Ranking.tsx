import * as React from "react";
import * as Redux from "react-redux";
import { Helmet } from "react-helmet";

import Navigation from "_components/organisms/Navigation";
import ItemList from "_components/organisms/ItemList";

import { selectRanking } from "_queries/query/selectRanking.ts";

import { InterfaceRanking } from "../types/InterfaceRanking";

interface Props {
  item: {
    ranking: InterfaceRanking;
  };
  ui: {
    display_style: number;
  };
}
interface State {}

class Ranking extends React.Component<Props, State> {
  constructor(props: Props) {
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
    const data_label = {
      bestRanking: "全体ランキング",
      eachNo1: "各ジャンル１位",
      rankGenre1: "異世界ファンタジーランキング",
      rankGenre2: "現代ファンタジーランキング",
      rankGenre3: "SFランキング",
      rankGenre4: "恋愛ランキング",
      rankGenre5: "ホラーランキング",
      rankGenre6: "ミステリーランキング",
      rankGenre7: "エッセイ・ノンフィクションランキング",
      rankGenre8: "歴史・時代・伝記ランキング",
      rankGenre9: "現代ドラマランキング",
      rankGenre10: "創作論・評論ランキング",
      rankGenre11: "詩・童話・その他ランキング",
    };
    let itemLists: Array<any> = [];

    try {
      if (Object.keys(ranking).length > 1) {
        itemLists = Object.keys(ranking).map(function (key, index) {
          return (
            <section className="ranking" key={index}>
              <h3 className="ttl_h3">{data_label[key]}</h3>
              <ItemList
                data={ranking[key]}
                display_style={display_style}
                pageType={1}
              />
            </section>
          );
        });
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
        {itemLists}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return state;
};
export default Redux.connect(mapStateToProps)(Ranking);
