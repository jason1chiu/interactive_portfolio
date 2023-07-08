import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{testimonial.quote}</p>
          <footer className="blockquote-footer">
            {testimonial.author}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;