import React, { useRef } from "react";
import {
  StyledPost,
  StyledPostHeader,
  StyledPostContent,
  StyledPostContentSpacer,
  StyledPostContentAbsolute,
  StyledPostActions,
  StyledPostLikes,
} from "./Post.styles";

import PostButton from "./components/PostButton";
import PostCommentForm from "./components/PostCommentForm";
import PostComments from "./components/PostComments";
import { UserInfo } from "../";

const Post = ({ user, comments }) => {
  const textareaRef = useRef();
  return (
    <StyledPost data-cy="post-container">
      <StyledPostHeader>
        <UserInfo user={user} type="header" />
      </StyledPostHeader>
      <StyledPostContent>
        <StyledPostContentSpacer />
        <StyledPostContentAbsolute>
          <img
            alt="My pic"
            decoding="auto"
            src="https://hips.hearstapps.com/elleit.h-cdn.co/assets/15/37/980x701/980x701--bf25b59ac10dcinema-tv-i-10-film-piu-belli-di-woody-allen-io-e-annie-9583096-1-ita-it-io-e-annie-jpg.jpg"
          />
        </StyledPostContentAbsolute>
      </StyledPostContent>
      <StyledPostActions>
        <PostButton type="like" />
        <PostButton
          type="comment"
          onClick={() => {
            textareaRef.current.focus();
          }}
        />
        <PostButton type="share" />
      </StyledPostActions>
      <StyledPostLikes></StyledPostLikes>
      <PostComments comments={comments.list} />
      <PostCommentForm forwardRef={textareaRef} />
    </StyledPost>
  );
};

export default Post;
