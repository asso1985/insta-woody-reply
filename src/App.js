import React from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./global-styles/";
import { AppContainer, Main, Section, PostArea, SideArea } from "./layout";
import { Header } from "./components";
import { PostContainer, GuestContainer } from "./containers";

const App = ({ store }) => (
  <Provider store={store}>
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Main>
        <Section>
          <PostArea>
            <PostContainer />
          </PostArea>
          <SideArea>
            <GuestContainer />
          </SideArea>
        </Section>
      </Main>
    </AppContainer>
  </Provider>
);

export default App;
