import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function SignUpForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className='my-5'>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Card className="mt-4">
            <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    onChange={handleInputChange}
                    value={formState.username}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInputChange}
                    value={formState.email}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={formState.password}
                    size="lg"
                  />
                </Form.Group>

                <Button className="customButton" variant="primary" type="submit" block>
                  Sign Up
                </Button>
                {error && <div className="mt-3 text-danger">Sign up failed</div>}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;