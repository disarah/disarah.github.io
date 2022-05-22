import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  const post = data.markdownRemark
  //const { frontmatter, html } = data //markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 style={{fontFamily: "Fanwood Text"}}>{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.showDate && <span>{post.frontmatter.date}</span>}</h3>
          <Img 
            fluid={featuredImgFluid} 
            alt = {post.frontmatter.featuredImageAlt }/>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        showDate
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1050) {
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
`
