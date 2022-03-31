import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles, getArticlesByCategory } from '../../api/articles';



const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [articlesBySport, setArticlesBySport] = useState(null);
  const [articlesByTraining, setArticlesByTraining] = useState(null);

  useEffect(() => {
    getAllArticles().then(articles => {
      setArticles(articles);
    });

    getArticlesByCategory('training').then(articles =>
      setArticlesByTraining(articles)
    );

    getArticlesByCategory('sport').then(articles =>
      setArticlesBySport(articles)
    );
  }, []);

  return (
    <>
      <section className='section section-main section-athletes'>
        <h1>Welcome to Discover</h1>
        <div className='container container-main container-articles'>
          <div className='latest-articles'>
            {!articles ? (
              <p>Loading...</p>
            ) : (
              articles
                .slice(0, 4)
                .map(({ _id, title, createdAt, categories }) => {
                  const date = createdAt.split('-');

                  return (
                    <div className='latest-article' key={_id}>
                      <Link to={`/discover/${_id}`}>{title}</Link>{' '}
                      {date[2].slice(0, 2)}/{date[1]}/{date[0].slice(2)}{' '}
                      {categories[0]}
                    </div>
                  );
                })
            )}
          </div>
          <div className='articles-by-category'>
            {!articlesBySport ? (
              <p>Loading...</p>
            ) : (
              <>
                <h3>
                  <Link to='/discover/category/sport'>sport</Link>
                </h3>
                {articlesBySport.slice(0, 4).map(({ _id, title }) => (
                  <div key={_id}>
                    <p>{title}</p>
                    <Link to={`/discover/${_id}`}>View Article</Link>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className='articles-by-category'>
            {!articlesByTraining ? (
              <p>Loading...</p>
            ) : (
              <>
                <h3>
                  <Link to='/discover/category/training'>training</Link>
                </h3>
                {articlesByTraining.slice(0, 4).map(({ _id, title }) => (
                  <div key={_id}>
                    <p>{title}</p>
                    <Link to={`/discover/${_id}`}>View Article</Link>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
