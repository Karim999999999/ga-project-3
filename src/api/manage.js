import axios from 'axios';

const token = sessionStorage.getItem('token');

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

const getArticlesByStatus = (id, status) =>
  axios
    .request({
      method: 'GET',
      url: '/api/manage/articles',
      params: {
        status,
      },
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data.data);

// const createArticle = async () => {
//   const options = {
//     method: 'POST',
//     url: '/api/articles',
//   };

//   const { data } = await axios.request(options);

//   return data;
// };

const createArticle = article =>
  axios.request({
    method: 'POST',
    url: '/api/articles',
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: article,
  });

const updateArticle = async article => {
  console.log(article._id);
  await axios.put(`/api/articles/${article._id}`, article);
};

const removeArticle = articleId =>
  axios.request({
    method: 'DELETE',
    url: `/api/articles/${articleId}`,
  });

export {
  getArticlesByUserId,
  getArticlesByStatus,
  createArticle,
  updateArticle,
  removeArticle,
};
