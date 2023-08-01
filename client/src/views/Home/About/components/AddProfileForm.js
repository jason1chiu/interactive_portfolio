import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  ADD_INFORMATION,
  ADD_BACKGROUND,
  ADD_EDUCATION,
  ADD_INTEREST,
} from "../../../../utils/mutations";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { Button, Modal, Form, Image } from "react-bootstrap";

const AddProfileForm = ({ show, setShow }) => {
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState({});
  const [, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const [addInformation] = useMutation(ADD_INFORMATION, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const [addBackground] = useMutation(ADD_BACKGROUND, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const [addEducation] = useMutation(ADD_EDUCATION, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const [addInterest] = useMutation(ADD_INTEREST, {
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]:
        name === "startYear" || name === "endYear" ? parseInt(value) : value,
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
      switch (formType) {
        case "Information":
          await addInformation({ variables: formData });
          break;
        case "Background":
          await addBackground({ variables: formData });
          break;
        case "Education":
          await addEducation({ variables: formData });
          break;
        case "Interests":
          await addInterest({
            variables: { interest: formData.interest },
          });
          break;
        default:
          break;
      }

      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    switch (formType) {
      case "Information":
        return (
          <>
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
                style={{ width: "100px", borderRadius: "5%" }}
                src={formData.avatar}
                alt="avatar"
              />
            </Form.Group>
          </>
        );
      case "Background":
        return (
          <>
            <Form.Group>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Title"
                name="jobTitle"
                value={formData.jobTitle || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                name="company"
                value={formData.company || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Start Year"
                name="startYear"
                value={formData.startYear || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="End Year"
                name="endYear"
                value={formData.endYear || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                value={formData.description || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      case "Education":
        return (
          <>
            <Form.Group>
              <Form.Label>School</Form.Label>
              <Form.Control
                type="text"
                placeholder="School"
                name="school"
                value={formData.school || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="Degree"
                name="degree"
                value={formData.degree || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Field of Study</Form.Label>
              <Form.Control
                type="text"
                placeholder="Field of Study"
                name="fieldOfStudy"
                value={formData.fieldOfStudy || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Start Year"
                name="startYear"
                value={formData.startYear || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="End Year"
                name="endYear"
                value={formData.endYear || ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </>
        );
      case "Interests":
        return (
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
        );

      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Profile Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Profile Section</Form.Label>
            <Form.Control
              as="select"
              value={formType}
              onChange={handleFormTypeChange}
            >
              <option value="">--Select a profile section--</option>
              <option value="Information">Information</option>
              <option value="Background">Background</option>
              <option value="Education">Education</option>
              <option value="Interests">Interests</option>
            </Form.Control>
          </Form.Group>
          {renderForm()}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProfileForm;
