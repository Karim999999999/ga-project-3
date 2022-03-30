import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { getArticlesByUserId } from '../../api/manage';
import { getUserById } from '../../api/auth';

const ArticlesByUser = () => {
  const { userId } = jwtDecode(localStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getUserById(userId).then(user => setUser(user));
    getArticlesByUserId(userId).then(articles => setArticles(articles));
  }, []);

  return (
    <>
      <h1>Articles By {user && <span>{user.firstName}</span>}</h1>

      <div>
        {!articles ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              <li>
                <Link to='/manage/articles/draft'>Draft</Link>
              </li>
              <li>
                <Link to='/manage/articles/published'>Published</Link>
              </li>
            </ul>
            {articles.map(article => (
              <div key={article._id}>
                <p>{article.title}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ArticlesByUser;
