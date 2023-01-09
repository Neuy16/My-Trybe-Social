import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import PostList from '../components/PostList';
import { QUERY_POSTS } from '../utils/queries';

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
    );

    const { loadingP, userPost } = useQuery(QUERY_POSTS);

    if (loadingP) {
        return <div>Loading posts...</div>;
    }


    //this is our problem
    // user posts is returning undefined instead of having the userPost value
    console.log(userPost);







    if (loading) {
        return <div>Loading user...</div>;
    }

/* console.log(data); */

    return (
        <section className='hero is-fullheight has-background-success-light'>
            <div className=''>
            <div className='is-size-2 is-italic is-underlined'>
                <strong className=''>Welcome to your timeline {data.user.firstName}!</strong>
            </div>


            <div className='hero is-halfheight has-background-white-ter'>
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    <PostList posts={userPost}/>
                )}
            </div>
            </div>
        </section>
    );
};

export default UserHome;