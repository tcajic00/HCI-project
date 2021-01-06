import React from 'react'

import NavigationBar from '../NavigationBar'
import SearchBar from '../SearchBar'
import styles from './style.module.css'

const Navigation = ({ activeTab }) => (
  <section className={styles.navigation}>
      <SearchBar />
      <NavigationBar activeTab={activeTab} />
  </section>
)

export default Navigation