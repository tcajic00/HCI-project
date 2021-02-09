import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesContainer from '../components/GamesContainer'
import styles from './noScrollBar.module.css'

const GamesPage = () => (
  <main className={styles.container}>
    <NavigationHeader activeTab = "Games" />
    <GamesContainer />
    <Footer />
  </main>
)

export default GamesPage