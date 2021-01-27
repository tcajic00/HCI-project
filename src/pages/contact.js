import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import ContactBody from "../components/ContactBody"
import ContactImage from '../components/Images/ContactImage'

const ContactPage = () => (
  <main>
    <NavigationHeader activeTab = "Contact" />
    <ContactImage />
    <ContactBody />
    <Footer />
  </main>
)

export default ContactPage