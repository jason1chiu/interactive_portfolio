import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import HomePage from "./views/Home";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import LoginPage from "./views/Login/LoginPage";

// Create an http link:
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Create the auth link:
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create the Apollo Client:
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
                <Route path="/login" element={<LoginPage />} />
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
