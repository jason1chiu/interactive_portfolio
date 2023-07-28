import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Typist from "react-typist";
import EditProjectForm from "./EditProjectForm";
import { MdEdit } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import Auth from "../../../../utils/auth";

const ProjectCard = ({ project }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const {
    name = "Project Name",
    description = "Project Description",
    image = "https://via.placeholder.com/500",
    liveLink = "https://github.com",
    codeLink = "https://github.com",
  } = project || {};

  return (
    <Card className="my-3 shadow" style={{ maxWidth: "600px" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={image}
        style={{
          width: "100%", // This will make the image take up the full width of the card
          maxHeight: "400px", // This will set a maximum height for the image
          objectFit: "cover", // This will make sure the image covers the full width and height of its container, while maintaining its aspect ratio
          borderRadius: "calc(.25rem - 1px)", // This will round the top left corner of the image to match the card's border radius
        }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem", fontWeight: "bold" }}>
          <Typist key={name} cursor={{ hideWhenDone: true }}>{name}</Typist>
        </Card.Title>
        <Card.Text style={{ fontSize: "1rem" }}>
          <Typist key={description} cursor={{ hideWhenDone: true }}>{description}</Typist>
        </Card.Text>
        <Row>
          <Col className="text-left">
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>{codeLink}</Tooltip>}
            >
              <Button
                className="customButton mr-2"
                variant="primary"
                href={codeLink}
                target="_blank"
              >
                <FaGithub />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id={`tooltip-bottom`}>{liveLink}</Tooltip>}
            >
              <Button
                className="customButton"
                variant="primary"
                href={liveLink}
                target="_blank"
              >
                <FaExternalLinkAlt />
              </Button>
            </OverlayTrigger>
          </Col>
          {Auth.loggedIn() && (
            <Col className="text-right">
              <Button
                className="customButton"
                variant="primary"
                onClick={handleEditClick}
              >
                <MdEdit />
              </Button>
            </Col>
          )}
        </Row>
      </Card.Body>
      <EditProjectForm
        // refetch={refetch}
        projectId={project._id}
        show={showEditModal}
        setShow={setShowEditModal}
      />
    </Card>
  );
};

export default ProjectCard;
