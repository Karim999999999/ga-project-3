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
import ManageHome from './manage/managehome.js';
import ArticlesTable from './manage/article-manager/ArticlesTable';
import Login from './auth/login';
// import Register from './auth/Register';
import Navbar from './Navbar';
import AthleteTable from './manage/athlete-manager/athletesTable';
import NewAthleteForm from './athletes/NewAthleteForm';
import AthleteManager from './manage/athlete-manager/AthleteManagerProfile';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/athletes" element={<Athletes />} />
      <Route path="/athletes/:id" element={<SingleAthlete />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Articles />} />
      <Route path="/discover/:id" element={<SingleArticle />} />
      <Route path="/manage" element={<ManageHome />} />
      <Route path="/manage/newarticle" element={<ArticleForm />} />
      <Route path="/manage/athletes/stat/:status" element={<AthleteTable />} />
      <Route path="/manage/articles/stat/:status" element={<ArticlesTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newAthlete" element={<NewAthleteForm />} />
      <Route path="/manage/athlete/:athleteId" element={<AthleteManager />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
