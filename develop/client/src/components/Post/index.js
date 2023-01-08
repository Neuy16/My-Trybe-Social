import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { QUERY_POST } from '../utils/queries';
import { QUERY_POSTS } from '../utils/queries';

const Post = () => {
    const { userId } = useParams();
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
        <div>
            <h4>
                {data.post.userID}
            </h4>
            <p>
                {data.post.content}
            </p>
        </div>
    );
};

export default Post;