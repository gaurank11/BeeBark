import React from 'react';

import { Categories } from '../components/Categories';
import { Professionals } from '../components/Professionals';
import AboutUs from '../components/aboutus';
import Hero1 from '../components/DreamHero';
import HeroSection from '../components/Hero';
import Services from '../components/services';
import M_Services from '../components/m_services';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <Hero1 />
      <AboutUs />
      <Professionals />
      <Categories />

      {/* Services Section */}
      <div className="hidden md:block overflow-hidden">
        {/* Visible on medium and larger screens */}
        <Services />
      </div>
      <div className="md:hidden">
        {/* Visible on small screens only */}
        <M_Services />
      </div>
    </div>
  );
};

export default Home;
