import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "../components/gallery"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, dir: {regex: "/images/(art)|(camera)/"}}) {
        edges {
          node {
            base
            dir
            childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
      }
    }
  `)
  return (
    <Layout>
    <Seo title="Visual Arts" />
    <h1 style={{fontFamily: 'Fanwood Text'}}>Visual Arts</h1>
    <p>I love painting and taking photos in my free time.</p>
    <p>Check out my <a href="https://estyduck.artstation.com/">Artstation</a> for more!</p>
    <hr></hr>
      <Gallery path={"/images/art/people"} data={data} title={"People"}/>
    <hr></hr>
      <Gallery path={"/images/art/animals"} data={data} title={"Animals"}/>
    <hr></hr>
      <Gallery path={"/images/art/landscape"} data={data} title={"Landscapes"}/>
    <hr></hr>
      <Gallery path={"/images/camera/photos"} data={data} title={"Photos"}/>
    </Layout>
  )
}


export default IndexPage
