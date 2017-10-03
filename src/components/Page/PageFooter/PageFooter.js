import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageFooter.module.css'

const PageFooter = ({ updated }) => (
  <footer className={styles.pageFooter}>
    <p>
      Last Updated: {updated}
    </p>
  </footer>
)

PageFooter.propTypes = {
  updated: PropTypes.string
}

export default PageFooter
