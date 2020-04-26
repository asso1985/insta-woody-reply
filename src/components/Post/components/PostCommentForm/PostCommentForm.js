import React, { useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StyledPostForm,
  StyledPostFormTextArea,
  StyledPostFormButton,
} from "./PostCommentForm.styles";

import { addComment } from "../../../../actions/comments";

const PostCommentForm = ({ comments, addComment }) => {
  const [commentText, SetCommentText] = useState("");
  const { isLoading } = comments;
  const canSubmit = commentText.length > 0 && !isLoading;
  const postForm = useRef();

  const handleOnCommentChange = useCallback(
    (e) => {
      SetCommentText(e.target.value);
    },
    [SetCommentText]
  );

  const handleOnSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      canSubmit && addComment({ text: commentText });
    },
    [canSubmit, commentText, addComment]
  );

  const hanelOnKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        handleOnSubmitComment(e);
      }
    },
    [handleOnSubmitComment]
  );

  useEffect(() => {
    if (!isLoading) {
      SetCommentText("");
    }
  }, [isLoading]);

  return (
    <StyledPostForm ref={postForm} onSubmit={handleOnSubmitComment}>
      <StyledPostFormTextArea
        aria-label="Add a comment..."
        placeholder="Add a comment..."
        autocomplete="off"
        autocorrect="off"
        disabled={comments.isLoading}
        value={commentText}
        onKeyDown={hanelOnKeyDown}
        onChange={handleOnCommentChange}
      ></StyledPostFormTextArea>
      <StyledPostFormButton disabled={!canSubmit} type="submit">
        Publish
      </StyledPostFormButton>
    </StyledPostForm>
  );
};

PostCommentForm.propTypes = {
  addComment: PropTypes.func,
};

const mapDispatchToProps = {
  addComment,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentForm);
