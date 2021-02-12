import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesBody from '../components/GamesBody'
import styles from './noScrollBar.module.css'
import {TitleComponent} from '../components/Title'

const GamesPage = () => (
  <main className={styles.container}>
    <TitleComponent title="Games" />
    <NavigationHeader activeTab = "Games" />
    <GamesBody />
    <Footer />
  </main>
)

export default GamesPage