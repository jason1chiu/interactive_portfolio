import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import { GET_SKILLS } from '../../utils/queries';
import { ADD_SKILL, UPDATE_SKILL, DELETE_SKILL } from '../../utils/mutations';

function SkillManager() {
  const { loading, error, data } = useQuery(GET_SKILLS);
  const [addSkill] = useMutation(ADD_SKILL);
  const [updateSkill] = useMutation(UPDATE_SKILL);
  const [deleteSkill] = useMutation(DELETE_SKILL);

  // State for form inputs
  const [formState, setFormState] = useState({
    skill: '',
    level: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // If the formState has an id, it's an existing skill, so update it
      if (formState.id) {
        await updateSkill({
          variables: { ...formState },
          refetchQueries: [{ query: GET_SKILLS }],
        });
      } else {
        // Otherwise, it's a new skill, so add it
        await addSkill({
          variables: { ...formState },
          refetchQueries: [{ query: GET_SKILLS }],
        });
      }
      // Clear form inputs
      setFormState({
        skill: '',
        level: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete skill
  const handleDeleteSkill = async (skillId) => {
    try {
      await deleteSkill({
        variables: { id: skillId },
        refetchQueries: [{ query: GET_SKILLS }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <h1>Skill Manager</h1>

      {/* Form for adding/updating skills */}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formSkill">
          <Form.Label>Skill</Form.Label>
          <Form.Control
            type="text"
            name="skill"
            placeholder="Enter skill"
            value={formState.skill}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="text"
            name="level"
            placeholder="Enter level"
            value={formState.level}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* List of existing skills */}
      <Row>
        {data.skills.map((skill) => (
          <Col md={4} key={skill.id}>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>{skill.skill}</Card.Title>
                <Card.Text>{skill.level}</Card.Text>
                <Button variant="danger" onClick={() => handleDeleteSkill(skill.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SkillManager;