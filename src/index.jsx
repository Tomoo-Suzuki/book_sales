import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "_redux/reducers/";
import App from "_container/App";

import "_scss/index";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);

// import thunk from "redux-thunk";
// const middleWares = [thunk];
// const store = createStore(reducer, applyMiddleware(...middleWares));
