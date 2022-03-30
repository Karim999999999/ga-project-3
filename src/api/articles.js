import axios from 'axios';

export const getArticles = async () => {
  const options = {
    method: 'GET',
    url: '/api/articles'
  };

  const { data } = await axios.request(options);

  return data;
};
export const createArticle = async () => {
  const options = {
    method: 'POST',
    url: '/api/articles'
  };

  const { data } = await axios.request(options);

  return data;
};

export const getArticlesByStatusAndUserId = async (articleStatus) => {
  const options = {
    method: 'GET',
    url: `/api/manage/articles/status/${articleStatus}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const getArticleById = async (id) => {
  const options = {
    method: 'GET',
    url: `/articles/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};
export const updateArticle = async (id) => {
  const options = {
    method: 'PUT',
    url: `/articles/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};
export const deleteArticle = async (id) => {
  const options = {
    method: 'DELETE',
    url: `/articles/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};
