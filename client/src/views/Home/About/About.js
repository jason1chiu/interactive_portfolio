import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { MdAddCircle, MdEdit } from "react-icons/md";
import InformationCard from "./components/InformationCard";
import BackgroundCard from "./components/BackgroundCard";
import EducationCard from "./components/EducationCard";
import InterestsCard from "./components/InterestsCard";
import AddProfileForm from "./components/AddProfileForm";
import EditProfileForm from "./components/EditProfileForm";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";
import Auth from "../../../utils/auth";

const About = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  const hasData = data && data.getPortfolio.about;
  const avatar =
    data && data.getPortfolio.about
      ? data.getPortfolio.about.avatar
      : "https://via.placeholder.com/300";

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
              <EditProfileForm show={showEdit} setShow={setShowEdit} />
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
              <AddProfileForm show={showAdd} setShow={setShowAdd} />
            </Col>
          )}
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
          <Image
            src={avatar}
            alt="Your Description Here"
            fluid
            style={{
              borderRadius: "10%", // This will give the image slightly rounded corners
              border: "2px solid black", // This will add a 2px black border around the image
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // This will add a slight shadow around the image
              objectFit: "cover", // This will make sure the image covers the full width and height of its container, while maintaining its aspect ratio
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
