import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'
import NewsMenuImage from '../components/Images/NewsMenuImage'
import styles from './noScrollBar.module.css'
import {TitleComponent} from '../components/Title'

const NewsPage = () => (
  <main className={styles.container}>
    <TitleComponent title="News" />
    <NavigationHeader activeTab = "News" />
    <NewsMenuImage />
    <NewsContainer />
    <Footer />
  </main>
)

export default NewsPage