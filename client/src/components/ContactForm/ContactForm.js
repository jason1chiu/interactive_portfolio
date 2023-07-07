import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ handleContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleContact({ name, email, message });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name" 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Enter message" 
          value={message} 
          onChange={e => setMessage(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;