const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const post = path.resolve("src/templates/post.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              path
              date(formatString: "DD/MM")
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      const { frontmatter } = node

      createPage({
        path: frontmatter.path,
        component: post,
        context: {
          path: frontmatter.path,
        },
      })
    })
  })
}
