import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Grid
} from '@mui/material';

import BattleChip from '../components/BattleChip';
import megamanFolder from '../assets/data/battleChips/megaman';

const chipClass = {
  width: 400,
  height: 560,
  '@media print': {
    width: '63mm',
    height: '88mm',
    margin: '5mm 0mm',
    ':nth-of-type(6n)': {
      breakAfter: 'always'
    }
  },
  float: 'left'
};

const FolderPage = (props) => {
  const { id } = useParams();

  return (
    <Box>
      {megamanFolder.map((chip, i) => (
        <BattleChip {...chip} key={`${i}`} sx={chipClass} />
      ))}
      {/* <BattleChip {...megamanFolder[12]} sx={{ width: 400, height: 560 }} /> */}
    </Box>
  );
};

export default FolderPage;
