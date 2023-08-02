import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { ADD_EDUCATION } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { MdAddCircle } from "react-icons/md";

const AddEducationForm = ({ show, setShow }) => {
  const [formData, setFormData] = useState({});
  const [addEducation] = useMutation(ADD_EDUCATION, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]:
        name === "startYear" || name === "endYear" ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addEducation({ variables: formData });
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control
              type="text"
              placeholder="School"
              name="school"
              value={formData.school || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Degree</Form.Label>
            <Form.Control
              type="text"
              placeholder="Degree"
              name="degree"
              value={formData.degree || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Field of Study</Form.Label>
            <Form.Control
              type="text"
              placeholder="Field of Study"
              name="fieldOfStudy"
              value={formData.fieldOfStudy || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Start Year"
              name="startYear"
              value={formData.startYear || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="End Year"
              name="endYear"
              value={formData.endYear || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button className="customButton" variant="primary" type="submit">
            <MdAddCircle />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEducationForm;
