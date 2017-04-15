import React from 'react'
import content from './contentData'
import Feature from '../../elements/feature'
import styles from './SocialLinks.css'

const SocialLinks = () =>
  <div className={styles.container}>
    {content.map((params, key) => {
      return  (
        <div className={styles.cell} key={key}>
          <Feature {...params} />
        </div>
      )
    })}
  </div>

export default SocialLinks
