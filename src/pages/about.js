import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import AboutBody from "../components/AboutBody"
import AboutImage from '../components/Images/AboutImage'

const AboutPage = () => (
  <main>
    <NavigationHeader activeTab = "About" />
    <AboutImage />
    <AboutBody />
    <Footer />
  </main>
)

export default AboutPage