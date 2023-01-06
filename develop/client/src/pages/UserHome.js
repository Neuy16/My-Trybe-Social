import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
/* import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; */

const UserHome = () => {
    const { userId } = useParams();

    // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId },
        }
    );


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <h4>
            welcome to your timeline {data.user.firstName}
        </h4>
    )
};

export default UserHome;