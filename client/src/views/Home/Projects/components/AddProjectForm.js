import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { Button, Modal, Form, Image } from "react-bootstrap";
import defaultImage from "../../../../assets/defaultImage.png";
import { MdAddCircle } from "react-icons/md";

const AddProjectForm = ({ show, setShow }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: "",
    liveLink: "",
    codeLink: "",
  });
  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [addProject] = useMutation(ADD_PROJECT, {
    onCompleted: (data) => {
      // handle when mutation is complete
      console.log(data);
    },
    onError: (error) => {
      // handle errors
      console.error(error);
    },
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      project.image = reader.result;
      setProject({ ...project });
    };
    reader.readAsDataURL(file);
    setFile(file);
    setFileName(file.name);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addProject({ variables: project });

      setProject({
        name: "",
        description: "",
        image: "",
        liveLink: "",
        codeLink: "",
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
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="name"
                value={project.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as={"textarea"}
                rows={3}
                placeholder="Description"
                name="description"
                value={project.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Code Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Code Link"
                name="codeLink"
                value={project.codeLink}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Live Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Live Link"
                name="liveLink"
                value={project.liveLink}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.File
                id="custom-file"
                label={fileName || "Upload a project image"}
                custom
                onChange={handleFileChange}
              />
              <Image
                className="mt-3"
                style={{ width: "100px", borderRadius: "5%" }}
                src={project.image || defaultImage}
                alt="image"
              />
            </Form.Group>
            <Button className="customButton" variant="primary" type="submit">
            <MdAddCircle />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProjectForm;
