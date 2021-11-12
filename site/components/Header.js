/** @jsx jsx */

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { jsx } from '@emotion/react';

import { Menu as MenuIcon } from '@mui/icons-material';

const Header = (props) => {
  return (
    <Box sx={{ color: 'primary.contrastText', displayPrint: 'none' }}>
      <AppBar position='sticky' sx={{   display: 'inline-flex', flexDirection: 'row', height: '80px', justifyContent: 'center' }}>
        <Toolbar sx={{ display: 'inline-flex', flexDirection: 'row', flexGrow: 1, alignSelf: 'center', maxWidth: 1188 }}>
          <Typography align='center'>Megaman Battle Network: Board Game</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
