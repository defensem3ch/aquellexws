import * as React from 'react'
import Link from 'gatsby-link'

import * as styles from './GoodiesSidebar.module.css'

const GoodiesSidebar = () => (
  <div className={styles.goodiesSidebar}>
    <h3 className={styles.goodiesSidebarTitle}>TUTORIALS</h3>
    <ul>
      <li><Link to="/goodies/tutorial/sample-tutorial-1.html">Interface &amp; humble beginnings</Link></li>
      <li>Phrase formulation &amp; structuring</li>
      <li>Single-channel echo buffers</li>
      <li>BGB setup</li>
      <li>Game Boy comparison (better than Weixelbaum’s version)</li>
    </ul>
  </div>
)

export default GoodiesSidebar
