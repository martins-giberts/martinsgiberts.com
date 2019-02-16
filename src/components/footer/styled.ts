import styled from 'styled-components';
import { Container, Cell } from '../grid';

export const Wrapper = styled(Container)`
  flex-grow: 0;
  padding: 0.5rem;

  ${Cell} {
    justify-content: center;
    text-align: center;
    padding-top: 2rem;
  }
`;

export { Cell };
