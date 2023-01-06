import React from 'react';
import {useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
  const user = data?.me || data?.user || {};


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <section>
      <div>
      <Link className="btn btn-lg btn-primary m-2" to="/Login">
            Login
          </Link>
          <p> </p>
          <Link className="btn btn-lg btn-light m-2" to="/Register">
            Register
          </Link>
      </div>

      <p>
        You need to be logged in. Use the navigation
        links above to sign up or log in!
      </p>
      </section>
    );
  }
  
};

export default User;
