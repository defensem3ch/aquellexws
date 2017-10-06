import React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'

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
      <Page
        title={page.frontmatter.title}
        updated={page.frontmatter.lastUpdated}
      >
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Page>
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
