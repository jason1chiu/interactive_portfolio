import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO, GET_PROJECT } from "../../../../utils/queries";
import { UPDATE_PROJECT, DELETE_PROJECT } from "../../../../utils/mutations";
import { Button, Modal, Form, Image } from "react-bootstrap";
import { MdUpdate, MdDelete } from "react-icons/md";
import defaultImage from "../../../../assets/defaultImage.png";

const EditProjectForm = ({ projectId, show, setShow }) => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: "",
    liveLink: "",
    codeLink: "",
    technologies: "",
  });

  const [, setFile] = useState();
  const [fileName, setFileName] = useState("Upload a project image");

  const { data } = useQuery(GET_PROJECT);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  useEffect(() => {
    if (data) {
      const proj = data.projects.find((p) => p._id === projectId);
      if (proj) {
        setProject(proj);
        if (proj.image) {
          setFileName(proj.image);
        }
      }
    }
  }, [data, projectId]);

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateProject({
        variables: {
          _id: projectId,
          ...project,
        },
      });

      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete button click
  const handleDeleteClick = async () => {
    try {
      await deleteProject({ variables: { _id: projectId } });
      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  // Handle file change
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

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
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
              <Form.Label>Technologies</Form.Label>
              <Form.Control
                type="text"
                placeholder="Technologies"
                name="technologies"
                value={project.technologies}
                onChange={handleInputChange}
              />
            </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.File
              id="custom-file"
              label={fileName}
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
          <Button className="customButton mr-2" variant="primary" type="submit">
            <MdUpdate />
          </Button>
          <Button
            className="customButton"
            variant="danger"
            onClick={handleDeleteClick}
          >
            <MdDelete />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProjectForm;
