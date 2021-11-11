import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/material';

import App from './App';
import originTheme from './themes/origin';

render(
  <ThemeProvider theme={originTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root') // eslint-disable-line no-undef
);

if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
