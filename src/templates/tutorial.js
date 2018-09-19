import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import TutorialPage from '../components/TutorialPage';
import TemplateWrapper from '../layouts';

const TutorialTemplate = ({ data }) => {
  const page = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <TemplateWrapper>
      <Helmet>
        <title>{`${page.frontmatter.title} · Tutorials · ${siteMetadata.title}`}</title>
        <meta name="description" content={page.excerpt || data.site.siteMetadata.description} />
        <meta name="author" content={siteMetadata.author.name} />
        <meta property="og:title" content={`${page.frontmatter.title} · Tutorials`} />
        <meta
          property="og:description"
          content={page.excerpt || data.site.siteMetadata.description}
        />
      </Helmet>
      <TutorialPage page={page} />
    </TemplateWrapper>
  );
};

TutorialTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default TutorialTemplate;

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
`;
