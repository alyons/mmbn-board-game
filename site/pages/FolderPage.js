import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Grid
} from '@mui/material';

import BattleChip from '../components/BattleChip';
import megamanFolder from '../assets/data/battleChips/megaman';

const FolderPage = (props) => {
  const { id } = useParams();

  return (
    <Grid container>
      {megamanFolder.map((chip, i) => (
        <BattleChip {...chip} key={`${i}`} />
      ))}
    </Grid>
  );
};

export default FolderPage;
