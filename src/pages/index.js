import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HomeImage from '../components/Images/Home'
import PopularGamesContainer from '../components/PopularGamesContainer'
import PopularNewsContainer from '../components/PopularNewsContainer'
import styles from './noScrollBar.module.css'

const IndexPage = () => {
  return(
  <main className={styles.container}>
    <NavigationHeader activeTab = "Home"/>
    <HomeImage />
    <PopularGamesContainer />
    <PopularNewsContainer />
    <Footer />
  </main>
  )
  
}

export default IndexPage