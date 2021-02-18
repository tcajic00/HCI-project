import React from 'react'
import Img from 'gatsby-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from './game.module.css'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import PopularGamesContainer from '../components/PopularGamesContainer'
import {TitleComponent} from '../components/Title'
import style from '../pages/noScrollBar.module.css'

const Games = ({ pageContext }) => {
  const { price, title, introduction, mainImage, firstPharagraph, firstImage,
    secondImage, secondPharagraph, thirdPharagraph, keyFeatures, thirdImage,
    fourthImage, systemRequirements, info } = pageContext
 
  return (
    <section className={style.container}>
        <TitleComponent title={title} />
        <NavigationHeader activeTab = "Games" />
        <main className={styles.container}>
          <div className={styles.card}>

            <div className={styles.firstPharagraph}>
              <Img fluid={mainImage.fluid} className={styles.mainImage}/>
              <div className={styles.intro}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>{price}</p>
                <div className={styles.buttonContainer}>
                  <div className={styles.button}>
                    <p className={styles.buttonText}>Buy</p>
                  </div>
                </div>
                <p className={styles.introduction}>{renderRichText(introduction)}</p>
              </div>
            </div>

            <div className={styles.secondPharagraph}>
              <p className={styles.firstText}>{renderRichText(firstPharagraph)}</p>
              <Img fluid={firstImage.fluid} className={styles.firstImage}/>
            </div>

            <div className={styles.thirdPharagraph}>
              <Img fluid={secondImage.fluid} className={styles.secondImage}/>
              <p className={styles.secondText}>{renderRichText(secondPharagraph)}</p>
            </div>

            <div className={styles.fourthPharagraph}>
              <div className={styles.textFeatures}>
                <p className={styles.thirdText}>{renderRichText(thirdPharagraph)}</p>
                <p className={styles.keyFeatures}>{renderRichText(keyFeatures)}</p>
                <p className={styles.info}>{renderRichText(info)}</p>
              </div>
              <Img fluid={thirdImage.fluid} className={styles.thirdImage}/>
            </div>

            <div className={styles.fifthPharagraph}>
              <Img fluid={fourthImage.fluid} className={styles.fourthImage}/>
              <p className={styles.fourthText}>{renderRichText(systemRequirements)}</p>
            </div>

          </div>
        </main>
        <PopularGamesContainer />
        <Footer />
    </section>
  )
}
 
export default Games