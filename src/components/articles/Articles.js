import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import articles from '../../data/articles.json';

const Articles = () => {
  return (
    <>
      <Navbar />
      <section className='section section-main section-athletes'>
        <h1>Welcome to Discover</h1>
        <div className='container container-main container-articles'>
          <div className='latest-articles'>
            {articles
              .slice(0, 4)
              .sort(
                (a, b) => b.createdAt.slice(8, 10) - a.createdAt.slice(8, 10)
              )
              .map(({ _id, title, createdAt, categories }) => {
                const date = createdAt.split('-');

                return (
                  <div className='latest-article' key={_id}>
                    <Link to={`/discover/${_id}`}>{title}</Link>{' '}
                    {date[2].slice(0, 2)}/{date[1]}/{date[0].slice(2)}{' '}
                    {categories[0]}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
