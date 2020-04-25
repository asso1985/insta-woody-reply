import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-basis: 54px;
`;

const StyledHeader = styled.header`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  height: 54px;
  position: fixed;
  top: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  z-index: 3;
`;

const StyledHeaderInner = styled.div`
  padding: 0 20px;
  max-width: 975px;
  width: 100%;
  display: flex;
  height: 54px;
  align-items: center;
`;

const StyledHeaderLogo = styled.div`
  margin-top: 11px;
`;

export {
  StyledHeaderContainer,
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderLogo,
};
