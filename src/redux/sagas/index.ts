import {
  all
} from 'redux-saga/effects';
import validateSaga from '_redux/sagas/validateSaga';

export default function* rootSaga() {
  yield all([
    ...validateSaga,
  ]);
}