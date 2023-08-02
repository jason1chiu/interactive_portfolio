import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { ADD_INTEREST } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { MdAddCircle } from "react-icons/md";

const AddInterestForm = ({ show, setShow }) => {
  const [formData, setFormData] = useState({});
  const [addInterest] = useMutation(ADD_INTEREST, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addInterest({ variables: formData });
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Interest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Interest</Form.Label>
            <Form.Control
              type="text"
              placeholder="Interest"
              name="interest"
              value={formData.interest || ""}
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

export default AddInterestForm;
