import React from 'react'
import Contact from '../Components/Contact'
import './ContactContainer.css'

const ContactContainer = (props) => {
    return(
        <div className="contact">
            <br/><br/><br/>
            <p className="contact-me-here">
                Contact Form
            </p>
            <Contact/>
        </div>
    )
}

export default ContactContainer