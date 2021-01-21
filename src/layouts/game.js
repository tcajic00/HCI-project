import React from 'react'
import Img from 'gatsby-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from './blog.module.css'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesContainer from '../components/GamesContainer'

const Games = ({ pageContext }) => {
  const { price, title, introduction, mainImage, firstPharagraph, firstImage,
    secondImage, secondPharagraph, thirdPharagraph, keyFeatures, thirdImage,
    fourthImage, systemRequirements, info } = pageContext
 
  return (
    <section>
        <NavigationHeader activeTab = "Games" />
        <main className={styles.container}>
          <h2>{title}</h2>
          <h4>{price}</h4>
          <article>{renderRichText(introduction)}</article>
          <Img fixed={mainImage.fixed} />
          <article>{renderRichText(firstPharagraph)}</article>
          <Img fixed={firstImage.fixed} />
          <Img fixed={secondImage.fixed} />
          <article>{renderRichText(secondPharagraph)}</article>
          <article>{renderRichText(thirdPharagraph)}</article>
          <article>{renderRichText(keyFeatures)}</article>
          <Img fixed={thirdImage.fixed} />
          <Img fixed={fourthImage.fixed} />
          <article>{renderRichText(systemRequirements)}</article>
          <article>{renderRichText(info)}</article>
        </main>
        <GamesContainer />
        <Footer />
    </section>
  )
}
 
export default Games