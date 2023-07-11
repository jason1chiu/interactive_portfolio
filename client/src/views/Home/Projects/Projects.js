import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'This is project 1.', img: 'img1.jpg', link: '#' },
    { id: 2, title: 'Project 2', description: 'This is project 2.', img: 'img2.jpg', link: '#' },
    { id: 3, title: 'Project 3', description: 'This is project 3.', img: 'img3.jpg', link: '#' },
    { id: 4, title: 'Project 4', description: 'This is project 4.', img: 'img4.jpg', link: '#' },
    { id: 5, title: 'Project 5', description: 'This is project 5.', img: 'img5.jpg', link: '#' },
    { id: 6, title: 'Project 6', description: 'This is project 6.', img: 'img6.jpg', link: '#' },
  ];

  return (
    <Container id='projects-section'>
      <Row className='justify-content-center'>
        <Col md={12}>
          <h1 className='text-center subheading'>My Projects</h1>
          <Row>
            {projects.map((project) => (
              <Col md={4} key={project.id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;