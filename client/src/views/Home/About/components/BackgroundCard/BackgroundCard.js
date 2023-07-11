import React from 'react';
import { Card } from 'react-bootstrap';

const BackgroundCard = () => {
  return (
    <Card className="h-100">
      <Card.Header><h3 className='subheading'>Background</h3></Card.Header>
      <Card.Body>
        <Card.Text>Your background information here...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BackgroundCard