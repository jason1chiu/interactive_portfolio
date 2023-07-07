import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { Form, Button } from 'react-bootstrap';

function ProfileManager() {
  const [formState, setFormState] = useState({
    aboutMe: '',
    education: '',
    skills: '',
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="About Me"
          name="aboutMe"
          onChange={handleInputChange}
          value={formState.aboutMe}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Education</Form.Label>
        <Form.Control
          type="text"
          placeholder="Education"
          name="education"
          onChange={handleInputChange}
          value={formState.education}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          placeholder="Skills"
          name="skills"
          onChange={handleInputChange}
          value={formState.skills}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Profile
      </Button>
    </Form>
  );
}

export default ProfileManager;