import React from 'react';
import Box from '@mui/material/Box';

import generateRange from '../site/utils/generateRange';

const rangeSx = {
  maxWidth: 300,
  maxHeight: 300
};

const Range = ({ isPlayer, range, ...props }) => {

  const fullProps = {
    ...props,
    sx: {
      ...props.sx,
      ...rangeSx
    }
  };

  return (
    <Box {...fullProps}>
      <svg version='1.1' id='battleChip' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox={`0 0 100 100`} height='100%'>
        {generateRange(isPlayer, range)}
      </svg>
    </Box>
  );
};

export default {
  component: Range,
  title: 'Psuedo/Range',
  argTypes: {
    range: {
      options: ['shot', 'shotgun'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <Range {...args} />;

export const Player = Template.bind({});

Player.args = {
  isPlayer: true,
  range: 'shot'
};

