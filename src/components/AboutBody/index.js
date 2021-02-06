import React from 'react'

import OldGuysImage from '../Images/OldGuysImage'
import ArenaImage from '../Images/ArenaImage'
import GamesImage from '../Images/GamesImage'
import GuysImage from '../Images/GuysImage'
import styles from './style.module.css'

const AboutBody = () => (
    <section className={styles.section}>
        <div className={styles.cardsContainer}>

            <p className={styles.cardTitle}>What is G4U ?</p>
            <div className={styles.card}>
                <div className={styles.text}>
                    <p className={styles.firstText}>A gaming and esports hub that empowers over 5 million gamers.</p>
                    <p className={styles.secondText}>We've built a safe and convenient space to connect, share knowledge, and exchange digital goods.</p>
                </div>
                <div className={styles.image}>
                    <GuysImage />
                </div>
            </div>

            <p className={styles.cardTitleReverse}>What can you do on G4U ?</p>
            <div className={styles.card}>
                <div className={styles.imageReverse}>
                    <GamesImage />
                </div>
                <div className={styles.textReverse}>
                    <p className={styles.firstTextReverse}>Buy video game digital items such as in-game items, gift cards, games and more.</p>
                    <p className={styles.secondTextReverse}>All transactions are safe and secure, backed by our G4U Guarantee.</p>
                </div>
            </div>

            <p className={styles.cardTitle}>Who we are ?</p>
            <div className={styles.card}>
                <div className={styles.text}>
                    <p className={styles.firstText}>We're a group of passionate gamers who started off with the goal of empowering gamers by offering a safe and reliable place to monetize your hard earned digital goods.</p>
                </div>
                <div className={styles.image}>
                    <OldGuysImage />
                </div>
            </div>

            <p className={styles.cardTitleReverse}>Where we are going ?</p>
            <div className={styles.card}>
                <div className={styles.imageReverse}>
                    <ArenaImage />
                </div>
                <div className={styles.textReverse}>
                    <p className={styles.firstTextReverse}>We aim to continue to empower our community by staying on top of trends and by constantly improving our platform to the user needs.</p>
                    <p className={styles.secondTextReverse}>We've also set our sights on eSports and we're ready to help you level up in your favorite games.</p>
                </div>
            </div>
        </div>
    </section>
)

export default AboutBody;