import { call, takeEvery } from "redux-saga/effects";
import { PERSIST_DERIVED_VALUE } from "../types";

export default function* navigationSaga() {
  yield takeEvery(PERSIST_DERIVED_VALUE, () => {});
}
