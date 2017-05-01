// @flow

import React from 'react'
import styles from './Title.css'

type props = {
  children: mixed,
  Kind: string,
}

const Title = ({
  children,
  Kind,
}: props) =>
  <Kind className={[styles.title, styles[Kind]].join(' ')} >
    {children}
  </Kind>

export default Title
