import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';

const Navigation = () => {
  const location = useLocation();
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        My Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {location.pathname === "/" && (
            <>
              <Nav.Link onClick={event => handleScrollToSection(event, 'about-section')}>
                About Me
              </Nav.Link>
              <Nav.Link onClick={event => handleScrollToSection(event, 'skills-section')}>
                Skills
              </Nav.Link>
              <Nav.Link onClick={event => handleScrollToSection(event, 'projects-section')}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
          {location.pathname === "/blog" && (
            <>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
          {location.pathname === "/signup" && (
            <>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </>
          )}
          {location.pathname === "/login" && (
            <>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
          {Auth.loggedIn() && (
            <>
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
              <Button variant="link" onClick={logout}>
                Logout
              </Button>
            </>
          )}
          {!Auth.loggedIn() && location.pathname !== "/login" && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;