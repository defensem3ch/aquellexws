import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import classnames from 'classnames'

import { PageWithSidebar } from '../components/Page'
import GoodiesSidebar from '../components/GoodiesSidebar'
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
        <GoodiesSidebar />
        <Row reverse>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
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
