import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomePage from './pages/Home/HomePage'
import Blog from './pages/Blog/Blog';
import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/Login/LoginPage';
import SignUp from './components/SignUpForm/SignUpForm';


// Create an Apollo Client and specify the connection to your GraphQL API
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('id_token') ? `Bearer ${localStorage.getItem('id_token')}` : "",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <HomePage />
        <Routes>
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;