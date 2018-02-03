import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import SocialLinks from './components/socialLinks'
import {ThemeProvider} from 'styled-components'
import {Wrapper, AppContainer} from './styled'
import theme from './theme'

const App = () =>
  <ThemeProvider theme={theme}>
    <Wrapper>
      <AppContainer>
        <Header />
        <SocialLinks />
        <Footer />
      </AppContainer>
    </Wrapper>
  </ThemeProvider>

export default App
