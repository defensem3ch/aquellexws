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
      <Helmet
        title={`${page.frontmatter.title} · Tutorials · ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: page.excerpt },
          { name: 'author', content: siteMetadata.author.name }
        ]}
      />
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
