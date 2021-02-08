import React from 'react'
import styles from './style.module.css'
import {Link} from 'gatsby'

import {navs as navTabs} from '../../constants' 

const Footer = () => (
  <section>
    <footer className={styles.footer}>
        <ul className={styles.container}>
            <div className={styles.div}>
                <div className={styles.logo}></div>
            </div>
        </ul>
        <div>
            <ul className={styles.navigation}>
                {navTabs.map(({tab, to}) =>
                <Link to={to}>
                    <li>{tab}</li>
                </Link>
                )
                }
            </ul>
            <div className={styles.text}>
                <p>Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All copyrights, trade marks, service marks belong to the corresponding owners.</p>
                <p >Design and development: Tomislav Čajić & Antonio Musulin
                <br/>
                <br/>
                E-mail: info@g4u.hr
                <br/>
                Phone: +385 12 345 6789
                </p>
                
            </div>
        </div>
    </footer>
  </section>
)

export default Footer