import * as React from 'react';
import styled from 'styled-components';
import { media } from '../theme';

const getContainerSize = ({ docHeight }: { docHeight: number }): string => {
  const maxHeight = 1440;

  if (docHeight) {
    return `min-height: ${maxHeight >= docHeight ? docHeight : maxHeight}px;`;
  }

  return '';
};

const StyledAppContainer = styled.div`
  ${props => props.theme.fontStyles.primary}
  ${getContainerSize}
  position: relative;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    width: 90rem;
    margin: 0 auto;
  `}
`;

const Container: React.StatelessComponent = ({ children }) => {
  const [docHeight, setDocHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = (): void => setDocHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  });

  return <StyledAppContainer docHeight={docHeight}>{children}</StyledAppContainer>;
};

export default Container;
