import React from 'react'

import Navigation from '../Navigation'
import NavigationBar from '../NavigationBar'
import MenuButton from '../MenuButton'
import styles from './style.module.css'

const NavigationHeader = (props) => {
  //console.log(inputProp.input);
return (
  <section className={styles.navigationHeader}>
      <Navigation props={props}/>
      <NavigationBar activeTab={props.activeTab}/>
      <MenuButton activeTab={props.activeTab}/>
  </section>
)
}
export default NavigationHeader