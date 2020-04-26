import { all } from "redux-saga/effects";
import { commentsActionWatcher } from "./CommentsSagas";

export default function* rootSaga() {
  yield all([commentsActionWatcher()]);
}
