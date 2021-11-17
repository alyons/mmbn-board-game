import React from 'react';

import EnemyCard from './EnemyCard';
import mettaur from '../assets/data/viruses/mettaur';

export default {
  component: EnemyCard,
  title: 'Components/EnemyCards'
};

export const Mettaur = () => <EnemyCard {...mettaur} />;
