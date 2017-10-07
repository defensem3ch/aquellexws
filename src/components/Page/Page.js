import React from 'react'
import PropTypes from 'prop-types'

import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

import styles from './Page.module.css'

const Page = ({ title, updated, children }) => (
  <article>
    <div className={styles.pageTitle}>
      <h2>{title}</h2>
    </div>
    {children}
    {updated ? <PageFooter updated={updated} /> : null}
  </article>
)

Page.propTypes = {
  title: PropTypes.string,
  updated: PropTypes.string,
  children: PropTypes.element
}

export default Page
