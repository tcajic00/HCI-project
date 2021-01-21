import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesContainer from '../components/GamesContainer'

const GamesPage = () => (
  <main>
    <NavigationHeader activeTab = "Games" />
    <GamesContainer />
    <Footer />
  </main>
)

export default GamesPage