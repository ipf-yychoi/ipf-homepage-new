import React from "react";

import TitleSection from "../sections/Home/TitleSection";
import AboutSection from "../sections/Home/AboutSection";
import ProductionSection from "../sections/Home/ProductSection";
import NewsSection from "../sections/Home/NewsSection";
import CareerSection from "../sections/Home/CareerSection";
import BettSection from "../sections/Home/BettSection";
import AwardsSection from "../sections/Home/AwardsSection";
import Navigation from "../containers/Navigation";
import Footer from "../containers/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <TitleSection />
      <AboutSection />
      <ProductionSection />
      <NewsSection />
      <CareerSection />
      <BettSection />
      <AwardsSection />
      <Footer />
    </>
  );
}

export default Home;
