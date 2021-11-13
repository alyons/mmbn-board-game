import React from 'react';
import {
  Box
} from '@mui/material';

const naviSx = {
  maxWidth: 800,
  maxHeight: 560,
  '@media print': {
    width: '126mm',
    height: '88mm',
    margin: '5mm 0mm',
    ':nth-of-type(4n)': {
      breakAfter: 'always'
    }
  },
  float: 'left'
};

const NaviCard = ({ name, icon, mark, ...props }) => {

  const fullProps = {
    ...props,
    sx: {
      ...props.sx,
      ...naviSx,
    }
  };

  return (
    <Box {...fullProps}>
      <svg version='1.1' id='naviCard' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox={`0 0 800 560`} height='100%'>
        <g> {/* Card Background */}
          <rect x='0' y='0' width='800' height='560' rx='15' /> 
          <rect x='20' y='20' width='760' height='520' fill='white' />

          {/* Rectangle Formatting */}
          <rect x='20' y='20' width='160' height='160' fill='none' style={{ stroke: 'black' }} />
          <image x='20' y='20' width='160' height='160' href={icon} />

          {/* Header Middle Area */}
          <rect x='180' y='20' width='440' fill='none' style={{ stroke: 'black' }} />
          <text x='400' y='60' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{name}</text>
          <text x='200' y='140' dominantBaseline='middle' style={{ font: '36px sans-serif' }}>Weakeness: </text>
          
          {/* Header Right Area */}
          <rect x='620' y='20' width='160' height='160' fill='none' style={{ stroke: 'black' }} />
          <image x='624' y='24' width='152' height='152' href={mark} />


          <rect x='20' y='180' width='280' height='360' fill='yellow' />
          <rect x='300' y='180' width='480' height='360' fill='red' />
        </g>
      </svg>
    </Box>
  );
};

export default NaviCard;
