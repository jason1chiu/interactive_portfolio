import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../../../../../utils/mutations";

function ProjectForm({ show, handleCloseModal }) {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    image: "",
    liveLink: "",
    codeLink: "",
  });

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addProject({
        variables: { ...formState },
      });
      setFormState({ name: "", description: "", image: "", liveLink: "", codeLink: "" });
      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image"
              name="image"
              value={formState.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Live Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Live Link"
              name="liveLink"
              value={formState.liveLink}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Code Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Code Link"
              name="codeLink"
              value={formState.codeLink}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {error && (
            <Modal.Footer>
              <p style={{ color: "red" }}>Something went wrong...</p>
            </Modal.Footer>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectForm;
