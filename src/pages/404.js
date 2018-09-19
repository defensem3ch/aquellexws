import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import TemplateWrapper from '../layouts';

const NotFoundPage = ({ data }) => (
  <TemplateWrapper>
    <Helmet>
      <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="404: Page not found." />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <h1>404: NOT FOUND</h1>
    <p><img src="/img/tenshi.gif" /></p>
  </TemplateWrapper>
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
