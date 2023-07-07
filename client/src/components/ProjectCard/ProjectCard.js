import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button variant="primary" href={project.link} target="_blank">Go to Project</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
