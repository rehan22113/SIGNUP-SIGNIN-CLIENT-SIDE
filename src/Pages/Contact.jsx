import React from 'react'
import ContactForm from '../Components/Contact_Form'
import NavBar from '../Components/Nav_bar'
import Topbar from '../Components/Top_bar'
import Footer from '../Components/Footer'
const ContactUs =()=>{
    return<>
    <Topbar />
    <NavBar/>
        <ContactForm />
        <Footer />
    </>
}

export default ContactUs