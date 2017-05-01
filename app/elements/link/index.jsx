// @flow

import React from 'react'
import styles from './Link.css'

type props = {
  children?: mixed,
  href: string,
  target?: '_blank' | '_self',
}

const Link = ({
  children,
  href = '#',
  target = '_blank',
}: props) =>
  <a
    className={styles.link}
    href={href}
    target={target}
  >
    {children}
  </a>

export default Link
