import React from 'react'
import PropTypes from 'prop-types'
import Link from '../link'
import styles from './Feature.css'

const Feature = ({name, link, text}) =>
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

Feature.propTypes =  {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Feature
