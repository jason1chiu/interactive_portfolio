import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";

const BackgroundCard = () => {
  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Background</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>Your background information here...</Card.Text>
        <Button className="customButton" variant="primary">
          <MdEdit />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BackgroundCard;
