import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Draft from './pages/Draft';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Register from './pages/Register';
import UserHome from './pages/UserHome';
import UserPost from './pages/UserPost';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
          <Route 
              path="/" 
              element={<Home />}
            />
          <Route 
              path="/Register" 
              element={<Register />}
            />
          <Route 
              path="/Login" 
              element={<Login />}
            />
            <Route 
              path="/Feed/:id" 
              element={<UserHome />}
            />
            <Route 
              path="/Profile/:id" 
              element={<Profile />}
            />
            <Route 
              path="/Notifications/:id" 
              element={<Notifications />}
            />
            <Route 
              path="/Trybe/:id"
              element={<FriendsList />}
            />
             <Route 
              path="/Draft/:id"
              element={<Draft />}
            />
             <Route 
              path="/Post/:id"
              element={<UserPost />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;