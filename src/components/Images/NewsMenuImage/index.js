import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import NewsMenu from '../../NewsMenu'
import styles from "./style.module.css"

const NewsMenuImage = () => {
  const data = useStaticQuery(graphql`
  query NewsMenuImageQuerry {
    desktop: file(relativePath: {eq: "NewsMenu.jpg"}) {
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

    <NewsMenu />

    </BackgroundImage>
  )
}

export default NewsMenuImage