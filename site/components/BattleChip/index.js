import React from 'react';
import {
  Box
} from '@mui/material';

import nullImg from '../../assets/images/elements/neutral.svg';
import naviMark from '../../assets/images/naviMarks/megaManNaviMark.svg';
import generateRange from './generateRange';

const BattleChip = ({name, type, damage, code, description, image, range, ...props}) => {
  return (
    <Box {...props}>
      <svg version='1.1' id='battleChip' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox={`0 0 400 560`} height='100%'>
        <g> {/* Card Background */}
          <rect x='0' y='0' width='400' height='560' rx='15' /> 
          <rect x='20' y='20' width='360' height='520' fill='white' />
        </g>
        <g> {/* Header */}
          {/* <rect x='20' y='20'  width='280' height='40' fill='red' /> */}
          <text x='30' y='48' style={{ font: '24px sans-serif' }}>{name}</text>
          <rect x='300' y='20' width='80' height='40' fill='none' style={{ stroke: 'black' }} />
          <text x='340' y='40' dominantBaseline='middle' textAnchor='middle' style={{ font: '24px sans-serif' }}>{code}</text>
        </g>
        <g> {/* Upper Body */}
          <rect x='20' y='60' width='280' height='180' fill='#444' />
          <image x='55' y='60' width='206' height='180'  href={image} /> 
          <rect x='300' y='60'  width='80' height='60' fill='none' style={{ stroke: 'black' }} />
          <text x='340' y='90' dominantBaseline='middle' textAnchor='middle' style={{ font: '24px sans-serif' }}>{damage}</text>
          <rect x='300' y='120' width='80' height='60' fill='none' style={{ stroke: 'black' }} />
          <text x='340' y='150' dominantBaseline='middle' textAnchor='middle' style={{ font: '24px sans-serif' }}>{damage * 2}</text>
          <rect x='300' y='180' width='80' height='60' fill='none' style={{ stroke: 'black' }} />
          <text x='340' y='210' dominantBaseline='middle' textAnchor='middle' style={{ font: '24px sans-serif' }}>{damage * 3}</text>
        </g>
        <g> {/* Mid-Line */}
          <rect x='20' y='240'  width='360' height='60' fill='none' style={{ stroke: 'black' }} />
          <image x='30' y='250' width='40' height='40' href={nullImg} />
        </g>
        <g>
          <rect x='20' y='300'  width='140' height='40' fill='none' style={{ stroke: 'black' }} />
          <text x='90' y='320' dominantBaseline='middle' textAnchor='middle' style={{ font: '24px sans-serif' }}>Range</text>
          {generateRange(range)}
        </g>
        <g> {/* Special Information Area */}
          <rect x='160' y='300'  width='220' height='220' fill='none' style={{ stroke: 'black' }} />
          <image x='180' y='320' width='180' height='180' href={naviMark} />
          {/* <rect x='160' y='300' width='220' height='40' fill='blue' />
          <rect x='160' y='340'  width='140' height='180' fill='yellow' />
          <rect x='300' y='340' width='80' height='60' fill='red' />
          <rect x='300' y='400' width='80' height='60' fill='blue' />
          <rect x='300' y='460'  width='80' height='60' fill='green' /> */}
        </g>
        <g> {/* Footer */}
          <rect x='20' y='520' width='360' height='20' fill='none' style={{ stroke: 'black' }} />
          <text x='30' y='532' dominantBaseline='middle' style={{ font: '12px sans-serif' }}>Legal Information will go here</text>
        </g>
      </svg>
    </Box>
  );
};

export default BattleChip;
