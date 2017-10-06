import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import classnames from 'classnames'

import { PageWithSidebar } from '../components/Page'
import Row from '../components/Row'
import Col from '../components/Col'

const GoodiesTemplate = ({ data }) => {
  const page = data.markdownRemark
  const { siteMetadata, buildTime } = data.site

  return (
    <div>
      <Helmet
        title={`${page.frontmatter.title} · ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: page.excerpt },
          { name: 'author', content: siteMetadata.author.name }
        ]}
      />
      <PageWithSidebar
        title={page.frontmatter.title}
        updated={page.frontmatter.lastUpdated}
      >
        <Row reverse>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </Col>
          <Col sm="sm-third">
            <h3 style={{ marginTop: '40px' }}>TUTORIAL</h3>
            <ol>
              <li><Link to="/goodies/tutorial/sample-tutorial-1.html">Interface &amp; humble beginnings</Link></li>
              <li>Phrase formulation &amp; structuring</li>
              <li>Single-channel echo buffers</li>
              <li>BGB setup</li>
              <li>Game Boy comparison (better than Weixelbaum’s version)</li>
            </ol>
          </Col>
        </Row>
      </PageWithSidebar>
    </div>
  )
}

export default GoodiesTemplate

export const query = graphql`
  query GoodiesTemplateQuery($path: String!) {
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
        lastUpdated
      }
    }
  }
`
