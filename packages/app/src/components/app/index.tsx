import * as React from 'react';
import styled from 'styled-components';
import { media } from '../theme';
import Footer from '../footer';
import Header from '../header';
import SocialLinks from '../socialLinks';
import AppContainer from './app-container';
import ThemeProvider from '../theme/theme-provider';

const Wrapper = styled.div`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.background};

  ${media.desktop`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `}
`;

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
