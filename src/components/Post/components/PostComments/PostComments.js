import React from "react";
import PropTypes from "prop-types";
import { StyledPostComments } from "./PostComments.styles";

import PostComment from "../PostComment";

const PostComments = ({ comments }) => {
  return (
    <StyledPostComments>
      {comments.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </StyledPostComments>
  );
};

PostComments.propTypes = {
  comments: PropTypes.array,
};

PostComments.defaultProps = {
  comments: [],
};

export default PostComments;
