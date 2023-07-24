import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Auth from "../../../../utils/auth";

const ProjectCard = ({ project }) => {
  const {
    name = "Project Name",
    description = "Project Description",
    image = "https://via.placeholder.com/500",
    liveLink = "https://github.com",
    codeLink = "https://github.com"
  } = project || {};

  return (
    <Card className="my-3 shadow" style={{ maxWidth: "600px" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Row>
          <Col className="text-left">
            <Button
              className="customButton mr-2"
              variant="primary"
              href={codeLink}
              target="_blank"
            >
              <FaGithub />
            </Button>
            <Button
              className="customButton"
              variant="primary"
              href={liveLink}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </Button>
          </Col>
          {Auth.loggedIn() && (
            <Col className="text-right">
              <Button className="customButton" variant="primary">
                <MdEdit />
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
