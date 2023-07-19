import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ABOUT } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";

const AddAboutForm = ({ show, setShow }) => {
  const [about, setAbout] = useState({
    information: "",
    background: "",
    education: "",
    interests: "",
  });

  const [addAbout, { error }] = useMutation(ADD_ABOUT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAbout({
      ...about,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAbout({ variables: about });

      setAbout({
        information: "",
        background: "",
        education: "",
        interests: "",
      });

      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Information</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
                placeholder="Information"
                name="information"
                value={about.information}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Background</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
                placeholder="Background"
                name="background"
                value={about.background}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
                placeholder="Education"
                name="education"
                value={about.education}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Interests</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
                placeholder="Interests"
                name="interests"
                value={about.interests}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button className="customButton" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAboutForm;
