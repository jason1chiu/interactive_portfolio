import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage() {
  const handleLogin = loginInfo => {
    // Handle login form submission here
    console.log(loginInfo);
  };

  return (
    <Container className='my-5'>
      <Row className="justify-content-center">
        <h1>Login</h1>
      </Row>
      <Row>
        <LoginForm handleLogin={handleLogin} />
      </Row>
    </Container>
  );
}

export default LoginPage;