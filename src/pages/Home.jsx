import React, { useEffect, useRef } from 'react';

import { Categories } from '../components/Categories';
import { Professionals } from '../components/Professionals';

import AboutUs from '../components/aboutus';
import Hero1 from '../components/DreamHero';
import HeroImage from '../components/heroimage';

const Home = () => {
  
      
  return (
   <>
        <HeroImage />
     
        <Hero1 />
      
        <AboutUs />
    
        <Categories />
       
    
        <Professionals />

    </>
      
  );
};

export default Home;
