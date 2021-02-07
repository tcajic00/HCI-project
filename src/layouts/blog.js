import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from './blog.module.css'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'
import AboutImage from '../components/Images/AboutImage'

const News = ({ pageContext }) => {
  const { firstImage, secondImage, title, info, firstPharagraph, 
    secondPharagraph, thirdPharagraph } = pageContext
 
  return (
    <section>
        <NavigationHeader activeTab = "News" />
        <main className={styles.container}>
          <div className={styles.card}>

            <div className={styles.intro}>
              <p className={styles.title}>{title}</p>
              <p className={styles.info}>{info}</p>
            </div>

            <div className={styles.firstPharagraph}>
              <Img fixed={firstImage.fixed} className={styles.leftImage}/>
              <p className={styles.rightText}>{renderRichText(firstPharagraph)}</p>
            </div>

            <div className={styles.secondPharagraph}>
              <div className={styles.text}>
                <p className={styles.leftTextFirst}>{renderRichText(secondPharagraph)}</p>
                <p className={styles.leftTextSecond}>{renderRichText(thirdPharagraph)}</p>
              </div>
              <Img fixed={secondImage.fixed} className={styles.rightImage}/>
            </div>
          </div>
        </main>
        <NewsContainer/>
        <Footer />
    </section>
  )
}
 
export default News