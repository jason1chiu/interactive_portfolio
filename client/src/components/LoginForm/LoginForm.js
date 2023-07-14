import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useMutation, useApolloClient } from "@apollo/client";
import {useNavigate} from 'react-router-dom';
import { LOGIN_USER } from "../../utils/mutations";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Get access to Apollo Client instance
  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      // Store the token in the local storage
      localStorage.setItem('id_token', data.login.token);
      // Force a refresh of all the current queries now that the user is
      // logged in
      client.resetStore();
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Card className="mt-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="lg"
                  />
                </Form.Group>

                <Button className="customButton" variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;