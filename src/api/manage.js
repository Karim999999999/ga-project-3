import axios from 'axios';

const token = localStorage.getItem('token');

const getArticlesByUserId = id =>
  axios
    .request({
      method: 'GET',
      url: '/api/manage/articles',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data.data);

export { getArticlesByUserId };
