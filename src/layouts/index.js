/* eslint-env browser */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Konami from 'react-konami';

// React components
import SiteWrapper from '../components/SiteWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import SecretsModal from '../components/SecretsModal';

import 'modern-normalize';
import '../styles/globals.css';
import '../fonts/pxplus_ibm_vga8.css';

const query = graphql`
  query IndexLayoutQuery {
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
`;

function TemplateWrapper({ children }) {
  return (
    <StaticQuery query={query}>
      {data => {
        const { siteMetadata, buildTime } = data.site;

        return (
          <div className="content">
            <Container>
              <SiteWrapper>
                <Helmet>
                  <title>{siteMetadata.title}</title>
                  <meta name="description" content={siteMetadata.description} />
                  <meta name="keywords" content="aquellex, gameboy, musician, chiptune, osu" />
                  <meta property="og:site_name" content={siteMetadata.title} />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content={siteMetadata.title} />
                  <meta property="og:description" content={siteMetadata.description} />
                </Helmet>
                <Konami
                  konami={[76, 79, 67, 82, 73, 65, 78]}
                  easterEgg={() => window.open('https://twitter.com/locrian_memes')}
                />
                <Konami
                  konami={[77, 85, 70, 71, 79]}
                  easterEgg={() =>
                    (window.location.href = 'https://www.youtube.com/watch?v=NtSgWZbL_kE')
                  }
                />
                <SecretsModal />
                <Header />
                <main>{children}</main>
              </SiteWrapper>
              <Footer updated={buildTime} />
            </Container>
          </div>
        );
      }}
    </StaticQuery>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
