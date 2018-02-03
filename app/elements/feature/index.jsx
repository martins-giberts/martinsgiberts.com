import React from 'react'
import Link from '../link'
import {
  Wrapper,
  Icon,
  Text,
  Button,
  ButtonLink
} from './styled'

const Feature = ({name, link, text}) =>
  <Wrapper>
    <Icon>
      <Link href={link}>
        <i className={`fa fa-${name}`} aria-hidden="true"></i>
      </Link>
    </Icon>
    <Text dangerouslySetInnerHTML={{__html: text}} />
    <Button>
      <ButtonLink href={link}>Open</ButtonLink>
    </Button>
  </Wrapper>

export default Feature
