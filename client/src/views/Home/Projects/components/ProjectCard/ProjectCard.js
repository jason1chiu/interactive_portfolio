import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import Auth from "../../../../../utils/auth";

const ProjectCard = ({ project }) => {
  return (
    <Card className="my-3 shadow" style={{ maxWidth: "600px" }}>
      <Card.Img
        variant="top"
        src={project.image || "https://via.placeholder.com/500"}
        alt={project.image}
      />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
        <Row>
          <Col className="text-left">
            <Button
              className="customButton"
              variant="primary"
              href={project.link}
              target="_blank"
            >
              Go to Project
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
