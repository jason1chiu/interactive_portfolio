import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SkillBadge from "./components/SkillBadge";
import AddSkillForm from "./components/AddSkillForm"; // new import
import Auth from "../../../utils/auth";
import { MdAddCircle } from "react-icons/md";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";

const Skills = () => {
  const [showAdd, setShowAdd] = useState(false);

  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  const skills = data?.getPortfolio?.skills || [];

  return (
    <Container id="skills-section" className="text-center">
      <h1 className="subheading">My Skills</h1>
      {Auth.loggedIn() && (
        <Row>
          <Col className="text-center">
            <Button
              className="customButton"
              variant="primary"
              onClick={() => setShowAdd(true)}
            >
              <MdAddCircle />
            </Button>
            <AddSkillForm show={showAdd} setShow={setShowAdd} />
          </Col>
        </Row>
      )}
      <Row>
        {skills.map((skill) => (
          <Col key={skill._id} sm={6} md={4} lg={3} className="my-3">
            <SkillBadge skill={skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
