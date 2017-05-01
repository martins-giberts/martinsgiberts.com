// @flow

import React from 'react'
import Link from '../link'
import styles from './Feature.css'

type props = {
  name: string,
  link: string,
  text: string,
}

const Feature = ({name, link, text}: props) =>
  <div className={styles.feature}>
    <div className={styles.link}>
      <Link href={link}>
        <i className={`fa fa-${name}`} aria-hidden="true"></i>
      </Link>
    </div>
    <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
    <div className={styles.button}>
      <Link href={link}>Open</Link>
    </div>
  </div>

export default Feature
