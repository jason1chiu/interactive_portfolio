import React, { useState } from "react";
import * as DiIcons from "react-icons/di";
import { useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { ADD_SKILL } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const AddSkillForm = ({ show, setShow }) => {
  const [skill, setSkill] = useState({ name: "", iconClassName: "" });

  const [addSkill] = useMutation(ADD_SKILL, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSkill({
      ...skill,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const iconClassNameFull = `Di${skill.iconClassName}`;

      await addSkill({
        variables: { ...skill, iconClassName: iconClassNameFull },
      });

      setSkill({ name: "", iconClassName: "" });

      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Skill Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Skill Name"
              name="name"
              value={skill.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Skill</Form.Label>
            <Form.Control
              as="select"
              name="iconClassName"
              value={skill.iconClassName}
              onChange={handleInputChange}
            >
              <option value="">Select an icon...</option>
              {Object.keys(DiIcons).map((iconKey) => {
                // Remove the "Di" prefix from the iconKey
                const iconClassName = iconKey.substring(2);
                return (
                  <option key={iconKey} value={iconClassName}>
                    {iconClassName}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button className="customButton" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddSkillForm;
