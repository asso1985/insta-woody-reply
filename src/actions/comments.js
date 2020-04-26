import { ADD_COMMENT_REQUEST } from "../constants/action-types";

const addComment = (comment) => ({
  type: ADD_COMMENT_REQUEST,
  comment,
});

export { addComment };
