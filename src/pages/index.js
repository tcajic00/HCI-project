import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HomeImage from '../components/Images/Home'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home" />
    <HomeImage />
    <Footer />
  </main>
)

export default IndexPage