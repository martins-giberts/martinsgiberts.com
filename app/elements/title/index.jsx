import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.css'

const Title = ({
  children,
  Kind,
}) =>
  <Kind className={[styles.title, styles[Kind]].join(' ')} >
    {children}
  </Kind>

Title.propTypes = {
  children: PropTypes.any,
  Kind: PropTypes.string.isRequired,
}

export default Title
