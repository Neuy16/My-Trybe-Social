import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
/* import auth from '../utils/auth'; */

const LoginForm = (props) => {
  const [formState, setFormState] = useState(null);
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  console.log(formState);

  useEffect(() => {
    if (Auth.loggedIn()) {
      Auth.logout();
    };
  }, [])

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState(null);
  };

  return (
    <main className="hero is-fullheight columns is-vcentered is-centered is-flex">
      <section className='loginPage'>
        <div className="">


          {data ? (
            <p>
              <div>Loading...</div>
            </p>
          ) : (


            <form onSubmit={handleFormSubmit}>
              <input className='log-input input is-large'
                placeholder="Your username"
                name="username"
                type="text"
                value={!!formState ? formState.username : ''}
                onChange={handleChange}
                required
              />

              <input className='pass-input input is-large'
                placeholder="Your Password"
                name="password"
                type="password"
                value={!!formState ? formState.password : ''}
                onChange={handleChange}
                required
              />
              <button
                className="loginbtn btn-block btn-info"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Sign In
              </button>
            </form>



          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </section>

    </main>
  );
};

export default LoginForm;
