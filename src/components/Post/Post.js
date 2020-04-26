import React from "react";
import {
  StyledPost,
  StyledPostHeader,
  StyledPostContent,
  StyledPostContentSpacer,
  StyledPostContentAbsolute,
  StyledPostActions,
  StyledPostLikes,
  StyledPostComments,
} from "./Post.styles";

import PostButton from "./components/PostButton";
import PostCommentForm from "./components/PostCommentForm";
import { UserInfo } from "../";

const Post = () => {
  return (
    <StyledPost>
      <StyledPostHeader>
        <UserInfo type="header" />
      </StyledPostHeader>
      <StyledPostContent>
        <StyledPostContentSpacer />
        <StyledPostContentAbsolute>
          <img
            alt="My pic"
            decoding="auto"
            src="https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/88279166_209217470196934_1264302000127206845_n.jpg?_nc_ht=scontent-mxp1-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=EygSzwODekgAX8ttisN&amp;oh=6fc4425c7ef910116f2257019224eaff&amp;oe=5ECDB43E"
          />
        </StyledPostContentAbsolute>
      </StyledPostContent>
      <StyledPostActions>
        <PostButton type="like" />
        <PostButton type="comment" />
        <PostButton type="share" />
      </StyledPostActions>
      <StyledPostLikes></StyledPostLikes>
      <StyledPostComments></StyledPostComments>
      <PostCommentForm />
    </StyledPost>
  );
};

export default Post;
