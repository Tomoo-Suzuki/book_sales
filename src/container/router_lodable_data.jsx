import React from "react";
import Loadable from "react-loadable";
import Loading from "components/uiParts/Loading";

const Top = Loadable({
  loader: () => import("components/Top"),
  loading: Loading,
});
const Genre = Loadable({
  loader: () => import("components/Genre"),
  loading: Loading,
});
const List = Loadable({
  loader: () => import("components/List"),
  loading: Loading,
});
const Detail = Loadable({
  loader: () => import("components/Detail"),
  loading: Loading,
});
const Search = Loadable({
  loader: () => import("components/Search"),
  loading: Loading,
});
const BookshelfTop = Loadable({
  loader: () => import("components/BookshelfTop"),
  loading: Loading,
});
const BookshelfDetail = Loadable({
  loader: () => import("components/BookshelfDetail"),
  loading: Loading,
});
const FormContents = Loadable({
  loader: () => import("components/FormContents"),
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
    path: "/genre",
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
    path: "/form",
    exact: true,
    name: "form",
    component: FormContents,
  },
];
export default routes;
