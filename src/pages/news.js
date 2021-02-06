import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import NewsContainer from '../components/NewsContainer'
import NewsMenu from '../components/NewsMenu'

const NewsPage = () => (
  <main>
    <NavigationHeader activeTab = "News" />
    <NewsMenu />
    <NewsContainer />
    <Footer />
  </main>
)

export default NewsPage