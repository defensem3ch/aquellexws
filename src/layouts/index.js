/* eslint-env browser */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import Helmet from 'react-helmet';
import Konami from 'react-konami';

import '../fonts/pxplus_ibm_vga8.css';
import 'modern-normalize';
import '../styles/globals.css';

// React components
import SiteWrapper from '../components/SiteWrapper';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import SecretsModal from '../components/SecretsModal';

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
                  <meta
                    property="og:image"
                    content={siteMetadata.siteUrl + withPrefix('/img/highres1000.png')}
                  />
                </Helmet>
                <Konami
                  konami={[76, 79, 67, 82, 73, 65, 78]}
                  easterEgg={() => window.open('https://twitter.com/locrian_memes')}
                />
                <Konami
                  konami={[65, 78, 65, 77, 65, 78, 65, 71, 85, 67, 72, 73]}
                  easterEgg={() => {
                    window.location.href = 'https://aquellex.ws/goodies/anamanaguchi-review';
                  }}
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
