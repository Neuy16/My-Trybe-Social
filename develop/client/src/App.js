import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
/* import Profile from './pages/Profile'; */
import Register from './pages/Register';
import UserHome from './pages/UserHome';
import PostCreation from './pages/PostCreation';
import Header from './components/Header';
import Footer from './components/Footer';
/* import Navigation from "./components/Navigation"; */
import "./App.css";
/* import auth from "./utils/auth"; */

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  cache: new InMemoryCache(),
});




function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/register"
                element={<Register />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/logout"
                element={<Login />}
              />
              <Route
                path="/me/:userId"
                element={<UserHome />}
              />
              <Route
                path="/me/:userId/createpost"
                element={<PostCreation />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}



export default App;