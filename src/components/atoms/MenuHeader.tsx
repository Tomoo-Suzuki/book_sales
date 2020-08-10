import * as React from "react";
import { NavLink } from "react-router-dom";

import "_scss/atoms/_menuHeader";

export default function MenuHeader():JSX.Element {
const menuHeaderLists = [
    { text: "ご注文履歴・ご返品", link: "/history" },
    { text: "カート", link: "/cart" },
    { text: "欲しいものリスト", link: "/wish" },
    { text: "マイページ", link: "/mypage" },
    { text: "アカウント", link: "/account" },
    { text: "ログイン", link: "/login" },
    { text: "本棚", link: "/bookshelf-top" },
];
const listMenu:JSX.Element[] = menuHeaderLists.map((list, index) => (
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
