import React from 'react'

import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      &copy; 2014-2017, Aquellex. HTML design by Aquellex &amp; <a href="https://twitter.com/TC_Halogen" target="_blank">TC_Halogen</a><br />
      Gatsby.js implementation by <a href="https://twitter.com/resir014" target="_blank">resir014</a><br />
      My E-mail: <a href="mailto:aquellex@f0xpa.ws">aquellex@f0xpa.ws</a>.
    </div>
  </footer>
)

export default Footer
