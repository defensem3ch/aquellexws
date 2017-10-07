import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
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
      <Page
        title={page.frontmatter.title}
        updated={page.frontmatter.lastUpdated}
      >
        <Row>
          <Col>
            <SpoilerBox title="Table of Contents">
              <div dangerouslySetInnerHTML={{ __html: page.tableOfContents }} />
            </SpoilerBox>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </Col>
          <Col lg="lg-third">
            <GoodiesSidebar />
          </Col>
        </Row>
      </Page>
    </div>
  )
}

export default TutorialTemplate

export const query = graphql`
  query TutorialQuery($path: String!) {
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
