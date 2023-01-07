import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const createPost = () => {
    const { loading, data } = useQuery(QUERY_POST);


    /* return (
        <main>
            <div className="container">
                <form action="action_page.php">

                    <label for="subject">Subject</label>
                    <textarea id="postForm" name="postForm" placeholder="Write something.." style="height:200px"></textarea>

                    <input type="submit" value="createPost">Create Post</input>

                </form>
            </div>
        </main>
    ); */
};

export default createPost;