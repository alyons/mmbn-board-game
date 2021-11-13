import React from 'react';
import { Route, Routes } from 'react-router';
import FolderPage from './pages/FolderPage';

import LandingPage from './pages/LandingPage';
import NaviDetails from './pages/NaviDetailsPage';
import PageNotFound from './pages/PageNotFound';
import RulesPage from './pages/RulesPage';

const Router = (props) => {
  return (
    <Routes>
      <Route path='/navis/:id/folder' element={<FolderPage />} />
      <Route path='/navis/:id' element={<NaviDetails />} />
      <Route path='/rules' element={<RulesPage />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
