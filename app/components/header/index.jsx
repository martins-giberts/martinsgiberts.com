import React from 'react'
import Title from '../../elements/title'
import styles from './Header.css'

const Header = () =>
  <div className={styles.header}>
    <div className={styles.cell}>
      <Title Kind={'h1'}>
        Martins Giberts
      </Title>
    </div>
    <div className={styles.cell}>
      <Title Kind={'h2'}>
        Web applications developer
      </Title>
    </div>
  </div>

export default Header
