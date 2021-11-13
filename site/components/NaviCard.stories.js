import React from 'react';

import NaviCard from './NaviCard';
import megaman from '../assets/data/navis/megaman';

export default {
  component: NaviCard,
  title: 'Components/NaviCards'
};

export const MegaMan = () => <NaviCard {...megaman} />;