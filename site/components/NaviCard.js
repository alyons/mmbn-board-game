import React from 'react';
import {
  Box
} from '@mui/material';

const naviSx = {
  maxWidth: 800,
  maxHeight: 560,
  '& p': {
    fontSize: '24px'
  },
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

const NaviCard = ({ name, icon, mark, full, weaknesses, hitPoints, movement, handSize, special, ...props }) => {

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

          <rect x='20' y='180' width='280' height='360' fill='none' style={{ stroke: 'black' }} />
          <text x='160' y='210' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Special</text>
          <foreignObject x='30' y='230' width='260' height='340'>
            <p>{special}</p>
          </foreignObject>

          {/* <rect x='300' y='180' width='480' height='360' fill='none' style={{ stroke: 'black' }} />270 */}
          <rect x='300' y='180' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='460' y='180' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='620' y='180' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='300' y='270' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='460' y='270' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='620' y='270' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='300' y='360' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='460' y='360' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='620' y='360' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='300' y='450' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='460' y='450' width='160' height='90' fill='none' style={{ stroke: 'black' }} />
          <rect x='620' y='450' width='160' height='90' fill='none' style={{ stroke: 'black' }} />

          <text x='380' y='225' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>HP</text>
          <text x='380' y='315' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{hitPoints[0]}</text>
          <text x='380' y='405' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{hitPoints[1]}</text>
          <text x='380' y='495' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{hitPoints[2]}</text>

          <text x='540' y='225' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Move</text>
          <text x='540' y='315' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{movement[0]}</text>
          <text x='540' y='405' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{movement[1]}</text>
          <text x='540' y='495' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{movement[2]}</text>

          <text x='700' y='225' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>Chips</text>
          <text x='700' y='315' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{handSize[0]}</text>
          <text x='700' y='405' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{handSize[1]}</text>
          <text x='700' y='495' dominantBaseline='middle' textAnchor='middle' style={{ font: '36px sans-serif' }}>{handSize[2]}</text>
        </g>
      </svg>
    </Box>
  );
};

export default NaviCard;
