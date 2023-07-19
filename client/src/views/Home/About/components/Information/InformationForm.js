import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_INFORMATION } from "../../../../../utils/mutations";

const InformationForm = ({ show, handleClose }) => {
  const [formState, setFormState] = useState({ information: "" });
  const [addInformation] = useMutation(ADD_INFORMATION);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFormState({ information: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addInformation({ variables: { ...formState } });

      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              value={formState.information}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button className="customButton" variant="primary" type="submit">
              Submit
            </Button>
            <Button className="customButton"variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InformationForm;
