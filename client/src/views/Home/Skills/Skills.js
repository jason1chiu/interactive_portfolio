import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SkillBadge from "../../../components/SkillBadge/SkillBadge";
import Auth from "../../../utils/auth";
import { MdAddCircle } from "react-icons/md";

const Skills = () => {
  // Replace this with your actual skills
  const skills = ["JavaScript", "React", "Node.js"];

  return (
    <Container id="skills-section" className="text-center">
      <h1 className="subheading">My Skills</h1>
      {Auth.loggedIn() && (
        <Row>
          <Col className="text-center">
            <Button className="customButton" variant="primary">
              <MdAddCircle />
            </Button>
          </Col>
        </Row>
      )}
      <Row>
        {skills.map((skill, idx) => (
          <Col key={idx} sm={6} md={4} lg={3}>
            <SkillBadge skill={skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
