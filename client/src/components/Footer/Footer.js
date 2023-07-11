import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="mt-auto py-3 custom-footer text-white">
      <Row>
        <Col className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Name</p>
          <p>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a> | 
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a> | 
            <a href="mailto:your.email@example.com">Email</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;