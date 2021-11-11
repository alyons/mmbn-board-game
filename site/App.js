import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/Footer';
import Header from './components/Header';

const App = (props) => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Router />
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
