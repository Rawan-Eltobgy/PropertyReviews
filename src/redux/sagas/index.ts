import { all, fork } from "redux-saga/effects";

import reviewsSaga from "./reviewsSaga";

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(reviewsSaga)]);
}
