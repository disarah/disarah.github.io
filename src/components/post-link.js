import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./image.css"

const PostLink = ({ post }) => (
  <div className="image-item">
    <div className="container" style = {{ padding:"0"}}>
      <Link to={post.frontmatter.slug}>
        <Img
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid} 
          alt = {post.frontmatter.featuredImageAlt}
        />
        <div className="centered" style={{mixBlendMode: "soft-light" , color: "green"}}>
          {post.frontmatter.title} 
          <br />
          ({post.frontmatter.date})</div>
        <div className="centered" style={{mixBlendMode: "exclusion"}}>
          {post.frontmatter.title} 
          <br />
          ({post.frontmatter.date})</div>
      </Link>
    </div>
  </div>
)

export default PostLink