import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { MdEdit } from 'react-icons/md'

const EducationCard = () => {
  return (
    <Card className="h-100">
      <Card.Header><h3 className='subheading'>Education</h3></Card.Header>
      <Card.Body>
        <Card.Text>Your education information here...</Card.Text>
        <Button className="customButton" variant="primary">
          <MdEdit />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EducationCard