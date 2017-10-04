import React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'

import styles from './tutorial.module.css'

const TutorialTemplate = ({ data }) => {
  const page = data.markdownRemark
  const { siteMetadata, buildTime } = data.site

  return (
    <div className={styles.tutorial}>
      <Helmet
        title={`${page.frontmatter.title} · ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: page.excerpt },
          { name: 'author', content: siteMetadata.author.name }
        ]}
      />
      <div className={styles.tutorialTableOfContents}>
        <h4>Table of Contents</h4>
        <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
      </div>
      <div className={styles.tutorialContent}>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </div>
  )
}

export default TutorialTemplate

export const query = graphql`
  query TutorialQuery($path: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
          email
        }
      }
      buildTime
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      tableOfContents
      frontmatter {
        title
        path
        layout
      }
    }
  }
`
