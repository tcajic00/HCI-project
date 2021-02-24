import React, { useState } from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import GamesBody from '../components/GamesBody'
import styles from './noScrollBar.module.css'
import {TitleComponent} from '../components/Title'

const GamesPage = () => {
  const [searchInput, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  
  
return(
  <main className={styles.container}>
    <TitleComponent title="Games" />
    <NavigationHeader handler={handleInput} input={searchInput} activeTab = "Games" />
    <GamesBody input={searchInput}/>
    <Footer />
  </main>
)
}
export default GamesPage