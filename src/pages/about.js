import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import AboutBody from "../components/AboutBody"
import AboutImage from '../components/Images/AboutImage'
import styles from './noScrollBar.module.css'

const AboutPage = () => (
  <main className={styles.container}>
    <NavigationHeader activeTab = "About" />
    <AboutImage />
    <AboutBody />
    <Footer />
  </main>
)

export default AboutPage