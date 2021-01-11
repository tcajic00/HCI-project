import React from 'react'
import Logo from '../Logo'

import SearchBar from '../SearchBar'
import styles from './style.module.css'

const Navigation = () => (
  <section className={styles.navigation}>
      <Logo />
      <SearchBar />
  </section>
)

export default Navigation