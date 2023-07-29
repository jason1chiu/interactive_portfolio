import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_ABOUT } from "../../../../utils/mutations";
import { Button, Modal, Form, Image } from "react-bootstrap";

const EditProfileForm = ({ show, setShow }) => {
  const { data } = useQuery(GET_PORTFOLIO);

  const [about, setAbout] = useState({
    information: data.getPortfolio.about.information,
    background: data.getPortfolio.about.background,
    education: data.getPortfolio.about.education,
    interests: data.getPortfolio.about.interests,
    avatar: data.getPortfolio.about.avatar,
  });

  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      about.avatar = reader.result;
      setAbout({ ...about });
    };
    reader.readAsDataURL(file);
    setFile(file);
    setFileName(file.name);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await updateAbout({ variables: about });

      setFile(result.data.updateAbout.avatar);

      setAbout({
        information: about.information,
        background: about.background,
        education: about.education,
        interests: about.interests,
        avatar: result.data.updateAbout.avatar,
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
            <Form.Group>
              <Form.Label>Avatar</Form.Label>
              <Form.File
                id="custom-file"
                label={fileName || "Upload a file"}
                custom
                onChange={handleFileChange}
                className="mb-3"
              />
              <Image
                style={{ width: "100px", borderRadius: "5%" }}
                src={about.avatar}
                alt="avatar"
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

export default EditProfileForm;
