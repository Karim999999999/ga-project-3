import React from 'react';
import Navbar from '../Navbar';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState(null);
  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        const { data } = await loginUser(credentials);
        console.log(data);
        window.sessionStorage.setItem('accessToken', data.token);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }
  return (
    <>
      <Navbar />
      <div className="login-page">
        <h1>LOGIN:</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit"> Login </button>
        </form>
      </div>
    </>
  );
}

export default Login;
