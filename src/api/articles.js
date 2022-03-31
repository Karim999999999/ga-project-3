import axios from 'axios';


const getAllArticles = () =>
  axios
    .request({
      method: 'GET',
      url: '/api/articles',
    })
    .then(({ data }) => data.data);

const getArticlesByCategory = category =>
  axios
    .request({
      method: 'GET',
      url: '/api/articles',
      params: { 'categories[in]': category },
    })
    .then(({ data }) => data.data);

const getArticleById = id =>
  axios
    .request({
      method: 'GET',
      url: `/api/articles/${id}`,
    })
    .then(({ data }) => data);

export { getAllArticles, getArticlesByCategory, getArticleById };
