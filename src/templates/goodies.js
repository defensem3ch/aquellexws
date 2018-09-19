import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import Page from '../components/Page'
import GoodiesSidebar from '../components/GoodiesSidebar'
import Row from '../components/Row'
import Col from '../components/Col'
import TemplateWrapper from '../layouts';

const GoodiesTemplate = ({ data }) => {
  const page = data.markdownRemark
  const { siteMetadata, buildTime } = data.site

  return (
    <TemplateWrapper>
      <Helmet>
        <title>{`${page.frontmatter.title} · ${siteMetadata.title}`}</title>
        <meta name="description" content={page.excerpt || data.site.siteMetadata.description} />
        <meta name="author" content={siteMetadata.author.name} />
        <meta property="og:title" content={page.frontmatter.title} />
        <meta property="og:description" content={page.excerpt || data.site.siteMetadata.description} />
      </Helmet>
      <Page
        title={page.frontmatter.title}
        updated={page.frontmatter.lastUpdated}
      >
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
        <GoodiesSidebar />
      </Page>
    </TemplateWrapper>
  )
}

export default GoodiesTemplate

export const query = graphql`
  query GoodiesTemplateQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      frontmatter {
        title
        lastUpdated
      }
    }
  }
`
