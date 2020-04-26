import { put, takeEvery, select } from "redux-saga/effects";
import uniqid from "uniqid";

import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_REPLY,
} from "../constants/action-types";

import quotes from "../quotes.json";

let QUOTES = quotes;

const getRandomQuote = () => {
  if (QUOTES.length === 0) {
    return "Sorry, I've run out fo quotes, it will be just very boring from now on... and life is short so, you know.";
  }

  const index = Math.floor(Math.random() * QUOTES.length);
  const reply = QUOTES[index];
  QUOTES.splice(index, 1);

  return reply;
};

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export function* commentsActionWatcher() {
  yield takeEvery(ADD_COMMENT_REQUEST, handleAddComment);
  yield takeEvery(ADD_COMMENT_SUCCESS, handleAddCommentReply);
}

function* handleAddComment(action) {
  const { comment } = action;

  const guest = yield select((state) => state.guest);
  const commentsList = yield select((state) => state.comments.list);

  yield delay(1000);

  yield put({
    type: ADD_COMMENT_SUCCESS,
    list: [
      ...commentsList,
      {
        id: uniqid(),
        date: new Date().getTime(),
        ...{ user: guest, comment, replyTo: null },
      },
    ],
    user: guest,
  });
}

function* handleAddCommentReply(action) {
  const { user } = action;

  const commentsList = yield select((state) => state.comments.list);
  const comment = { text: getRandomQuote() };
  const me = yield select((state) => state.me);

  yield delay(3000);

  yield put({
    type: ADD_REPLY,
    list: [
      ...commentsList,
      {
        id: uniqid(),
        date: new Date().getTime(),
        ...{ user: me, comment, replyTo: user },
      },
    ],
  });
}
