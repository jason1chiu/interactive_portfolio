import React from 'react';
import { Card } from 'react-bootstrap';

const DetailInformationCard = () => {
  return (
    <Card className="h-100">
      <Card.Header><h3>Detail Information</h3></Card.Header>
      <Card.Body>
        <Card.Text>Your detailed information here...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DetailInformationCard
