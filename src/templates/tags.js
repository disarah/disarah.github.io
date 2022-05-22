import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import TagsPage from "../components/tags"
import "../components/image.css"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark // can also include totalCount
  return (
    <Layout>
        <h1>{tag}</h1>
        <TagsPage />
        <div className="image-grid">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            //const { title , featuredImage, featuredImageAlt} = node.frontmatter
            return (
              <div className="image-item">
                <div className="container" key={slug} style = {{ padding:"0"}}>
                  <Link to={slug}>
                    <Img 
                        fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                        alt = {node.frontmatter.featuredImageAlt}
                      />
                    <div className="centered">{node.frontmatter.title}</div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}
        <div style={{ margin: '2em' }}></div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid (maxWidth: 600, maxHeight: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`