import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ABOUT } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { Button, Modal, Form } from "react-bootstrap";

const AddAboutForm = ({ show, setShow }) => {

  const [about, setAbout] = useState({
    information: "",
    background: "",
    education: "",
    interests: "",
    avatar: "",
  });
  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [addAbout] = useMutation(ADD_ABOUT, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAbout({
      ...about,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      about.avatar = reader.result;
      setAbout({ ...about });
    }
    reader.readAsDataURL(file);
    setFile(file);
    setFileName(file.name);
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
        avatar: "",
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
            <Form.Group>
              <Form.Label>Avatar</Form.Label>
              <Form.File
                id="custom-file"
                label={fileName || "Upload an image"}
                custom
                onChange={handleFileChange}
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
