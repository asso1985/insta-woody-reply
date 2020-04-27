import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  background-color: #fafafa;
  flex: 1;
`;

const Section = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 935px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 35px;
    flex-direction: row;
  }
`;

const PostArea = styled.div`
  float: left;
  margin-right: 28px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 614px;
  }
`;

const SideArea = styled.div`
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export { AppContainer, Section, Main, PostArea, SideArea };
