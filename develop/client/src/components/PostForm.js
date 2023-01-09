import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import Auth from "../utils/auth";

const PostForm = ({ userId }) => {
    console.log(userId);
    const [formState, setFormState] = useState({
        content: "",
    });
    const [addPost, { error }] = useMutation(ADD_POST);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        try {
            const { data } = await addPost({
                variables: { userId, ...formState },
            });
           /*  Auth.login(data.addUser.token); */
        } catch (e) {
            console.error(e);
        }

        setFormState({
            content: "",
        });
    };

    return (
        <main>
            <h3>Create A Post</h3>
            <form
                className='postFormContent'
                onSubmit={handleFormSubmit}
            >
                <div className='postInput'>
                    <textarea
                        name='content'
                        placeholder='Start Typing...'
                        value={formState.content}
                        className='formInput'
                        onChange={handleChange} />
                </div>

                <div className='postSubmitButton'>
                    <button
                        className="btn btn-block btn-info"
                        style={{ cursor: "pointer" }}
                        type="submit"
                    >
                        Create Post
                    </button>
                </div>

                {error && (
                    <div>
                        Something is not a-okay...
                    </div>
                )}
            </form>
        </main >
    );
};

export default PostForm;