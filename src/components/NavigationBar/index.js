import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
      <li className={styles.active}>Home</li>
      <li>About</li>
      <li>Games</li>
      <li>News & Reviews</li>
      <li>Contact</li>
      <li>Cart</li>
      <li>Sign In</li>
  </nav>
)

export default NavigationBar