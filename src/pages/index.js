import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {edges.map(item => {
          const { frontmatter } = item.node
          return (
            <Link to={`${frontmatter.path}`} key={frontmatter.path}>
              <h1>{frontmatter.title}</h1>
            </Link>
          )
        })}
      </div>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
