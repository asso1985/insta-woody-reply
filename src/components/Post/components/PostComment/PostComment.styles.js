import styled from "styled-components";

const StyledPostComment = styled.div`
  display: flex;
  padding-top: 12px;
`;

const StyledPostCommentUserAvatar = styled.div`
  margin-right: 18px;
`;

const StyledPostCommentText = styled.span`
  margin-left: 4px;
`;

const StyledPostCommentUser = styled.span`
  font-weight: bold;
`;

const StyledPostCommentActions = styled.div`
  margin-top: 16px;
`;

const StyledPostCommentTime = styled.time`
  line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;
  margin-right: 12px;
`;

const StyledPostCommentReply = styled.div`
  color: #8e8e8e;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: inline;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-right: 12px;
  padding: 0;
`;

const StyledPostCommentTag = styled.span`
  color: #00376b;
  text-decoration: none;
  margin-right: 4px;
`;

export {
  StyledPostComment,
  StyledPostCommentText,
  StyledPostCommentUserAvatar,
  StyledPostCommentUser,
  StyledPostCommentActions,
  StyledPostCommentTime,
  StyledPostCommentReply,
  StyledPostCommentTag,
};
