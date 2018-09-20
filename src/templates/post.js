/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import TemplateWrapper from '../layouts';
import NewsItem from '../components/NewsItem';

const PageTemplate = ({ data }) => {
  const page = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <TemplateWrapper>
      <Helmet>
        <title>{`${page.frontmatter.title} · NEWS · ${siteMetadata.title}`}</title>
        <meta name="description" content={page.excerpt || data.site.siteMetadata.description} />
        <meta name="author" content={siteMetadata.author.name} />
        <meta property="og:title" content={page.frontmatter.title} />
        <meta
          property="og:description"
          content={page.excerpt || data.site.siteMetadata.description}
        />
      </Helmet>
      <Page title="NEWS" updated={page.frontmatter.lastUpdated}>
        <NewsItem node={page} />
      </Page>
    </TemplateWrapper>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PostQuery($slug: String!) {
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
      }
      fields {
        date
      }
    }
  }
`;
