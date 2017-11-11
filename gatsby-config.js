module.exports = {
  siteMetadata: {
    title: 'Aquellex',
    description: 'Game Boy Connoiseur.',
    author: {
      name: 'Aquellex',
      url: 'https://twitter.com/resir014',
      email: 'aquellex@f0xpa.ws'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'goodies',
        path: `${__dirname}/src/goodies`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'news-updates',
        path: `${__dirname}/src/news-updates`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://www.aquellex.ws`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#dcffba',
        showSpinner: false
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet'
  ]
}
