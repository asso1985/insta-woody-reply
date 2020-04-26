import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import {
  StyledPostComment,
  StyledPostCommentUser,
  StyledPostCommentUserAvatar,
  StyledPostCommentText,
  StyledPostCommentActions,
  StyledPostCommentTime,
  StyledPostCommentReply,
  StyledPostCommentTag,
} from "./PostComment.styles";

import { Avatar } from "../../../";

const PostComment = ({ comment }) => {
  const date = formatDistanceToNow(comment.date, { addSuffix: true });
  return (
    <StyledPostComment key={comment.id}>
      <StyledPostCommentUserAvatar>
        <Avatar
          size="small"
          pic={comment.user.avatar}
          alt={comment.user.handle}
        />
      </StyledPostCommentUserAvatar>
      <div>
        <div>
          <StyledPostCommentUser>{comment.user.handle}</StyledPostCommentUser>
          <StyledPostCommentText>
            {comment.replyTo && (
              <StyledPostCommentTag>
                @{comment.replyTo.handle}
              </StyledPostCommentTag>
            )}
            {comment.comment.text}
          </StyledPostCommentText>
        </div>
        <StyledPostCommentActions>
          <StyledPostCommentTime>{date}</StyledPostCommentTime>
          <StyledPostCommentReply>Reply</StyledPostCommentReply>
        </StyledPostCommentActions>
      </div>
    </StyledPostComment>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object,
};

PostComment.defaultProps = {
  comment: {},
};

export default PostComment;
