import styled from 'styled-components';
import { media } from '../theme';

export const Wrapper = styled.div`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.background};

  ${media.desktop`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `}
`;

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
`;
