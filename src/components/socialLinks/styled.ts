import styled from 'styled-components';
import { Container, Cell } from '../grid';
import media from '../../themeMedia';

export const Wrapper = styled(Container)`
  flex-wrap: wrap;

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
