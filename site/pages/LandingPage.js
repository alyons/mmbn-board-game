import React from 'react';

import MuiMarkdown from '../components/MuiMarkdown';
import introduction from '../assets/data/docs/introduction';

const LandingPage = (props) => {
  return (
    <MuiMarkdown>{introduction}</MuiMarkdown>
  );
};

export default LandingPage;
