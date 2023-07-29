import React from "react";
import { Container, Row, Col, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";

const Footer = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  return (
    <Container fluid className="mt-auto py-3 custom-footer">
      <Row>
        <Col className="text-center">
          <p className="subheading">
            &copy; {new Date().getFullYear()} Jason Chiu
          </p>
          <Nav className="justify-content-center">
            <Nav.Item>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Visit my GitHub")}
              >
                <Nav.Link
                  href="https://github.com/jason1chiu"
                  target="_blank"
                  rel="noreferrer"
                  className="customNavLink"
                >
                  GitHub
                </Nav.Link>
              </OverlayTrigger>
            </Nav.Item>
            <Nav.Item>
              <span className="mx-2">|</span>
            </Nav.Item>
            <Nav.Item>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Visit my LinkedIn")}
              >
                <Nav.Link
                  href="https://linkedin.com/in/chien-cheng-chiu-0a0930257"
                  target="_blank"
                  rel="noreferrer"
                  className="customNavLink"
                >
                  LinkedIn
                </Nav.Link>
              </OverlayTrigger>
            </Nav.Item>
            <Nav.Item>
              <span className="mx-2">|</span>
            </Nav.Item>
            <Nav.Item>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Email me")}
              >
                <Nav.Link
                  href="mailto:jasonchiu2@yahoo.com"
                  className="customNavLink"
                >
                  Email
                </Nav.Link>
              </OverlayTrigger>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
