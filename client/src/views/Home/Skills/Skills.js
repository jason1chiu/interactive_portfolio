import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillBadge from '../../../components/SkillBadge/SkillBadge'

const Skills = () => {
  // Replace this with your actual skills
  const skills = ['JavaScript', 'React', 'Node.js'];

  return (
    <Container id='skills-section' className="text-center">
      <h1 className='subheading'>My Skills</h1>
      <Row>
        {skills.map((skill, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <SkillBadge skill={skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;