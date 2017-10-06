import React from 'react'
import Link from 'gatsby-link'

import styles from './Container.module.css'

const Container = ({ style, children }) => (
  <div className={styles.container} style={style}>
    {children}
  </div>
)

export default Container
