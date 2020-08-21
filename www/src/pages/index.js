import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
    {/* <SEO title="Home" /> */}
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}{" "}</h3>
          <div>
            {node.excerpt}
          </div>
        </div>
      ))}
    </div>
 
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
