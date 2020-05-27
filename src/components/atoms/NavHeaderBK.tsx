import * as React from "react";
import { NavLink } from "react-router-dom";

import "_scss/atoms/_navHeader";

export default function NavHeader(props) {
  const navHeaderLists = [
    { text: "異世界ファンタジー", link: "/genre/1" },
    { text: "現代ファンタジー", link: "/genre/2" },
    { text: "SF", link: "/genre/3" },
    { text: "恋愛", link: "/genre/4" },
    { text: "ホラー", link: "/genre/5" },
    { text: "ミステリー", link: "/genre/6" },
    { text: "エッセイ・ノンフィクション", link: "/genre/7" },
    { text: "歴史・時代・伝記", link: "/genre/8" },
    { text: "現代ドラマ", link: "/genre/9" },
    { text: "創作論・評論", link: "/genre/10" },
    { text: "詩・童話・その他", link: "/genre/11" },
  ];
  const listNav = navHeaderLists.map((list, index) => (
    <li key={index}>
      <NavLink to={list.link}>
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
