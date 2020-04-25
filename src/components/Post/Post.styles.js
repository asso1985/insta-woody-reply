import styled from "styled-components";

const StyledPost = styled.article`
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  margin-left: -1px;
  margin-right: -1px;
`;

const StyledPostHeader = styled.header`
  align-items: center;
  flex-direction: row;
  height: 60px;
  padding: 16px;
  display: flex;
`;

const StyledPostContent = styled.div`
  position: relative;
  widht: 100%;
`;

const StyledPostContentSpacer = styled.div`
  padding-bottom: 100%;
`;

const StyledPostContentAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const StyledPostActions = styled.div`
  margin: 4px 0;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  margin-left: -8px;
`;

export {
  StyledPost,
  StyledPostHeader,
  StyledPostContent,
  StyledPostContentSpacer,
  StyledPostContentAbsolute,
  StyledPostActions,
};
