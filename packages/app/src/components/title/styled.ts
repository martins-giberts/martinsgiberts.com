import styled from 'styled-components';

export const HBase = styled.h1`
  margin: 0;
  padding: 0;
`;

export const H1 = styled(HBase)`
  font-size: 3.5rem;
  line-height: 3.5rem;
`;

export const H2 = styled(HBase.withComponent('h2'))`
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 400;
`;
