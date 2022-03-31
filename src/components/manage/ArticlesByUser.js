import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { getArticlesByUserId } from '../../api/manage';
import { getUserById } from '../../api/auth';
import TableData from './TableData';
import { getAllArticles } from '../../api/articles';

const ArticlesByUser = () => {
  const { userId } = jwtDecode(sessionStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getUserById(userId).then(user => setUser(user));
    getAllArticles().then(articles => setArticles(articles));
  }, []);

  console.log(articles);

  return (
    <section className='section'>
      <Link to='/manage/articles/create' className='new-article'>
        Create New Article
      </Link>
      <h1>Articles By {user && <span>{user.firstName}</span>}</h1>
      {!articles ? <p>Loading...</p> : <TableData tableData={articles} />}
    </section>
  );
};

export default ArticlesByUser;
