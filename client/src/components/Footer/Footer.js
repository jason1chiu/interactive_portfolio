import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="mt-auto py-3 custom-footer">
      <Row>
        <Col className="text-center">
          <p className="subheading">&copy; {new Date().getFullYear()} Your Name</p>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="customLink">
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <span className="mx-2">|</span>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="customLink">
                LinkedIn
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <span className="mx-2">|</span>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="mailto:your.email@example.com" className="customLink">
                Email
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;