import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../data/articles.json';
import Navbar from '../Navbar';

const SingleArticle = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);
  console.log(article);

  return (
    <>
      <Navbar />
      <h1>{article._id}</h1>
    </>
  );
};

export default SingleArticle;
