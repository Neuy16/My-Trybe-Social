import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css'

const Home = () => {
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
      <div className='landingPage'>
        <section>

          <div>

            <div>
              <Link className="LPbtn" to="/Login">
                Login
              </Link>
            </div>

            <div>
            <Link className="LPbtn" to="/Register">
              Register
            </Link>
            </div>

          </div>

          <p>
            You need to be logged in. Use the navigation
            links above to sign up or log in!
          </p>

        </section>
      </div>
    );
  }

};

export default Home;
