import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../data/articles.json';

const SingleArticle = () => {
  const { id } = useParams();
  const article = articles.find((article) => article._id === id);
  console.log(article);

  return (
    <>
      <h1>{article._id}</h1>
    </>
  );
};

export default SingleArticle;
