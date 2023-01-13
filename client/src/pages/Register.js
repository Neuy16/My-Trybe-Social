import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Register = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };


  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <main className="hero is-fullheight columns is-vcentered is-centered is-flex">
      <section className='registerPage'>
        <div className="">


          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to Login</Link>
            </p>
          ) : (


            <form onSubmit={handleFormSubmit}>
              <input className='fname-input input is-large'
                placeholder="First Name"
                name="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleChange}
              />
              <input className='lname-input input is-large'
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleChange}
              />
              <input className='user-name-input input is-large'
                placeholder="Username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input className='email-input input is-large'
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input className='reg-pass-input input is-large'
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="registerbtn btn-block btn-info"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                REGISTER
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

export default Register;
