import styled from "styled-components";

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledUserInfoAvatar = styled.div`
  height: ${(props) => (props.size === "small" ? "32px" : "50px")};
  width: ${(props) => (props.size === "small" ? "32px" : "50px")};
  > img {
    width: 100%;
    border-radius: 50%;
  }
`;

const StyledUserInfo = styled.div`
  margin-left: 16px;
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
  StyledUserInfoAvatar,
  StyledUserInfo,
  StyledUserHandle,
  StyledUserDisplayName,
};
