import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const GuysImage = () => {
  const data = useStaticQuery(graphql`
  query GuysImageQuerry {
    desktop: file(relativePath: {eq: "guys.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 90) {
          aspectRatio
          base64
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className={styles.titleImage}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
    </BackgroundImage>
  )
}

export default GuysImage