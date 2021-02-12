/* eslint-disable strict */

'use strict';

module.exports = {
  siteMetadata: {
    title: 'Aquellex',
    description: 'popular osu! Game Boy musician',
    siteUrl: 'https://aquellex.ws',
    author: {
      name: 'Aquellex',
      url: 'https://twitter.com/resir014',
      email: 'aquellex@f0xpa.ws',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://www.aquellex.ws`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#dcffba',
        showSpinner: false,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
};
