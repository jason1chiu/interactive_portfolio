import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { MdEdit } from 'react-icons/md'

const InterestsCard = () => {
  return (
    <Card className="h-100">
      <Card.Header><h3 className='subheading'>Interests</h3></Card.Header>
      <Card.Body>
        <Card.Text>Your interests here...</Card.Text>
        <Button className="customButton" variant="primary">
          <MdEdit />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default InterestsCard