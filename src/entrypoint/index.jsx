import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleWares = [thunk];
import { Provider } from "react-redux";
import reducer from "reducers/";
import App from "container/App";

const store = createStore(reducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);
