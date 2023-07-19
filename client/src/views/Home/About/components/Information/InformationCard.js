import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { Card, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import Auth from "../../../../../utils/auth";
import InformationForm from './InformationForm';
import { GET_PORTFOLIO } from "../../../../../utils/queries";

const InformationCard = () => {
  const [show, setShow] = useState(false);
  const { loading, data } = useQuery(GET_PORTFOLIO);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Information</h3>
      </Card.Header>
      <Card.Body>
      <Card.Text>{data.getPortfolio.about[0].information}</Card.Text>

        {Auth.loggedIn() && (
          <Button className="customButton" variant="primary" onClick={handleShow}>
            <MdEdit />
          </Button>
        )}
      </Card.Body>
      {show && <InformationForm show={show} handleClose={handleClose} />}
    </Card>
  );
};

export default InformationCard;
