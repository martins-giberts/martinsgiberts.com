import * as React from 'react';
import Footer from '../footer';
import Header from '../header';
import SocialLinks from '../socialLinks';
import { ThemeProvider } from 'styled-components';
import { Wrapper, AppContainer, GlobalStyles } from './styled';
import theme from '../theme';

const App: React.StatelessComponent = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AppContainer>
          <Header />
          <SocialLinks />
          <Footer />
        </AppContainer>
      </Wrapper>
    </ThemeProvider>
  </>
);

export default App;
