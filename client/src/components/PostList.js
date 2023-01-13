import React from 'react';
/* import { QUERY_POST } from '../../utils/queries'; */


const PostList = ({ posts }) => {
    
    if (!posts) {
        return <h3>no posts yet</h3>;
    }
    console.log(posts);
    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post._id} >
                        

                    <div className='single-post'>
                        <div>
                            <p>User: {post.userId}</p>
                        </div>

                        <div>
                            <p>{post.content}</p>
                        </div>
                    </div>


                    </div>
                ))}
        </div>
    );
};

export default PostList;