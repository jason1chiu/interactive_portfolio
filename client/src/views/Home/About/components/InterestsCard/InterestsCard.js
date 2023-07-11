import React from 'react';
import { Card } from 'react-bootstrap';

const InterestsCard = () => {
  return (
    <Card className="h-100">
      <Card.Header><h3 className='subheading'>Interests</h3></Card.Header>
      <Card.Body>
        <Card.Text>Your interests here...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InterestsCard