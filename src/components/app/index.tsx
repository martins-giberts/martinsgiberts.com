import * as React from 'react';
import Footer from '../footer';
import Header from '../header';
import SocialLinks from '../socialLinks';
import { Wrapper, AppContainer } from './styled';
import ThemeProvider from '../theme/theme-provider';

const App: React.StatelessComponent = () => (
  <ThemeProvider>
    <Wrapper>
      <AppContainer>
        <Header />
        <SocialLinks />
        <Footer />
      </AppContainer>
    </Wrapper>
  </ThemeProvider>
);

export default App;
