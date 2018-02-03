import React from 'react'
import Title from '../../elements/title'
import {Wrapper, HeaderSection} from './styled'

const Header = () =>
  <Wrapper>
    <HeaderSection>
      <Title kind={'h1'}>
        Martins Giberts
      </Title>
    </HeaderSection>
    <HeaderSection>
      <Title kind={'h2'}>
        Web applications developer
      </Title>
    </HeaderSection>
  </Wrapper>

export default Header
