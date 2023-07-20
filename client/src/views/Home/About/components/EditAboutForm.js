import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_ABOUT } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";

const EditAboutForm = ({ show, setShow }) => {
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  const [about, setAbout] = useState({
    information: data.getPortfolio.about.information,
    background: data.getPortfolio.about.background,
    education: data.getPortfolio.about.education,
    interests: data.getPortfolio.about.interests,
  });

  const [updateAbout] = useMutation(UPDATE_ABOUT, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

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
      await updateAbout({ variables: about });

      setAbout({
        information: about.information,
        background: about.background,
        education: about.education,
        interests: about.interests,
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
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Information</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
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
                placeholder={about.background}
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
                name="interests"
                value={about.interests}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAboutForm;
