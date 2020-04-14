import * as React from 'react';
import Title from '../title';
import { Wrapper, HeaderSection } from './styled';

const Header: React.StatelessComponent = () => (
  <Wrapper>
    <HeaderSection>
      <Title kind={'h1'}>Martins Giberts</Title>
    </HeaderSection>
    <HeaderSection>
      <Title kind={'h2'}>Web applications developer</Title>
    </HeaderSection>
  </Wrapper>
);

export default Header;
