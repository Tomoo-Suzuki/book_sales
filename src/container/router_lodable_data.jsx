import React from "react";
import Loadable from "react-loadable";
import Loading from "_components/atoms/Loading";

const Top = Loadable({
  loader: () => import("_components/Top"),
  loading: Loading,
});
const Genre = Loadable({
  loader: () => import("_components/Genre"),
  loading: Loading,
});
const List = Loadable({
  loader: () => import("_components/List"),
  loading: Loading,
});
const Ranking = Loadable({
  loader: () => import("_components/Ranking"),
  loading: Loading,
});
const Detail = Loadable({
  loader: () => import("_components/Detail"),
  loading: Loading,
});
const Search = Loadable({
  loader: () => import("_components/Search"),
  loading: Loading,
});
const BookshelfTop = Loadable({
  loader: () => import("_components/BookshelfTop"),
  loading: Loading,
});
const BookshelfDetail = Loadable({
  loader: () => import("_components/BookshelfDetail"),
  loading: Loading,
});
const FormLogin = Loadable({
  loader: () => import("_components/FormLogin"),
  loading: Loading,
});
const FormAccount = Loadable({
  loader: () => import("_components/FormAccount"),
  loading: Loading,
});

const PurchaseHistory = Loadable({
  loader: () => import("_components/PurchaseHistory"),
  loading: Loading,
});
const Point = Loadable({
  loader: () => import("_components/Point"),
  loading: Loading,
});
const Cart = Loadable({
  loader: () => import("_components/Cart"),
  loading: Loading,
});
const Wish = Loadable({
  loader: () => import("_components/Wish"),
  loading: Loading,
});
const Mypage = Loadable({
  loader: () => import("_components/Mypage"),
  loading: Loading,
});
const BookShelfTop = Loadable({
  loader: () => import("_components/BookshelfTop"),
  loading: Loading,
});
const Help = Loadable({
  loader: () => import("_components/Help"),
  loading: Loading,
});

const routes = [
  {
    path: "/",
    exact: true,
    name: "top",
    component: Top,
  },
  {
    path: "/genre:id",
    exact: true,
    name: "genre",
    component: Genre,
  },
  {
    path: "/list",
    exact: true,
    name: "list",
    component: List,
  },
  {
    path: "/panking",
    exact: true,
    name: "ranking",
    component: Ranking,
  },
  {
    path: "/detail",
    exact: true,
    name: "detail",
    component: Detail,
  },
  {
    path: "/search",
    exact: true,
    name: "search",
    component: Search,
  },
  {
    path: "/bookshelf-top",
    exact: true,
    name: "bookshelf-top",
    component: BookshelfTop,
  },
  {
    path: "/bookshelf-detail",
    exact: true,
    name: "bookshelf-detail",
    component: BookshelfDetail,
  },
  {
    path: "/login",
    exact: true,
    name: "login",
    component: FormLogin,
  },
  {
    path: "/account",
    exact: true,
    name: "account",
    component: FormAccount,
  },
  {
    path: "/mypage/purchase-history",
    exact: true,
    name: "history",
    component: PurchaseHistory,
  },
  {
    path: "/mypage/point",
    exact: true,
    name: "point",
    component: Point,
  },
  {
    path: "/cart",
    exact: true,
    name: "cart",
    component: Cart,
  },
  {
    path: "/wish",
    exact: true,
    name: "wish",
    component: Wish,
  },
  {
    path: "/mypage",
    exact: true,
    name: "mypage",
    component: Mypage,
  },
  {
    path: "/bookshelf",
    exact: true,
    name: "bookshelf",
    component: BookShelfTop,
  },
  {
    path: "/help",
    exact: true,
    name: "help",
    component: Help,
  },
];
export default routes;
