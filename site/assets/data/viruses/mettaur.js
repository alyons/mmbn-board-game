import icon from '../../images/viruses/mettaur/icon.webp';
import full from '../../images/viruses/mettaur/full.webp';

const mettaur = {
  name: 'Mettaur',
  icon,
  full,
  attack: {
    name: 'Shockwave',
    damage: [20, 40, 60],
    range: 'shockwave',
    elements: [],
    notes: 'Blocked by broken panels'
  },
  move: 'Does not move.',
  special: 'Immunue to all damage except weaknesses until next activation.',
  hitPoints: 40
};

export default mettaur;
