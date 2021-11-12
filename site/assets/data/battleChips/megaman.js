import areaStealImg from '../../images/battleChips/areaSteal.webp';
import cannonImg from '../../images/battleChips/cannon.webp';
import crossgunImg from '../../images/battleChips/crossgun.webp';
import escapeImg from '../../images/battleChips/escape.webp';
import miniBombImg from '../../images/battleChips/miniBomb.webp';
import recover10Img from '../../images/battleChips/recover10.webp';
import shotgunImg from '../../images/battleChips/shotgun.webp';
import swordImg from '../../images/battleChips/sword.webp';
import wideSwordImg from '../../images/battleChips/wideSword.webp';
import xPanelImg from '../../images/battleChips/xPanel.webp';

const megamanFolder = [{
  name: 'Cannon',
  type: 'Null',
  damage: 40,
  code: 'A',
  description: 'A nice, big cannon!',
  image: cannonImg,
  range: 'shot'
}, {
  name: 'Cannon',
  type: 'Null',
  damage: 40,
  code: 'A',
  description: 'A nice, big cannon!',
  image: cannonImg,
  range: 'shot'
}, {
  name: 'Cannon',
  type: 'Null',
  damage: 40,
  code: 'B',
  description: 'A nice, big cannon!',
  image: cannonImg,
  range: 'shot'
}, {
  name: 'Cannon',
  type: 'Null',
  damage: 40,
  code: 'B',
  description: 'A nice, big cannon!',
  image: cannonImg,
  range: 'shot'
}, {
  name: 'Shotgun',
  type: 'Null',
  damage: 30,
  code: 'N',
  description: 'Hits enemy and keeps going 1 panel.',
  image: shotgunImg,
  range: 'shotgun'
}, {
  name: 'Shotgun',
  type: 'Null',
  damage: 30,
  code: 'N',
  description: 'Hits enemy and keeps going 1 panel.',
  image: shotgunImg,
  range: 'shotgun'
}, {
  name: 'Shotgun',
  type: 'Null',
  damage: 30,
  code: 'N',
  description: 'Hits enemy and keeps going 1 panel.',
  image: shotgunImg,
  range: 'shotgun'
}, {
  name: 'Shotgun',
  type: 'Null',
  damage: 30,
  code: 'N',
  description: 'Hits enemy and keeps going 1 panel.',
  image: shotgunImg,
  range: 'shotgun'
}, {
  name: 'CrossGun',
  type: 'Null',
  damage: 30,
  code: 'J',
  description: '4-panel diagonal blast',
  image: crossgunImg,
  range: 'crossgun'
}, {
  name: 'CrossGun',
  type: 'Null',
  damage: 30,
  code: 'J',
  description: '4-panel diagonal blast',
  image: crossgunImg,
  range: 'crossgun'
}, {
  name: 'CrossGun',
  type: 'Null',
  damage: 30,
  code: 'J',
  description: '4-panel diagonal blast',
  image: crossgunImg,
  range: 'crossgun'
}, {
  name: 'CrossGun',
  type: 'Null',
  damage: 30,
  code: 'J',
  description: '4-panel diagonal blast',
  image: crossgunImg,
  range: 'crossgun'
}, {
  name: 'MiniBomb',
  type: 'Null',
  damage: 50,
  code: 'C',
  description: 'Throw a bomb! Depth=3',
  image: miniBombImg,
  range: 'lob'
}, {
  name: 'MiniBomb',
  type: 'Null',
  damage: 50,
  code: 'C',
  description: 'Throw a bomb! Depth=3',
  image: miniBombImg,
  range: 'lob'
}, {
  name: 'MiniBomb',
  type: 'Null',
  damage: 50,
  code: 'L',
  description: 'Throw a bomb! Depth=3',
  image: miniBombImg,
  range: 'lob'
}, {
  name: 'MiniBomb',
  type: 'Null',
  damage: 50,
  code: 'L',
  description: 'Throw a bomb! Depth=3',
  image: miniBombImg,
  range: 'lob'
}, {
  name: 'Sword',
  type: 'Null',
  damage: 80,
  code: 'S',
  description: 'Cut down enemies Range=1',
  image: swordImg,
  range: 'sword'
}, {
  name: 'Sword',
  type: 'Null',
  damage: 80,
  code: 'S',
  description: 'Cut down enemies Range=1',
  image: swordImg,
  range: 'sword'
}, {
  name: 'Sword',
  type: 'Null',
  damage: 80,
  code: 'S',
  description: 'Cut down enemies Range=1',
  image: swordImg,
  range: 'sword'
}, {
  name: 'Sword',
  type: 'Null',
  damage: 80,
  code: 'S',
  description: 'Cut down enemies Range=1',
  image: swordImg,
  range: 'sword'
}, {
  name: 'WideSwrd',
  type: 'Null',
  damage: 80,
  code: 'S',
  description: 'Cut down a column! Range=1',
  image: wideSwordImg,
  range: 'widesword'
}, {
  name: 'X-Panel',
  type: 'Null',
  damage: 0,
  code: 'L',
  description: 'Erase 1 panel Range=1',
  image: xPanelImg,
  range: 'sword'
}, {
  name: 'X-Panel',
  type: 'Null',
  damage: 0,
  code: 'L',
  description: 'Erase 1 panel Range=1',
  image: xPanelImg,
  range: 'sword'
}, {
  name: 'Recov10',
  type: 'Null',
  damage: 0,
  code: 'A',
  description: 'Recover 10 HP',
  image: recover10Img,
  range: 'self'
}, {
  name: 'Recov10',
  type: 'Null',
  damage: 0,
  code: 'A',
  description: 'Recover 10 HP',
  image: recover10Img,
  range: 'self'
}, {
  name: 'Recov10',
  type: 'Null',
  damage: 0,
  code: 'A',
  description: 'Recover 10 HP',
  image: recover10Img,
  range: 'self'
}, {
  name: 'Recov10',
  type: 'Null',
  damage: 0,
  code: 'L',
  description: 'Recover 10 HP',
  image: recover10Img,
  range: 'self'
}, {
  name: 'Recov10',
  type: 'Null',
  damage: 0,
  code: 'L',
  description: 'Recover 10 HP',
  image: recover10Img,
  range: 'self'
}, {
  name: 'Area Steal',
  type: 'Null',
  damage: 0,
  code: 'S',
  description: 'Steal the left column of enemy area',
  image: areaStealImg,
  range: 'self'
}, {
  name: 'Escape',
  type: 'Null',
  damage: 0,
  code: 'F',
  description: 'Escape from most enemies',
  image: escapeImg,
  range: 'self'
}];

export default megamanFolder;
