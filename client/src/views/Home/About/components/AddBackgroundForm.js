import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { ADD_BACKGROUND } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";

const AddBackgroundForm = ({ show, setShow }) => {
  const [formData, setFormData] = useState({});
  const [addBackground] = useMutation(ADD_BACKGROUND, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "startYear" || name === "endYear" ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addBackground({ variables: formData });
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Background</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              value={formData.jobTitle || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company"
              name="company"
              value={formData.company || ""}
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
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              name="description"
              value={formData.description || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button className="customButton" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBackgroundForm;
