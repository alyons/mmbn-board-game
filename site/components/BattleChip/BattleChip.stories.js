import React from 'react';

import BattleChip from './';
import megamanFolder from '../../assets/data/battleChips/megaman';

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

export default {
  component: BattleChip,
  title: 'Components/BattleChips'
};

export const Cannon = () => <BattleChip {...megamanFolder[0]} sx={chipClass} />;
