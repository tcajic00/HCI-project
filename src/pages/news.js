import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'
import NewsMenuImage from '../components/Images/NewsMenuImage'

const NewsPage = () => (
  <main>
    <NavigationHeader activeTab = "News" />
    <NewsMenuImage />
    <NewsContainer />
    <Footer />
  </main>
)

export default NewsPage