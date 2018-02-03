import React from 'react'
import content from '../../../content/socialLinks'
import Feature from '../../elements/feature'
import {Wrapper, Item} from './styled'

const SocialLinks = () =>
  <Wrapper>
    {content.map((params, key) => (
      <Item key={key}>
        <Feature {...params} />
      </Item>
    ))}
  </Wrapper>

export default SocialLinks
