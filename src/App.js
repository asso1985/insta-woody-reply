import React from "react";
import GlobalStyles from "./global-styles/";
import { AppContainer, Main, Section, PostArea, SideArea } from "./layout";
import { Header, UserInfo } from "./components";
import { PostContainer } from "./containers";

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Header />
    <Main>
      <Section>
        <PostArea>
          <PostContainer />
        </PostArea>
        <SideArea>
          <UserInfo />
        </SideArea>
      </Section>
    </Main>
  </AppContainer>
);

export default App;
