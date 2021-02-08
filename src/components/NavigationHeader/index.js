import React from 'react'

import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'

import styles from './style.module.css'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
      <Navigation />
      <NavigationBar activeTab={activeTab}/>
  </section>
)

export default NavigationHeader