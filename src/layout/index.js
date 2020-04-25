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
  padding-top: 35px;
  display: flex;
`;

const PostArea = styled.div`
  float: left;
  margin-right: 28px;
  max-width: 614px;
  width: 100%;
`;

const SideArea = styled.div``;

export { AppContainer, Section, Main, PostArea, SideArea };
