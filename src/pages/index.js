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

const IndexPage = ({ data }) => (
  <TemplateWrapper>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="NEWS" />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Page title="NEWS" />
    <Updates title="Gigs (green for upcoming, red for occurring/occurred + DD.MM.YYYY):">
      {data.gigs.edges.map(({ node }) => (
        <Event key={node.id} event={node} />
      ))}
    </Updates>

    <Updates title="Site updates:">
      <p>12.09.2018 // Game Boy sound comparison page updated to 0.9.4a. lsdpack is awesome!</p>
      <p>
        01.05.2018 // Sorry for radio silence and short notice of a gig on May 4th, I've been busy
        with life lately! Major update soon + updated Game Boy Comparison page to 0.9.4.
      </p>
      <p>30.01.2018 // Fixed audio preloading on tutorial pages. Thanks resir014!</p>
      <p>07.01.2018 // Updated the Game Boy Comparison page to 0.9.3.</p>
      <p>
        27.11.2017 // Added one past gig to 'Gigs' and updated the Game Boy Comparison page to
        0.9.2.
      </p>
      <p>
        25.11.2017 // Using{' '}
        <a href="https://twitter.com/thetigerinspace" target="_blank" rel="noopener noreferrer">
          tigerinspace
        </a>
        's mascot drawing in /about and added the 'Gigs' module above.
      </p>
      <p>
        11.11.2017 // Updated /goodies to include descrptions, /goodies/tutorial/famitracker-dubstep
        with examples and /goodies/tutorial/game-boy-comparison with DS Lite recordings.
      </p>
      <p>01.11.2017 // Added DEFENSE MECHANISM's LSDJ upgrade cheat sheet to /goodies.</p>
      <p>21.10.2017 // Added Ko-Fi link in /about + a few new tutorial scaffolds.</p>
      <p>
        30.09.2017 // Changed web rating from G-PG to PG-14 because of my social media links. Also
        changed my contact e-mail to aquellex@f0xpa.ws.
      </p>
      <p>24.08.2017 // The basic premise in ABOUT is ripe and ready to go!</p>
      <p>24.08.2017 // Originals section in MUSIC is ripe and ready to go!</p>
      <p>23.08.2017 // Almost done constructing the skeleton of the whole webpage.</p>
      <p>
        16.08.2017 // Started the website as a "test of waters". Hosted by Neocities for the time
        being.
      </p>
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
