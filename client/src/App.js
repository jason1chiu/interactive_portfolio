import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";

import HomePage from "./views/Home";
import Blog from "./views/Blog/Blog";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import LoginPage from "./views/Login/LoginPage";
import SignUp from "./components/SignUpForm/SignUpForm";

// Create an Apollo Client and specify the connection to your GraphQL API
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("id_token")
      ? `Bearer ${localStorage.getItem("id_token")}`
      : "",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid className="d-flex flex-column min-vh-100">
          <Row>
            <Col>
              <Navigation />
            </Col>
          </Row>
          <Row className="flex-grow-1">
            <Col>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
