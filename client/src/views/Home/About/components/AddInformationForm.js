import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INFORMATION } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { Button, Modal, Form, Image } from "react-bootstrap";
import defaultAvatar from "../../../../assets/defaultAvatar.png";
import { MdAddCircle } from "react-icons/md";

const AddInformationForm = ({ show, setShow }) => {
  const [formData, setFormData] = useState({});
  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [addInformation] = useMutation(ADD_INFORMATION, {
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
      await addInformation({ variables: formData });
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location || ""}
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
              className="mt-3"
              style={{ width: "100px", borderRadius: "5%" }}
              src={formData.avatar || defaultAvatar}
              alt="avatar"
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

export default AddInformationForm;
