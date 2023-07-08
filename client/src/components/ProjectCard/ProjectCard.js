import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className='my-3 shadow' style={{ maxWidth: '600px' }}>
      <Card.Img variant="top" src={project.image || "https://via.placeholder.com/500"} alt={project.image}/>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
        <Button variant="primary" href={project.link} target="_blank">Go to Project</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;