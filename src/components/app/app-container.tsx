import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { media } from '../theme';

const StyledAppContainer: StyledComponent<'div', any, { docHeight?: number }, never> = styled.div`
  ${props => props.theme.fontStyles.primary}
  position: relative;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    ${(props: { docHeight: number }) => (props.docHeight ? `min-height: ${props.docHeight}px` : '')}
    width: 90rem;
    margin: 0 auto;
  `}
`;

const Container: React.StatelessComponent = ({ children }) => {
  const [docHeight, setDocHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => setDocHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return <StyledAppContainer docHeight={docHeight}>{children}</StyledAppContainer>;
};

export default Container;
