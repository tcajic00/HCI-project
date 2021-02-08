import React from 'react'

import styles from './style.module.css'

import { navs as navTabs } from '../../constants'

import { Link } from 'gatsby'

const loggedIn = () => !!localStorage.getItem('loggedIn');


const NavigationBar = ({ activeTab, useThisStyle }) => {
  
  return (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} style={{textDecoration: 'none'}}>
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <Link to={'/login'}>
          <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
            {loggedIn() ? 'Logout' : 'Login'}
          </li>
        </Link>
    </nav>
  )
}

export default NavigationBar