import React, { useState } from 'react'
import './Contact.css'
import Modal from 'react-modal';
import { ContactUsCreateForm } from '../ui-components';
function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleContactClick = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container'>
      <div className='contact__wrap'>
        <div className='contact__same'>
            <img src='images/contact.jpg' alt='contact'/>
        </div>

        <div className='contact__same'>
            <h2>Have a question?</h2>
            <button className='btn' onClick={handleContactClick}>
            Contact us
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Contact Us'
        className='modal'
        overlayClassName='modal-overlay'
      >
        <ContactUsCreateForm />
      </Modal>
    </div>
  )
}

export default Contact
