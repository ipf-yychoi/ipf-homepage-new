import React from 'react';

import HelmetComponent from '../components/HelmetComponent';
import TitleSection from '../sections/Home/TitleSection';
import AboutSection from '../sections/Home/AboutSection';
import ProductionSection from '../sections/Home/ProductSection';
import NewsSection from '../sections/Home/NewsSection';
import CareerSection from '../sections/Home/CareerSection';
import BettSection from '../sections/Home/BettSection';
import AwardsSection from '../sections/Home/AwardsSection';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';
import NaverConnectionChannels from '../components/NaverConnectionChannels';

function Home() {
  return (
    <>
      <HelmetComponent />
      <Navigation />
      <TitleSection />
      <AboutSection />
      <ProductionSection />
      <NewsSection />
      <CareerSection />
      <BettSection />
      <AwardsSection />
      <Footer />
      <NaverConnectionChannels />
    </>
  );
}

export default Home;
