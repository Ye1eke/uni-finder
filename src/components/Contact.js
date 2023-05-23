import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='container'>
      <div className='contact__wrap'>
        <div className='contact__same'>
            <img src='images/contact.jpg' alt='contact'/>
        </div>

        <div className='contact__same'>
            <h2>Have a question?</h2>
            <a href="#" className='btn'>Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
