import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';

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
        <main className='hero is-fullheight columns is-vcentered is-centered is-flex'>
            <section className='createPost-page'>
                <div className=''>

                    <div className='post-title'>
                    <h3>Create A Post</h3>
                    </div>
                    
                    <form
                        className='postFormContent'
                        onSubmit={handleFormSubmit}
                    >
                        <div className='postInput'>
                            <textarea
                                name='content'
                                placeholder='Start Typing...'
                                value={formState.content}
                                className='formInput textarea is-large'
                                onChange={handleChange} />
                        </div>

                        <div className='postSubmitButton'>
                            <button
                                className="postbtn btn-block btn-info"
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
                </div>
            </section>
        </main >
    );
};

export default PostForm;