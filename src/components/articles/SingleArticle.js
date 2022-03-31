import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api/articles';

const SingleArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(id).then(article => setArticle(article));
  }, []);

  return <>{!article ? <p>Loading...</p> : <h1>{article.title}</h1>}</>;
};

export default SingleArticle;
