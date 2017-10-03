const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              layout
              path
            }
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const { frontmatter } = node

        createPage({
          path: frontmatter.path,
          // Feel free to set any `layout` as you'd like in the frontmatter, as
          // long as the corresponding template file exists in src/templates.
          // If no template is set, it will fall back to the default `page`
          // template.
          component: path.resolve(`./src/templates/${frontmatter.layout || 'page'}.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: frontmatter.path
          }
        })
      })
      resolve()
    })
  })
}
