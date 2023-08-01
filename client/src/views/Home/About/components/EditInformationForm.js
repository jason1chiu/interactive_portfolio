import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Modal, Form, Image } from "react-bootstrap";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_INFORMATION } from "../../../../utils/mutations";

const EditInformationForm = ({ show, setShow }) => {
  const { data } = useQuery(GET_PORTFOLIO);
  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [formData, setFormData] = useState({
    name: data.getPortfolio.information.name,
    title: data.getPortfolio.information.title,
    location: data.getPortfolio.information.location,
    avatar: data.getPortfolio.information.avatar,
  });

  const [updateInformation, { error }] = useMutation(UPDATE_INFORMATION, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      formData.avatar = reader.result;
      setFormData({ ...formData });
    };
    reader.readAsDataURL(file);
    setFile(file);
    setFileName(file.name);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateInformation({
        variables: {
          name: formData.name || "",
          title: formData.title || "",
          location: formData.location || "",
          avatar: formData.avatar || "",
        },
      });
      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avatar</Form.Label>
            <Form.File
              id="custom-file"
              label="Upload an image"
              custom
              onChange={handleFileChange}
            />
            <Image
              style={{ width: "100px", borderRadius: "5%" }}
              src={formData.avatar}
              alt="avatar"
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

export default EditInformationForm;
