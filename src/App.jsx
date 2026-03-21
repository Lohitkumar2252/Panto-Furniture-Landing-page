import React from "react";

import HeroBottom from "./components/HeroBottom";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <HeroBottom />
        <ProductsSection />
        <AboutSection />
        <TestimonialSection/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
