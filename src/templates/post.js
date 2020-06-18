import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  const { title, date } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">Go to home</Link> <br />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default IndexPage
