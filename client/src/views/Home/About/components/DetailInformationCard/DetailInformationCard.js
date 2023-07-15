import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import Auth from "../../../../../utils/auth";

const DetailInformationCard = () => {
  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Detail Information</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>Your detailed information here...</Card.Text>
        {Auth.loggedIn() && (
          <Button className="customButton" variant="primary">
            <MdEdit />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default DetailInformationCard;
