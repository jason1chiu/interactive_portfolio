import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_BACKGROUND } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";

const EditBackgroundForm = ({ show, setShow, id }) => {
  const { data } = useQuery(GET_PORTFOLIO);
  const [formData, setFormData] = useState(
    data.getPortfolio.background.find((background) => background._id === id)
  );
  const [updateBackground] = useMutation(UPDATE_BACKGROUND, {
    variables: { _id: id, ...formData },
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
      await updateBackground();
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Background</Modal.Title>
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
              name="startYear"
              value={formData.startYear || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type="number"
              name="endYear"
              value={formData.endYear || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
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

export default EditBackgroundForm;
