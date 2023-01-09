import React from 'react';
import { useParams } from 'react-router-dom';
/* import { useQuery } from '@apollo/client'; */
/* import { PostList } from '../components/PostList'; */
import PostForm from '../components/PostForm';

/* import { QUERY_SINGLE_USER } from '../utils/queries'; */

const PostCreation = () => {
    const { userId } = useParams();
    /* const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: {userId: userId},
    });
    const user = data?.user || {}; */
    /* if (loading) {
        return <div>Loading...</div>;
      } */
/*       console.log(user);
      console.log(userId); */
    return (
        <div>
            <PostForm userId={userId} />
        </div>
    );
 
};

export default PostCreation;