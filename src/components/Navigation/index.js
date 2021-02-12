import React from 'react'
import Logo from '../Logo'
import { Link } from 'gatsby'
import SearchBar from '../SearchBar'
import styles from './style.module.css'

const Navigation = () => (
  <section className={styles.navigation}>
    <Link to='/' style={{textDecoration: 'none'}}>
      <Logo />
    </Link>
    <SearchBar />
  </section>
)

export default Navigation