import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesBody from '../components/GamesBody'
import styles from './noScrollBar.module.css'

const GamesPage = () => (
  <main className={styles.container}>
    <NavigationHeader activeTab = "Games" />
    <GamesBody />
    <Footer />
  </main>
)

export default GamesPage