import { take, call, select, put, fork, takeEvery } from "redux-saga/effects";

import { result_validate } from "_redux/actions/action";

function* handleValidateFlag(action) {
  // const state = yield select(); // store.getState()と同じ
  let { value } = action;
  let tempHash = {};
  tempHash.key = value.key;
  tempHash.val = value.val === "" ? true : false;
  yield put(result_validate(tempHash));
}

const validateSaga = [takeEvery("FORM_VALIDATE", handleValidateFlag)];
export default validateSaga;
