import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const PhoneImage = () => {
  const data = useStaticQuery(graphql`
  query PhoneImageQuerry {
    desktop: file(relativePath: {eq: "phone.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 190, quality: 90) {
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

export default PhoneImage