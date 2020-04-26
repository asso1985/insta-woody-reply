import styled from "styled-components";

const StyledPostForm = styled.form`
  border-top: 1px solid #efefef;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
`;

const StyledPostFormTextArea = styled.textarea`
  background: 0 0;
  border: 0;
  color: #262626;
  display: flex;
  flex-grow: 1;
  font-size: inherit;
  height: 18px;
  line-height: 18px;
  max-height: 80px;
  outline: 0;
  resize: none;

  &:disabled {
    opacity: 0.6;
  }
`;

const StyledPostFormButton = styled.button`
  border: 0;
  color: #0095f6;
  display: inline;
  padding: 0;
  position: relative;
  font-size: 14px;
  line-height: 18px;
  appearance: none;
  background: 0 0;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.6;
    outline: 0;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export { StyledPostForm, StyledPostFormTextArea, StyledPostFormButton };
