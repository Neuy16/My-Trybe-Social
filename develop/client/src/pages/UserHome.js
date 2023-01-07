import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { QUERY_POST } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';
import PostList from '../components/PostList';
/* import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; */

const UserHome = () => {
    const { userId } = useParams();

    // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    const { loading, data } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId },
        },
        QUERY_POST,
        QUERY_POSTS
    );


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <h4>
                welcome to your timeline {data.user.firstName}
            </h4>


            <div>
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    <PostList>
                        posts = {data.posts}
                    </PostList>
                )}
            </div>
        </section>
    );
};

export default UserHome;