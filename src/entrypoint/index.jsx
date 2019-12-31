import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "reducer/mainReducer";
import Book from "container/Book";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Book />
  </Provider>,

  document.getElementById("contents")
);
