import React from "react"
import Img from "gatsby-image"

import "./image.css"

const Gallery = ({ path, data, title}) => {
    const filt = new RegExp(path)
    const images = data.allFile.edges.filter(edge => filt.test(edge.node.dir))
    .map((image, key) => <a href="https://www.artstation.com/difriendlygrape/profile"><Img key={key} className="gimage-item" fluid={image.node.childImageSharp.fluid} alt={image.node.base.split(".")[0]}/></a>)
    return (
        <div>
            <h2>{title}</h2>
            <hr></hr>
            <div className="gimage-grid" style={{gridTemplateColumns:"repeat(auto-fill, 1fr)"}}>
                {images}
            </div>
        </div>
    )
}

export default Gallery