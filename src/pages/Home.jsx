import React, { useEffect, useRef } from 'react';

import { Categories } from '../components/Categories';
import { Professionals } from '../components/Professionals';

import AboutUs from '../components/aboutus';
import Hero1 from '../components/DreamHero';
import HeroSection from '../components/Hero';
import Services from '../components/services';


const Home = () => {
  
      
  return (
   <>
     <HeroSection />
        <Hero1 />
      
        <AboutUs />
        <Professionals />
    
        <Categories />
        <Services />
       
  

    </>
      
  );
};

export default Home;
