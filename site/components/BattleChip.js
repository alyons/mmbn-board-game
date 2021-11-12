import React from 'react';
import {
  Box,
  Card,
  Typography
} from '@mui/material';

import battleChipDefault from '../assets/images/MMBNChip001.webp';
import battleChipBackground from '../assets/images/battleChip.svg';
import nullImg from '../assets/images/BC_Element_Null.webp';
import Range from './Range';

const chipClass = {
  border: 12,
  borderRadius: 5,
  width: 360,
  height: 520,
  '@media print': {
    width: '63mm',
    height: '88mm'
  }
};

const BattleChip = ({name, type, damage, code, description, image, range, ...props}) => {
  return (
    <Card {...props} sx={chipClass}>
      <Box sx={{ margin: 1, height: 'calc(100% - 16px)', width: 'calc(100% - 16px)' }}>
        <Typography variant='h5'>{name}</Typography>
        <Box component='img' src={image} alt={name} sx={{ width: '100%' }} />
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', width: '100%' }}>
          <Typography variant='h5'>{code}</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Box component='img' src={nullImg} sx={{ height: '100%', marginLeft: 1 }} />
          </Box>
          <Typography variant='h5'>{damage}</Typography>
        </Box>
        <Box>
          <Range variant={range} />
        </Box>
      </Box>
    </Card>
  );
};

export default BattleChip;
