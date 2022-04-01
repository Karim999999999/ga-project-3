import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/style.scss';
import About from './about/About';
import Articles from './articles/Articles';
import ArticlesByCategory from './articles/ArticlesByCategory';
import SingleArticle from './articles/SingleArticle';
import Athletes from './athletes/Athletes';
import SingleAthlete from './athletes/SingleAthlete';
import Login from './auth/Login';
import Home from './Home';

import ArticleByStatus from './manage/ArticleByStatus';
import ArticleForm from './manage/ArticleForm';
import ArticlesByUser from './manage/ArticlesByUser';
import ManageHome from './manage/Manage';
import Navbar from './Navbar';

import AthleteTable from './manage/athlete-manager/athletesTable';
import NewAthleteForm from './athletes/NewAthleteForm';
import AthleteManager from './manage/athlete-manager/AthleteManagerProfile';
import EditAthleteForm from './manage/athlete-manager/athlete-controllers/EditAthleteDetailsForm';
import ChangeApplicationStatusForm from './manage/athlete-manager/athlete-controllers/ChangeApplicationStatusForm';
import SingleMedicalIncident from './manage/athlete-manager/medical-incidents/singleMedicalIncident';
import AllMedicalIncidentsforAthlete from './manage/athlete-manager/medical-incidents/AllMedicalIncidentsforAthlete';
import GetAllSessionsForAthlete from './manage/athlete-manager/GetAllSessionsForAthlete';
import Footer from './Footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Articles />} />
      <Route path="/discover/:id" element={<SingleArticle />} />
      <Route path="/manage" element={<ManageHome />} />
      <Route
        path="/discover/category/:category"
        element={<ArticlesByCategory />}
      />
      <Route path="/manage/articles" element={<ArticlesByUser />} />
      <Route path="/manage/articles/create" element={<ArticleForm />} />
      <Route
        path="/manage/articles/:articleId/:status"
        element={<ArticleForm />}
      />
      <Route path="/manage/articles/:status" element={<ArticleByStatus />} />
      <Route path="/athletes" element={<Athletes />} />
      <Route path="/approved-athletes/:athleteId" element={<SingleAthlete />} />
      <Route path="/manage/athletes/stat/:status" element={<AthleteTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newAthlete" element={<NewAthleteForm />} />
      <Route path="/manage/athlete/:athleteId" element={<AthleteManager />} />
      <Route
        path="/manage/athlete/:athleteId/sessions"
        element={<GetAllSessionsForAthlete />}
      />
      <Route
        path="/manage/athlete/:athleteId/medical-incidents"
        element={<AllMedicalIncidentsforAthlete />}
      />
      <Route
        path="/manage/athlete/:athleteId/edit"
        element={<EditAthleteForm />}
      />
      <Route
        path="/manage/athlete/:athleteId/editstatus"
        element={<ChangeApplicationStatusForm />}
      />
      <Route
        path="/athlete/:athleteId/medical-incident/:medicalIncidentId"
        element={<SingleMedicalIncident />}
      />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
