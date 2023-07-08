import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Form } from 'react-bootstrap';
import { GET_CONTACT_INFO } from '../../utils/queries';
import { UPDATE_CONTACT_INFO } from '../../utils/mutations';

function ContactManager() {
  const { loading, error, data } = useQuery(GET_CONTACT_INFO);
  const [updateContactInfo] = useMutation(UPDATE_CONTACT_INFO);

  // State for form inputs
  const [formState, setFormState] = useState({
    email: '',
    phoneNumber: '',
    linkedIn: '',
    github: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateContactInfo({
        variables: { ...formState },
        refetchQueries: [{ query: GET_CONTACT_INFO }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Contact Manager</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
            value={formState.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phoneNumber"
            onChange={handleInputChange}
            value={formState.phoneNumber}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter LinkedIn profile URL"
            name="linkedIn"
            onChange={handleInputChange}
            value={formState.linkedIn}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>GitHub</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter GitHub profile URL"
            name="github"
            onChange={handleInputChange}
            value={formState.github}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Contact Info
        </Button>
      </Form>
    </div>
  );
}

export default ContactManager;