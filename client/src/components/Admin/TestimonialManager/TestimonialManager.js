import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { GET_TESTIMONIALS } from '../../utils/queries';
import { ADD_TESTIMONIAL, UPDATE_TESTIMONIAL, DELETE_TESTIMONIAL } from '../../utils/mutations';

function TestimonialManager() {
  const { loading, error, data } = useQuery(GET_TESTIMONIALS);
  const [addTestimonial] = useMutation(ADD_TESTIMONIAL);
  const [updateTestimonial] = useMutation(UPDATE_TESTIMONIAL);
  const [deleteTestimonial] = useMutation(DELETE_TESTIMONIAL);

  // State for form inputs
  const [formState, setFormState] = useState({
    author: '',
    content: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addTestimonial({
        variables: { ...formState },
        refetchQueries: [{ query: GET_TESTIMONIALS }],
      });
      setFormState({
        author: '',
        content: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete testimonial
  const handleDeleteTestimonial = async (testimonialId) => {
    try {
      await deleteTestimonial({
        variables: { id: testimonialId },
        refetchQueries: [{ query: GET_TESTIMONIALS }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Testimonial Manager</h1>

      {/* Form for adding/updating testimonials */}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            name="author"
            value={formState.author}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Content"
            name="content"
            value={formState.content}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* List of existing testimonials */}
      {data.testimonials.map((testimonial) => (
        <Card className="mt-4" key={testimonial._id}>
          <Card.Body>
            <Card.Title>{testimonial.author}</Card.Title>
            <Card.Text>{testimonial.content}</Card.Text>
            <Button variant="danger" onClick={() => handleDeleteTestimonial(testimonial._id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TestimonialManager;