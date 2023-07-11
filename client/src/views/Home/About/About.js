import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import DetailInformationCard from './components/DetailInformationCard/DetailInformationCard';
import BackgroundCard from './components/BackgroundCard/BackgroundCard';
import EducationCard from './components/EducationCard/EducationCard';
import InterestsCard from './components/InterestsCard/InterestsCard';

const About = () => {
  return (
    <Container id="about-section">
      <h1 className="text-center subheading">About Me</h1>
      <Row className="mt-4">
        <Col md={8}>
          <Row>
            <Col md={6}>
              <DetailInformationCard />
            </Col>
            <Col md={6}>
              <BackgroundCard />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <EducationCard />
            </Col>
            <Col md={6}>
              <InterestsCard />
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <Image src="your-image-url" alt="Your Description Here" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;