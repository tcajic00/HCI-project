import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'

const NewsPage = () => (
  <main>
    <NavigationHeader activeTab = "News" />
    <NewsContainer />
    <Footer />
  </main>
)

export default NewsPage