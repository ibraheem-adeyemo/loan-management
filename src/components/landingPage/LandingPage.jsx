import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWork';
import HowCanWeHelp from './HowCanWeHelp';
import './landingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <HowCanWeHelp />
    </div>
  )
}

export default LandingPage;
