import axios from 'axios';

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: '/api/login',
    data: credentials,
  };

  const data = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  return data;
};

export const registerUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: '/api/register',
    data: credentials,
  };

  const data = await axios.request(options);

  return data;
};
