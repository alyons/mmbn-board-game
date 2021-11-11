import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const App = (props) => {
  return (
    <BrowserRouter>
      <Box>
        <Router />
      </Box>
    </BrowserRouter>
  );
};

export default App;
