import { all } from "redux-saga/effects";
import navigationSaga from "./navigation.saga";

export default function* rootSaga() {
  const rootSaga = [navigationSaga()];
  yield all(rootSaga);
}
