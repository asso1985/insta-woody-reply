import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import {
  StyledPostForm,
  StyledPostFormTextArea,
  StyledPostFormButton,
} from "./PostCommentForm.styles";

const PostCommentForm = ({ onPostComment }) => {
  const [comment, SetComment] = useState("");
  const postForm = useRef();
  const handleOnCommentChange = useCallback(
    (e) => {
      SetComment(e.target.value);
    },
    [SetComment]
  );

  const handleOnSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      onPostComment && onPostComment(comment);
    },
    [onPostComment, comment]
  );

  const hanelOnKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        handleOnSubmitComment(e);
      }
    },
    [postForm]
  );

  const canSabmit = comment.length > 0;
  return (
    <StyledPostForm ref={postForm} onSubmit={handleOnSubmitComment}>
      <StyledPostFormTextArea
        aria-label="Add a comment..."
        placeholder="Add a comment..."
        autocomplete="off"
        autocorrect="off"
        value={comment}
        onKeyDown={hanelOnKeyDown}
        onChange={handleOnCommentChange}
      ></StyledPostFormTextArea>
      <StyledPostFormButton disabled={!canSabmit} type="submit">
        Publish
      </StyledPostFormButton>
    </StyledPostForm>
  );
};

PostCommentForm.propTypes = {
  onPostComment: PropTypes.func,
};

export default PostCommentForm;
