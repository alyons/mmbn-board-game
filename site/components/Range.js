import React from 'react';
import Box from '@mui/material/Box';

const generateRangeTiles = (variant) => {
  switch (variant) {
    case 'crossgun': return [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];
    case 'lob': return [{ x: 3, y: 2 }];
    case 'self': return [{ x: 2, y: 2 }];
    case 'sword': return [{ x: 3, y: 2 }];
    case 'widesword': return [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }];
    default: return [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }]; 
  }
};

const generateExtraHitTiles = (variant) => {
  switch (variant) {
    case 'crossgun': return [{ x: 2, y: 1 }, { x: 4, y: 1 }, { x: 2, y: 3 }, { x: 4, y: 3 }];
    case 'shotgun': return [{ x: 4, y: 2 }];
    default: return [];
  }
};

const generatePlayerPosition = (variant)  => {
  switch (variant) {
    case 'self':
    case 'sword':
    case 'widesword':
      return { x: 2, y: 2 };
    default:
      return { x: 0, y: 2 };
  }
};

const Range = ({ variant='shot', ...props }) => {

  const rangeMax = 5;
  const tileSize = 8;
  const rangeTiles = generateRangeTiles(variant);
  const extraRangeTiles = generateExtraHitTiles(variant);
  const playerPosition = generatePlayerPosition(variant);
  
  const checkTileInArray = (x, y, tileArray) => {
    if (!tileArray) return false;

    return tileArray.find(r => r.x == x && r.y == y);
  };

  const generateTile = (x, y) => {

    let fillColor = 'white';
    if (checkTileInArray(x, y, rangeTiles)) fillColor = 'yellow';
    if (checkTileInArray(x, y, extraRangeTiles)) fillColor = 'red';

    return (
      <path
        style={{
          fill: fillColor,
          stroke: 'black'
        }}
        d={`M ${x * tileSize} ${y * tileSize} v ${tileSize} h ${tileSize} v -${tileSize} h -${tileSize} Z`}
      />
    );
  };
  
  const cornerTile = (x, y) => {
    return (x == y && (x == 0 || x == rangeMax - 1)) || (x == 0 && y == rangeMax - 1) || (x == rangeMax - 1 && y == 0);
  };
  
  const player = ({ x, y }) => {
    return (
      <circle cx={x * tileSize + (tileSize / 2)} cy={y * tileSize + (tileSize / 2)} fill='blue' r={(tileSize / 2) - 1} />
    );
  };
  
  let tiles = [];

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      if (!cornerTile(x, y)) {
        tiles.push(generateTile(x, y));
      }
    }
  }

  return (
    <svg version='1.1' id='range' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox={`0 0 ${rangeMax * tileSize} ${rangeMax * tileSize}`} height='120px'>
      <g>
        {tiles}
        {player(playerPosition)}
      </g>
    </svg>
  );
};

export default Range;
