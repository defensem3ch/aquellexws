/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Page from '../components/Page';
import Updates from '../components/Updates';
import NewsUpdates from '../components/NewsUpdates';
import TemplateWrapper from '../layouts';
import Event from '../components/Event';
import NewsItem from '../components/NewsItem';
import minorUpdates from '../data/minorUpdates';

const IndexPage = ({ data }) => (
  <TemplateWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="HOME" />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Page title="NEWS" />
    <Updates title="Gigs (green for upcoming, red for occurred + DD.MM.YYYY):">
      {data.gigs.edges.map(({ node }) => (
        <Event key={node.id} event={node} />
      ))}
    </Updates>

    <Updates title="Site updates:">
      {minorUpdates.map((u, i) => (
        <p key={i}>
          {u.date}
          {' // '}
          {u.content}
        </p>
      ))}
    </Updates>

    <NewsUpdates>
      {data.news.edges.map(({ node }) => (
        <NewsItem key={node.id} node={node} />
      ))}
    </NewsUpdates>
  </TemplateWrapper>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
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
    gigs: allGigsJson {
      edges {
        node {
          id
          date
          upcoming
          event
          url
        }
      }
    }
    news: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/updates/" } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
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
    }
  }
`;
