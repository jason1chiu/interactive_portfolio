import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_EDUCATION } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";
import { MdUpdate } from "react-icons/md";

const EditEducationForm = ({ show, setShow, id }) => {
  const { data } = useQuery(GET_PORTFOLIO);
  const [formData, setFormData] = useState(
    data.getPortfolio.education.find((education) => education._id === id)
  );
  const [updateEducation] = useMutation(UPDATE_EDUCATION, {
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
      await updateEducation();
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Education</Modal.Title>
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
          <Button className="customButton" variant="primary" type="submit">
            <MdUpdate />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditEducationForm;
