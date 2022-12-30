import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
// import Notifications from './pages/Notifications';
// import Profile from './pages/Profile';
import Register from './pages/Register';
// import UserHome from './pages/UserHome';



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
              path="/Me" 
              element={<userHome />}
            />
            <Route 
              path="/Me/:userId" 
              element={<userHome />}
            />
            {/* <Route 
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
            /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;