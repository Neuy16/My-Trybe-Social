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
},[])

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
  <main className="flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <div className="card-body">
          {data ? (
            <p>
          <div>Loading...</div>
            </p>
          ) : (
        
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder="Your username"
                name="username"
                type="text"
                value={!!formState ? formState.username : ''}
                onChange={handleChange}
                required
              />
             
              <input
                placeholder="******"
                name="password"
                type="password"
                value={!!formState ? formState.password : ''}
                onChange={handleChange}
                required
              />
              <button
                className="btn btn-block btn-info"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
);
  };

export default LoginForm;
