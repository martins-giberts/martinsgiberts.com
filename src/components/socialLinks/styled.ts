import styled from 'styled-components';
import { Container, Cell } from '../grid';
import { media } from '../theme';

export const Wrapper = styled(Container)`
  flex-wrap: wrap;

  ${media.desktop`
    align-items: center;
  `}

  ${media.large`
    margin-top: 2rem;
  `}
`;

export const Item = styled(Cell)`
  flex-basis: inherit;

  ${media.medium`
    ${media.horizontal`
      flex-basis: 50%;
    `}
  `}

  ${media.large`
    flex-basis: 50%;
  `}
  ${media.desktop`
    flex-basis: 25%;
  `}
`;
