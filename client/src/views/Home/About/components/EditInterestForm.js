import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../../utils/queries";
import { UPDATE_INTEREST } from "../../../../utils/mutations";
import { Button, Modal, Form } from "react-bootstrap";

const EditInterestForm = ({ show, setShow, id }) => {
  const { data } = useQuery(GET_PORTFOLIO);
  const [formData, setFormData] = useState(
    data.getPortfolio.interests.find((interest) => interest._id === id)
  );
  const [updateInterest] = useMutation(UPDATE_INTEREST, {
    variables: { _id: id, interest: formData.interest },
    refetchQueries: [{ query: GET_PORTFOLIO }],
  });
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "startYear" || name === "endYear" ? parseInt(value) : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await updateInterest();
      console.log(response);
      setFormData({});
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
          <Button className="customButton" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditInterestForm;
