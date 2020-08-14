import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "_container/App";

import configureStore from "_redux/store";

import "_scss/index";
// import initialState from "_redux/state/initialState";
//TODO:initial State 修正
const store = configureStore(/*initialState*/);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);

// import thunk from "redux-thunk";
// const middleWares = [thunk];
// const store = createStore(reducer, applyMiddleware(...middleWares));
