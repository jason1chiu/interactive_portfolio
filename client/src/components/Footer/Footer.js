import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Name</p>
            <p>
              <a href="https://github.com/yourusername" target="_blank">GitHub</a> | 
              <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a> | 
              <a href="mailto:your.email@example.com">Email</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;