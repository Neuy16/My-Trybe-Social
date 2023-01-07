import React from 'react';

const PostList = ({ posts }) => {
    if (!posts) {
        return <h3>no posts yet</h3>;
    }

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