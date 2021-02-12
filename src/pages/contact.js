import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import ContactBody from "../components/ContactBody"
import ContactImage from '../components/Images/ContactImage'
import styles from './noScrollBar.module.css'
import {TitleComponent} from '../components/Title'

const ContactPage = () => (
  <main className={styles.container}>
    <TitleComponent title="Contact" />
    <NavigationHeader activeTab = "Contact" />
    <ContactImage />
    <ContactBody />
    <Footer />
  </main>
)

export default ContactPage