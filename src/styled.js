import styled, {injectGlobal} from 'styled-components'
import media from './themeMedia'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * { margin: 0; padding: 0; text-decoration: none; }
  html { font-size: 62.5%; }
  body { font-size: 1.4rem; }
`

export const Wrapper = styled.div`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.background};

  ${media.desktop`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `}
`

export const AppContainer = styled.div`
  ${props => props.theme.fontStyles.primary}
  position: relative;
  flex-direction: column;
  padding: 2rem;

  ${media.medium`
    padding: 5rem;
  `}

  ${media.desktop`
    width: 90rem;
    margin: 0 auto;
  `}
`
