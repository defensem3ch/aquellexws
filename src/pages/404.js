import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = ({ data }) => (
  <div>
    <Helmet>
      <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="404: Page not found." />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <h1>404: NOT FOUND</h1>
    <p><img src="/img/tenshi.gif" /></p>
  </div>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
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
  }
`
