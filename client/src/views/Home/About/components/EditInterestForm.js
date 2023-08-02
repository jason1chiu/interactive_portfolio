import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_INTEREST, DELETE_INTEREST } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";
import { MdUpdate, MdDelete } from "react-icons/md";

const EditInterestForm = ({ show, setShow, id }) => {
  const { data } = useQuery(GET_PORTFOLIO);
  const [formData, setFormData] = useState(
    data.getPortfolio.interests.find((interest) => interest._id === id)
  );
  const [updateInterest] = useMutation(UPDATE_INTEREST, {
    variables: { _id: id, interest: formData.interest },
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const [deleteInterest] = useMutation(DELETE_INTEREST, {
    variables: { _id: id },
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]:
        name === "startYear" || name === "endYear" ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateInterest();
      setFormData({});
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteInterest();
      setShow(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Interest</Modal.Title>
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
          <Button className="customButton mr-2" variant="primary" type="submit">
            <MdUpdate />
          </Button>
          <Button className="customButton" variant="danger" onClick={handleDeleteClick}>
            <MdDelete />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditInterestForm;
