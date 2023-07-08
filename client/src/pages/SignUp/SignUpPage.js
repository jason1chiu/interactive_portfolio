import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function SignUpPage() {
  return (
    <Container className='my-5'>
      <Row className="justify-content-center">
        <h1>Create Your Account</h1>
      </Row>
      <Row>
        <SignUpForm />
      </Row>
    </Container>
  );
}

export default SignUpPage;