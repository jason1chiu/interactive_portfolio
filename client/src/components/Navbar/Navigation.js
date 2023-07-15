import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";

const Navigation = () => {
  const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="custom-navbar p-3" expand="lg">
      <Navbar.Brand className="customNavbarBrand">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {location.pathname === "/" && (
            <>
              <Nav.Link
                className="customNavLink"
                onClick={(event) =>
                  handleScrollToSection(event, "about-section")
                }
              >
                About Me
              </Nav.Link>
              <Nav.Link
                className="customNavLink"
                onClick={(event) =>
                  handleScrollToSection(event, "skills-section")
                }
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className="customNavLink"
                onClick={(event) =>
                  handleScrollToSection(event, "projects-section")
                }
              >
                Projects
              </Nav.Link>
              <Nav.Link className="customNavLink" as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="customNavLink" as={Link} to="/blog">
                Resume
              </Nav.Link>
            </>
          )}
          {location.pathname === "/blog" && (
            <>
              <Nav.Link className="customNavLink" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="customNavLink" as={Link} to="/blog">
                Resume
              </Nav.Link>
            </>
          )}
          {location.pathname === "/login" && (
            <>
              <Nav.Link className="customNavLink" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="customNavLink" as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="customNavLink" as={Link} to="/blog">
                Resume
              </Nav.Link>
            </>
          )}
          {Auth.loggedIn() && (
            <>
              <Nav.Link className="customNavLink" as={Link} onClick={logout}>
                Logout
              </Nav.Link>
            </>
          )}
          {!Auth.loggedIn() && location.pathname !== "/login" && (
            <Nav.Link className="customNavLink" as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
