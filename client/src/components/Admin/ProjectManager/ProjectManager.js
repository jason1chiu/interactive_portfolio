import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProjectForm = ({ handleAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleAddProject({ title, description, link });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Project Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter project title" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Project Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter project description" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicLink">
        <Form.Label>Project Link</Form.Label>
        <Form.Control 
          type="url" 
          placeholder="Enter project link" 
          value={link} 
          onChange={e => setLink(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add Project
      </Button>
    </Form>
  );
};

export default ProjectForm;