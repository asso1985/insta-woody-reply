import styled from "styled-components";

const StyledPostButton = styled.button`
  padding: 8px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;

  &:active, &:focus {
    outline: 0;
  }
`;

export default StyledPostButton;
