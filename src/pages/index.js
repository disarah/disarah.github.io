import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Hello from "../../static/images/thumb/hello.mp4"
import SocialFollow from "../components/SocialFollow"

import "../styles/main.css"

const IndexPage = () => (
  <main>
    <Seo title="Hello" />
    <div style={{ margin: '10em' }}></div>
    <video style={{width: "min(90vw, 500px)"}} autoPlay playsInline muted>
      <source src={Hello} type="video/mp4" />
    </video>
    <div style={{ margin: '2em' }}></div>
    <p>vvv scroll down vvv</p>
    <div style={{ padding: '10em' }}></div>
    <h1>My name is Sarah Di.</h1>
    <div style={{ margin: '5em' , padding: '3vw'}}>
      <StaticImage
        src= "../../static/images/camera/selfies/profile.png"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A picture of Sarah Di"
        style={{ marginBottom: `1.45rem` }}
        imgStyle={{ borderRadius: '100%', objectFit: "fit" }}
      />
    </div>
    <h2 style={{ margin: '3em' }}>I'm currently a senior in the BXA program at Carnegie Mellon University studying computer science and art. My dream is to combine my love of art and computer science to do good in the world.</h2>
    <p> Click... </p>
    <p style={{ margin: '2em' }}>
      <Link to="/work/">here for my <strong>portfolio</strong></Link>
      <Link to="/about/"> or here to <strong>learn more about me</strong></Link>.
    </p>
    <footer style={{ marginTop: `2rem`,}}>
      © {new Date().getFullYear()} Sarah Di 
      <SocialFollow />
    </footer>
    <div style={{ margin: '4em' }}></div>
  </main>
)

export default IndexPage