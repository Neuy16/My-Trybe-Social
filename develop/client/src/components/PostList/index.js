import React from 'react';
/* import { QUERY_POST } from '../../utils/queries'; */
import { QUERY_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';





const PostList = ({ posts }) => {
    const { loading, data } = useQuery(QUERY_POSTS);
    if (!posts) {
        return <h3>no posts yet</h3>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(data)

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post._id} >
                        <h4>
                            {post.userID} <br />
                            <spam style={{ fontSize: '1rem' }} >
                                made this post on
                            </spam>
                        </h4>
                        <div>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList;