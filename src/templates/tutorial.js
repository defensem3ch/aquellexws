import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import TutorialPage from '../components/TutorialPage'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import SpoilerBox from '../components/SpoilerBox'
import GoodiesSidebar from '../components/GoodiesSidebar'

const TutorialTemplate = ({ data }) => {
  const page = data.markdownRemark
  const { siteMetadata, buildTime } = data.site

  return (
    <div>
      <Helmet>
        <title>{`${page.frontmatter.title} · Tutorials · ${siteMetadata.title}`}</title>
        <meta name="description" content={page.excerpt || data.site.siteMetadata.description} />
        <meta name="author" content={siteMetadata.author.name} />
        <meta property="og:title" content={`${page.frontmatter.title} · Tutorials`} />
        <meta property="og:description" content={page.excerpt || data.site.siteMetadata.description} />
      </Helmet>
      <TutorialPage page={page} />
    </div>
  )
}

export default TutorialTemplate

export const query = graphql`
  query TutorialQuery($slug: String!) {
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
