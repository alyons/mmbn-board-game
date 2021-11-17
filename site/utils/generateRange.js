import React from 'react';

const RANGE_MAX = 5;
const TILE_SIZE = 20;

function tileInArray (x, y, array) {
  if (!array) return false;

  return array.find(t => t.x == x && t.y == y);
}

function generateTile (x, y, rangeTiles, extraTiles, xBase, yBase) {
  let fill = 'white';
  if (tileInArray(x, y, rangeTiles)) fill = 'yellow';
  if (tileInArray(x, y, extraTiles)) fill = 'red';

  return (
    <path 
      style={{ fill, stroke: 'black' }}
      d={`M ${xBase + x * TILE_SIZE} ${yBase + y * TILE_SIZE} v ${TILE_SIZE} h ${TILE_SIZE} v -${TILE_SIZE} h -${TILE_SIZE} Z`}
    />
  );
}

function cornerTile (x, y) {
  return (x == y && (x == 0 || x == RANGE_MAX - 1)) || (x == 0 && y == RANGE_MAX - 1) || (x == RANGE_MAX - 1 && y == 0);
}

function renderUser ({ x, y }, xBase, yBase) {
  return (
    <circle cx={xBase + x * TILE_SIZE + (TILE_SIZE / 2)} cy={yBase + y * TILE_SIZE + (TILE_SIZE / 2)} fill='blue' r={(TILE_SIZE / 2) - 2} />
  );
}

function generateUserPosition (isPlayer, variant) {
  if (isPlayer) {
    switch (variant) {
      case 'self':
      case 'sword':
      case 'widesword':
        return { x: 2, y: 2 };
      default:
        return { x: 0, y: 2 };
    }
  }

  switch(variant) {
    default:
      return { x: RANGE_MAX - 1, y: 2 };
  }
}

function generateRangeTiles (isPlayer, variant) {
  if (isPlayer) {
    switch (variant) {
      case 'crossgun': return [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }];
      case 'lob': return [{ x: 3, y: 2 }];
      case 'self': return [{ x: 2, y: 2 }];
      case 'sword': return [{ x: 3, y: 2 }];
      case 'widesword': return [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }];
      default: return [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }]; 
    }
  }

  return [];
}

function generateExtraHitTiles (isPlayer, variant) {
  if (isPlayer) {
    switch (variant) {
      case 'crossgun': return [{ x: 2, y: 1 }, { x: 4, y: 1 }, { x: 2, y: 3 }, { x: 4, y: 3 }];
      case 'shotgun': return [{ x: 4, y: 2 }];
      default: return [];
    }
  }

  return [];
}

function generateRange (isPlayer=true, variant='shot', xBase=0, yBase=0) {
  const tiles = [];
  const rangeTiles = generateRangeTiles(isPlayer, variant);
  const extraHitTiles = generateExtraHitTiles(isPlayer, variant);

  for (let x = 0; x < RANGE_MAX; x++) {
    for (let y = 0; y < RANGE_MAX; y++) {
      if (!cornerTile(x, y)) tiles.push(generateTile(x, y, rangeTiles, extraHitTiles, xBase, yBase))
    }
  }

  let userPosition = generateUserPosition(isPlayer, variant);

  return (
    <g>
      {tiles}
      {renderUser(userPosition, xBase, yBase)}
    </g>
  )
};

export default generateRange;
