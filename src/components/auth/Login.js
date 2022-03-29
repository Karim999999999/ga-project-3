import React, { useState } from 'react';
import Navbar from '../Navbar';
import { loginUser } from '../../api/auth';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(credentials);
    setCredentials(initialState);
    console.log(credentials);
  };

  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='container container-main'>
          <form className='form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='btn btn-submit'>
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
