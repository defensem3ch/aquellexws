import React from 'react'
import Link from 'gatsby-link'

import styles from './HeaderBadges.module.css'

const HeaderBadges = () => (
  <div className={styles.headerBadges}>
    <a href="https://facebook.com/aquellex" target="_blank"><img src="/img/fb.png" /></a>{' '}
    <a href="https://twitter.com/Aquellex" target="_blank"><img src="/img/tw.png" /></a>{' '}
    <a href="https://soundcloud.com/aquellex" target="_blank"><img src="/img/sc.png" /></a>{' '}
    <a href="http://www.mabsland.com/Adoption.html" target="_blank"><img src="/img/Censor_PGc.gif" /></a>
    <a href="http://www.mabsland.com/Adoption.html" target="_blank"><img src="/img/Censor_14c.gif" /></a>
  </div>
)

export default HeaderBadges
