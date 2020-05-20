import React from "react";
import { NavLink } from "react-router-dom";

import "_scss/atoms/_menuHeader";

export default function MenuHeader(props) {
  const menuHeaderLists = [
    { text: "ご注文履歴・ご返品", link: "/history" },
    { text: "カート", link: "/cart" },
    { text: "欲しいものリスト", link: "/wish" },
    { text: "マイページ", link: "/mypage" },
    { text: "アカウント", link: "/account" },
    { text: "ログイン", link: "/login" },
    { text: "本棚", link: "/bookshelf-top" },
  ];
  const listMenu = menuHeaderLists.map((list, index) => (
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
    <div className="menuHeader">
      <ul>{listMenu}</ul>
    </div>
  );
}
