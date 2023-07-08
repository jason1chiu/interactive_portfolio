import React from 'react';
import ContactForm from '../../../components/ContactForm/ContactForm';

const Contact = () => {
  const handleContact = contactInfo => {
    // Handle contact form submission here
    console.log(contactInfo);
  };

  return (
    <div id='contact-section' className="text-center">
      <h1>Contact Me</h1>
      <ContactForm handleContact={handleContact} />
    </div>
  );
};

export default Contact;