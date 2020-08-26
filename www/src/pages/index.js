import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
    sd
 
  </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
}
`;
