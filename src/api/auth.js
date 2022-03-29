import axios from 'axios';

export const loginUser = credentials =>
  axios
    .request({
      method: 'POST',
      url: '/api/login',
      data: credentials,
    })
    .then(({ data }) => {
      data.token
        ? window.localStorage.setItem('token', data.token)
        : window.localStorage.removeItem('token');

      return data.message;
    })
    .catch(console.error);
