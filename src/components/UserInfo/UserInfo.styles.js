import styled from "styled-components";

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserInfo = styled.div`
  margin-left: ${(props) => (props.type !== "comment" ? "16px" : 0)};
  display: flex;
  flex-direction: column;
`;

const StyledUserHandle = styled.div`
  user-select: auto;
  display: inline;
  font-weight: 600;
  margin-bottom: ${(props) => (props.type === "standard" ? "2px" : 0)};
`;

const StyledUserDisplayName = styled.div`
  color: #8e8e8e;
  font-size: 12px;
`;

export {
  StyledUserContainer,
  StyledUserInfo,
  StyledUserHandle,
  StyledUserDisplayName,
};
