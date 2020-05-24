import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "_container/App";

import configureStore from "_redux/store";

const store = configureStore();
import "_scss/index";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);

// import thunk from "redux-thunk";
// const middleWares = [thunk];
// const store = createStore(reducer, applyMiddleware(...middleWares));
