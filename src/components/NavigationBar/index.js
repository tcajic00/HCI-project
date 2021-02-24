import React from 'react'

import styles from './style.module.css'

import { navs as navTabs } from '../../constants'

import { Link } from 'gatsby'

const setItem = (key, item) => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.setItem(key, item)
}

const getItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(item)
}

const removeItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.removeItem(item)
}

export const myLocalStorage = {
  getItem,
  setItem,
  removeItem
}

const loggedIn = () => !!myLocalStorage.getItem('loggedIn');


const NavigationBar = ({ activeTab, useThisStyle }) => {
  
  return (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} style={{textDecoration: 'none'}}>
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <Link to={loggedIn() ? '/' : '/login'} >
          <li onClick={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}} className={"Log in" === activeTab ? styles.active : ''}>
            {loggedIn() ? 'Log out' : 'Log in'}
          </li>
        </Link>
    </nav>
  )
}

export default NavigationBar