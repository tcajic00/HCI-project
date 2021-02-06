import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const Mail = () => {
  const data = useStaticQuery(graphql`
  query MailQuerry {
    desktop: file(relativePath: {eq: "email.png"}) {
      childImageSharp {
        fluid(maxWidth: 210, quality: 95) {
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

export default Mail