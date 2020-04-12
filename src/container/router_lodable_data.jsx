import React from "react";
import Loadable from "react-loadable";
import Loading from "_components/uiParts/Loading";

const Top = Loadable({
  loader: () => import("_components/Top"),
  loading: Loading
});
const Genre = Loadable({
  loader: () => import("_components/Genre"),
  loading: Loading
});
const List = Loadable({
  loader: () => import("_components/List"),
  loading: Loading
});
const Detail = Loadable({
  loader: () => import("_components/Detail"),
  loading: Loading
});
const Search = Loadable({
  loader: () => import("_components/Search"),
  loading: Loading
});
const BookshelfTop = Loadable({
  loader: () => import("_components/BookshelfTop"),
  loading: Loading
});
const BookshelfDetail = Loadable({
  loader: () => import("_components/BookshelfDetail"),
  loading: Loading
});
const FormLogin = Loadable({
  loader: () => import("_components/FormLogin"),
  loading: Loading
});
const FormAccount = Loadable({
  loader: () => import("_components/FormAccount"),
  loading: Loading
});
const routes = [
  {
    path: "/",
    exact: true,
    name: "top",
    component: Top
  },
  {
    path: "/genre",
    exact: true,
    name: "genre",
    component: Genre
  },
  {
    path: "/list",
    exact: true,
    name: "list",
    component: List
  },
  {
    path: "/detail",
    exact: true,
    name: "detail",
    component: Detail
  },
  {
    path: "/search",
    exact: true,
    name: "search",
    component: Search
  },
  {
    path: "/bookshelf-top",
    exact: true,
    name: "bookshelf-top",
    component: BookshelfTop
  },
  {
    path: "/bookshelf-detail",
    exact: true,
    name: "bookshelf-detail",
    component: BookshelfDetail
  },
  {
    path: "/login",
    exact: true,
    name: "login",
    component: FormLogin
  },
  {
    path: "/account",
    exact: true,
    name: "account",
    component: FormAccount
  }
];
export default routes;
