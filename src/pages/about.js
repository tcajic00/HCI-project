import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import AboutBody from "../components/AboutBody"
import AboutImage from '../components/Images/AboutImage'
import styles from './noScrollBar.module.css'
import {TitleComponent} from '../components/Title'

const AboutPage = () => (
  <main className={styles.container}>
    <TitleComponent title="About" />
    <NavigationHeader activeTab = "About" />
    <AboutImage />
    <AboutBody />
    <Footer />
  </main>
)

export default AboutPage