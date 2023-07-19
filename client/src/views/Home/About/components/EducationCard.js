import React from "react";
import { Card } from "react-bootstrap";

const EducationCard = () => {
  return (
    <Card className="h-100">
      <Card.Header>
        <h3 className="subheading">Education</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>Your education information here...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
