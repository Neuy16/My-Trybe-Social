import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const PostCreation = () => {
    const { userId } = useParams();

    return (
        <div>
            <PostForm userId={userId} />
        </div>
    );
 
};

export default PostCreation;