import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Seo from "../components/seo"
import TagsPage from "../components/tags"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Layout>
          <Seo title="Work" />
          <h1 style={{fontFamily: 'Fanwood Text'}}>Work</h1>
          <TagsPage />
          <div className="image-grid">
            {Posts}
          </div>
          <div style={{ margin: '2em' }}></div>
        </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { nin: ["Other"] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            tags
            showDate
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`