import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from './blog.module.css'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'

const News = ({ pageContext }) => {
  const { firstImage, secondImage, title, info, firstPharagraph, 
    secondPharagraph, thirdPharagraph } = pageContext
 
  return (
    <section>
        <NavigationHeader activeTab = "News & Reviews" />
        <main className={styles.container}>
          <h2>{title}</h2>
          <h4>{info}</h4>
          <Img fixed={firstImage.fixed} />
          <article>{renderRichText(firstPharagraph)}</article>
          <Img fixed={secondImage.fixed} />
          <article>{renderRichText(secondPharagraph)}</article>
          <article>{renderRichText(thirdPharagraph)}</article>
        </main>
        <NewsContainer/>
        <Footer />
    </section>
  )
}
 
export default News