import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../api/auth';
import { getArticlesByUserId } from '../../api/manage';
import TableData from './TableData';

const ArticleByStatus = () => {
  const { status } = useParams();

  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getUserById(userId).then(user => setUser(user));
    getArticlesByUserId(userId)
      .then(articles => articles.filter(article => article.status === status))
      .then(filteredArticles => setArticles(filteredArticles));
  }, [status]);

  return (
    <section className='section'>
      <h1>
        Articles By {user && <span>{user.firstName}</span>} with status {status}
      </h1>
      {!articles ? <p>Loading...</p> : <TableData tableData={articles} />}
    </section>
  );
};

export default ArticleByStatus;
