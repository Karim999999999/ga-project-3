import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import About from './about/About';
import Articles from './articles/Articles';
import SingleArticle from './articles/SingleArticle';
import Athletes from './athletes/Athletes';
import SingleAthlete from './athletes/SingleAthlete';
import Home from './Home';
import ArticleForm from './form/ArticleForm';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/athletes' element={<Athletes />} />
      <Route path='/athletes/:id' element={<SingleAthlete />} />
      <Route path='/about' element={<About />} />
      <Route path='/discover' element={<Articles />} />
      <Route path='/discover/:id' element={<SingleArticle />} />
      <Route path='/manage/newarticle' element={<ArticleForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
