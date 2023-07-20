import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { MdUploadFile, MdAddCircle, MdEdit } from "react-icons/md";
import InformationCard from "./components/InformationCard";
import BackgroundCard from "./components/BackgroundCard";
import EducationCard from "./components/EducationCard";
import InterestsCard from "./components/InterestsCard";
import AddAboutForm from "./components/AddAboutForm";
import EditAboutForm from "./components/EditAboutForm";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";
import Auth from "../../../utils/auth";

const About = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { data } = useQuery(GET_PORTFOLIO);

  const hasData = data && data.getPortfolio.about;

  return (
    <Container id="about-section">
      <h1 className="text-center subheading">About Me</h1>
      {Auth.loggedIn() && (
        <Row>
          {hasData ? (
            <Col className="text-center">
              <Button
                className="customButton"
                variant="primary"
                onClick={() => setShowEdit(true)}
              >
                <MdEdit />
              </Button>
              <EditAboutForm show={showEdit} setShow={setShowEdit} />
            </Col>
          ) : (
            <Col className="text-center">
              <Button
                className="customButton"
                variant="primary"
                onClick={() => setShowAdd(true)}
              >
                <MdAddCircle />
              </Button>
              <AddAboutForm show={showAdd} setShow={setShowAdd} />
            </Col>
          )}

          <Col className="text-center">
            <Button className="customButton" variant="primary">
              <MdUploadFile />
            </Button>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        <Col md={8}>
          <Row>
            <Col md={6} className="mb-4">
              <InformationCard />
            </Col>
            <Col md={6}>
              <BackgroundCard />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <EducationCard />
            </Col>
            <Col md={6} className="mb-4">
              <InterestsCard />
            </Col>
          </Row>
        </Col>

        <Col md={4} className="image-container">
          <Image src="" alt="Your Description Here" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
