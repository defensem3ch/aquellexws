import React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import Row from '../components/Row'
import Col from '../components/Col'

import styles from './tutorial.module.css'

const TutorialTemplate = ({ data }) => {
  const page = data.markdownRemark
  const { siteMetadata, buildTime } = data.site

  return (
    <div className={styles.tutorial}>
      <Helmet
        title={`${page.frontmatter.title} · Tutorials · ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: page.excerpt },
          { name: 'author', content: siteMetadata.author.name }
        ]}
      />
      <Row reverse>
        <Col lg="lg-third" className={styles.tutorialTableOfContents}>
          <div>
            <h4 style={{ marginTop: '40px' }}>Table of Contents</h4>
            <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
          </div>
        </Col>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Col>
      </Row>
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
