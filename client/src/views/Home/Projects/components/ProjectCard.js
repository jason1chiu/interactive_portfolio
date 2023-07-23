import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Auth from "../../../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const ProjectCard = ({ projects }) => {
  const [showAdd, setShowAdd] = useState(false);

  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  const title =
    data && data.getPortfolio.projects
      ? data.getPortfolio.projects.title
      : "Project Title";
  const description =
    data && data.getPortfolio.projects
      ? data.getPortfolio.projects.description
      : "Project Description";
  const codeLink =
    data && data.getPortfolio.projects
      ? data.getPortfolio.projects.codeLink
      : "https://github.com";
  const liveLink =
    data && data.getPortfolio.projects
      ? data.getPortfolio.projects.liveLink
      : "https://github.com";

  const image =
    data && data.getPortfolio.projects
      ? data.getPortfolio.projects.image
      : "https://via.placeholder.com/300";

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="my-3 shadow" style={{ maxWidth: "600px" }}>
      <Card.Img
        variant="top"
        src={image || "https://via.placeholder.com/500"}
        alt={image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
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
