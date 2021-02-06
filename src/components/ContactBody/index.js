import React from 'react'

import LocationImage from '../Images/LocationImage'
import PhoneImage from '../Images/PhoneImage'
import MailPhoto from '../Images/Mail'
import styles from './style.module.css'

const ContactBody = () => (
    <section className={styles.section}>
        <div className={styles.cardsContainer}>

            <p className={styles.cardTitle}>E-mail:</p>
            <div className={styles.card}>
                <div className={styles.text}>
                    <p className={styles.firstText}>info@g4u.hr</p>
                </div>
                <div className={styles.image}>
                    <MailPhoto />
                </div>
            </div>

            <p className={styles.cardTitleReverse}>Phone:</p>
            <div className={styles.cardReverse}>
                <div className={styles.imageReverse}>
                    <PhoneImage />
                </div>
                <div className={styles.textReverse}>
                    <p className={styles.firstTextReverse}>+385 12 345 6789</p>
                </div>
            </div>

            <p className={styles.cardTitle}>Address:</p>
            <div className={styles.cardLocation}>
                <div className={styles.text}>
                    <p className={styles.firstTextLocation}>Head Office:</p>
                    <p className={styles.secondTextLocation}>Ulica Matice hrvatske 15, Split, Croatia</p>

                    <p className={styles.firstTextLocation}>Research & Development:</p>
                    <p className={styles.secondTextLocation}>Metković, Croatia</p>
                </div>
                <div className={styles.imageLocation}>
                    <LocationImage />
                </div>
            </div>

        </div>
    </section>
)

export default ContactBody;