import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'
import NewsMenuImage from '../components/Images/NewsMenuImage'
import styles from './noScrollBar.module.css'

const NewsPage = () => (
  <main className={styles.container}>
    <NavigationHeader activeTab = "News" />
    <NewsMenuImage />
    <NewsContainer />
    <Footer />
  </main>
)

export default NewsPage