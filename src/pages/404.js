import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = ({ data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description }
      ]}
    />
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
