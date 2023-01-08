import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

const PostForm = ({ userId }) => {

    const [content, setContent] = useState('');

    const [addPost, { error }] = useMutation(ADD_POST);
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await addPost({
                variables: { userId, content },
            });

            setContent('');
        } catch (err) {
            console.error(err);
        }
    };

/*     const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postArea' && value.length <= 300) {
            setContent(value);
        };
    }; */


        return (
            <div>
                <h3>Create A Post</h3>
                <form
                    className='postFormContent'
                    onSubmit={handleFormSubmit}
                >
                    <div className='postInput'>
                        <textarea
                            name='postArea'
                            placeholder='Start Typing...'
                            value={content}
                            className='formInput'
                            onChange={(event) => setContent(event.target.value)}
                        />
                    </div>

                    <div className='postSubmitButton'>
                        <button className='btn'
                            type='submit'>
                            Create Post
                        </button>
                    </div>

                    {error && (
                        <div>
                            Something is not a-okay...
                        </div>
                    )}
                </form>
            </div>
        );
    };

    export default PostForm;