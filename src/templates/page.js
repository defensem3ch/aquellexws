import React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'

const PageTemplate = ({ data }) => {
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
      <Page title={page.frontmatter.title} updated={buildTime}>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </Page>
    </div>
  )
}

export default PageTemplate

export const query = graphql`
  query PageQuery($path: String!) {
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
