import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import AboutBody from "../components/AboutBody"

const AboutPage = () => (
  <main>
    <NavigationHeader activeTab = "About" />
    <AboutBody />
    <Footer />
  </main>
)

export default AboutPage