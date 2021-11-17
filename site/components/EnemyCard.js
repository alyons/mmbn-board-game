import React from 'react';
import {
  Box
} from '@mui/material';

import nullImg from '../assets/images/elements/neutral.svg';

const enemySx = {
  maxWidth: 560,
  maxHeight: 400,
  '& p': {
    fontSize: '24px'
  },
  '@media print': {
    width: '88mm',
    height: '63mm'
  },
  float: 'left'
}

const EnemyCard = ({ name, icon, full, attack, move, special, hitPoints, ...props }) => {
  const fullProps = {
    ...props,
    sx: {
      ...props.sx,
      ...enemySx
    }
  };

  return (
    <Box {...fullProps}>
      <svg version='1.1' id='battleChip' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox={`0 0 560 400`} height='100%'>
        <g> {/* Card Background */}
          <rect x='0' y='0' width='560' height='400' rx='15' /> 
          <rect x='20' y='20' width='520' height='360' fill='white' />
        </g>

        <image x='20' y='20' width='130' height='180' href={full} />
        <rect x='20' y='20' width='130' height='180' fill='none' style={{ stroke: 'black' }} />
        <rect x='150' y='20' width='130' height='180' fill='none' style={{ stroke: 'black' }} />
        <text x='160' y='50' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>HP: {hitPoints}</text>
        <text x='160' y='110' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>Weak: ???</text>
        <text x='160' y='170' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>Prize: ???</text>

        {/* <text x='150' y='230' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Attack</text> */}
        <rect x='20' y='200' width='260' height='180' fill='green' />
        <text x='25' y='220' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>{attack.name}</text>
        <text x='25' y='310' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>Element</text>
        <text x='25' y='355' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>Element</text>
        <rect x='150' y='200' width='130' height='180' fill='blue' />
        <text x='155' y='220' dominantBaseline='middle' style={{ font: '24px sans-serif' }}>Element</text>
        
        {/* <foreignObject x='30' y='250' width='240' height='120'>
          <p>{attack.name}</p>
        </foreignObject> */}

        <rect x='280' y='20' width='260' height='180' fill='none' style={{ stroke: 'black' }} />
        <text x='410' y='50' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Move</text>
        <foreignObject x='290' y='110' width='240' height='120'>
          <p>{move}</p>
        </foreignObject>

        <rect x='280' y='200' width='260' height='180' fill='none' style={{ stroke: 'black' }} />
        <text x='410' y='230' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Special</text>
        <foreignObject x='290' y='250' width='240' height='120'>
          <p>{special}</p>
        </foreignObject>

      </svg>
    </Box>
  );
};

export default EnemyCard;
