// @flow
// import React from 'react'
import styled from 'styled-components'
// import styles from './Link.css'

const Link = styled.a`
  color: ${props => props.theme.primary};
  display: inline-block;
`

// type props = {
//   children?: mixed,
//   href: string,
//   target?: '_blank' | '_self',
// }

// const Link = ({
//   children,
//   href = '#',
//   target = '_blank',
// }: props) =>
//   <a
//     className={styles.link}
//     href={href}
//     target={target}
//   >
//     {children}
//   </a>

export default Link
