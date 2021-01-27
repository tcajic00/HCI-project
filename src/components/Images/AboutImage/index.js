import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
  query AboutImageQuerry {
    desktop: file(relativePath: {eq: "About.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
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

export default AboutImage