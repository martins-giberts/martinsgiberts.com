import styled from 'styled-components';
import { Theme } from '../../theme';

const Link = styled.a`
  color: ${(props: { theme: Theme }) => props.theme.primary};
  display: inline-block;
`;

export default Link;
