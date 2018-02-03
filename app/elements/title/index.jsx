import React from 'react'
import {H1, H2} from './styled'

const getHeader = (kind) => {
  switch (kind) {
    case 'h2':
      return H2;
    default:
      return H1;
  }
}

const Title = ({
  children,
  kind,
}) => {
  const Kind = getHeader(kind)
  return (
    <Kind>
      {children}
    </Kind>
  )
}

export default Title
