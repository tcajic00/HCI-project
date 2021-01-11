import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import ContactBody from "../components/ContactBody"

const ContactPage = () => (
  <main>
    <NavigationHeader activeTab = "Contact" />
    <ContactBody />
    <Footer />
  </main>
)

export default ContactPage