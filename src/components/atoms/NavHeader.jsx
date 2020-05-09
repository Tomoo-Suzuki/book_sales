import React from "react";
import * as Redux from "react-redux";

import { NavLink } from "react-router-dom";
import { selectGenre } from "_queries/query/selectGenre.js";

import "_scss/atoms/_navHeader";

const navHeaderLists = [
  { text: "異世界ファンタジー", link: "/genre/1", param: 1 },
  { text: "現代ファンタジー", link: "/genre/2", param: 2 },
  { text: "SF", link: "/genre/3", param: 3 },
  { text: "恋愛", link: "/genre/4", param: 4 },
  { text: "ホラー", link: "/genre/5", param: 5 },
  { text: "ミステリー", link: "/genre/6", param: 6 },
  { text: "エッセイ・ノンフィクション", link: "/genre/7", param: 7 },
  { text: "歴史・時代・伝記", link: "/genre/8", param: 8 },
  { text: "現代ドラマ", link: "/genre/9", param: 9 },
  { text: "創作論・評論", link: "/genre/10", param: 10 },
  { text: "詩・童話・その他", link: "/genre/11", param: 11 },
];

class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  getData(id_genre) {
    console.log(id_genre);
    selectGenre(id_genre, this.props.dispatch);
  }

  render() {
    const listNav = navHeaderLists.map((list, index) => (
      <li key={index}>
        <NavLink to={list.link} onClick={() => this.getData(list.param)}>
          <span>
            <span></span>
          </span>
          {list.text}
        </NavLink>
      </li>
    ));

    return (
      <nav className="nav_header">
        <ul>{listNav}</ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { item: state.item, genre: state.genre };
};

// const mapDispatchToProps = (dispatch) => ({
//   selectGenre: (id_genre) => dispatch(selectGenre(id_genre)),
// });

export default Redux.connect(mapStateToProps)(NavHeader);
