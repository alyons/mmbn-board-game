import React from 'react';
import { Route, Routes } from 'react-router';

import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';

const Router = (props) => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
