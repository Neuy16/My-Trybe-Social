import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
/* import { PostList } from '../components/PostList'; */
import PostForm from '../components/PostForm/index';

import { QUERY_SINGLE_USER } from '../utils/queries';

const PostCreation = () => {
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: {userId: userId},
    });
    const user = data?.user || {};
    console.log(user._id)
    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div>
            <PostForm />
        </div>
    );
 
};

export default PostCreation;