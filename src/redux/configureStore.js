import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducers,
  middleware: () => [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);
