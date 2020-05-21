import {
  createStore,
  compose,
  applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import {
  devToolsEnhancer
} from "redux-devtools-extension";
import {
  createLogger
} from "redux-logger";
import reducer from "_redux/reducers/";
import rootSaga from "_redux/sagas/";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), devToolsEnhancer({})),
    initialState,
    applyMiddleware(sagaMiddleware, createLogger())
  );
  sagaMiddleware.run(rootSaga);
  return store;
}