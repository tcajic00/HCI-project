import React from 'react'

import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'
import MenuButton from '../MenuButton'
import styles from './style.module.css'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
      <Navigation />
      <NavigationBar activeTab={activeTab}/>
      <MenuButton activeTab={activeTab}/>
  </section>
)

export default NavigationHeader