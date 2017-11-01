// @ts-

'use strict'

const path = require('path')
const slugify = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')

// Regex to parse date and title from the filename
const BLOG_POST_SLUG_REGEX = /^\/blog\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)\/$/

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const { permalink, redirect_from, category, layout, lastUpdated } = node.frontmatter
    const relativePath = createFilePath({ node, getNode, basePath: 'pages' })

    let slug = permalink;

    if (!slug && relativePath.includes('blog')) {
      // Generate final path + graphql fields for blog posts
      const match = BLOG_POST_SLUG_REGEX.exec(relativePath)
      const year = match[1]
      const month = match[2]
      const day = match[3]
      const filename = match[4]

      slug = `/blog/${year}/${month}/${day}/${slugify(filename)}/`

      const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))

      // Blog posts are sorted by date and display the date in their header.
      createNodeField({
        node,
        name: 'date',
        value: date.toJSON()
      })
    }

    if (!slug) {
      slug = relativePath
    }

    console.log(`success Generated slug: ${slug}`)

    // Used to generate URL to view this content.
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })

    // Used to determine a page layout.
    createNodeField({
      node,
      name: 'layout',
      value: layout || '',
    })

    // Used by createPages() to register redirects.
    createNodeField({
      node,
      name: 'redirect',
      value: redirect_from ? JSON.stringify(redirect_from) : '',
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {}

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                fields {
                  redirect
                  slug
                  layout
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug, layout, redirect } = node.fields

        createPage({
          path: slug,
          // Feel free to set any `layout` as you'd like in the frontmatter, as
          // long as the corresponding template file exists in src/templates.
          // If no template is set, it will fall back to the default `page`
          // template. (Hardcoded for `.js` file extension!)
          component: path.resolve(`./src/templates/${layout || 'page'}.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug
          }
        })

        // URL redirect handler
        // Adapted from reactjs/reactjs.org:
        // https://github.com/reactjs/reactjs.org/blob/master/gatsby-node.js#L111
        if (redirect) {
          let toRedirect = JSON.parse(node.fields.redirect)
          if (!Array.isArray(toRedirect)) {
            toRedirect = [toRedirect]
          }

          toRedirect.forEach(fromPath => {
            if (redirectToSlugMap[fromPath] != null) {
              reject(
                `Duplicate redirect detected from "${fromPath}" to:\n` +
                  `* ${redirectToSlugMap[fromPath]}\n` +
                  `* ${slug}\n`
              )
            }

            // A leading "/" is required for redirects to work,
            // But multiple leading "/" will break redirects.
            // For more context see github.com/reactjs/reactjs.org/pull/194
            const toPath = slug.startsWith('/') ? slug : `/${slug}`

            redirectToSlugMap[fromPath] = slug
            createRedirect({
              fromPath: `/${fromPath}`,
              redirectInBrowser: true,
              toPath
            })
          })
        }
      })
      resolve()
    })
  })
}
