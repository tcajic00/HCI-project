import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./style.module.css"

const HomeImage = () => {
  const data = useStaticQuery(graphql`
  query HomeImageQuerry {
    desktop: file(relativePath: {eq: "HomeMain.jpg"}) {
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
      <div>
        <p className={styles.title}>Shop for gaming deals while you chill</p>
        <p className={styles.subTitle}>
        Buy games, gift cards and other digital items. G4U is the safe
          <br /> marketplace where gamers can find the best deals.
        </p>
      </div>
    </BackgroundImage>
  )
}

export default HomeImage