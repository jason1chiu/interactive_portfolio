import React, { useEffect } from "react";
import { Container, Row, Col, Image, Accordion, Card } from "react-bootstrap";
import InformationCard from "./components/InformationCard";
import BackgroundTable from "./components/BackgroundTable";
import EducationTable from "./components/EducationTable";
import InterestsCard from "./components/InterestsCard";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";

const About = () => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  const avatar =
    data && data.getPortfolio.information
      ? data.getPortfolio.information.avatar
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
      <Row className="my-3">
        <Col
          md={12}
          className="image-container my-3 d-flex justify-content-center align-items-center"
        >
          <Image
            src={avatar}
            alt="Your Description Here"
            fluid
            style={{
              borderRadius: "10%",
              border: "2px solid black",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Information
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <InformationCard />
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Background
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <BackgroundTable />
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Education
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <EducationTable />
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Interests
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <InterestsCard />
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
