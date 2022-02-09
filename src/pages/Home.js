import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection.component";
import Cards from "../components/Cards/Cards.component";
import Footer from "../components/Footer/Footer.component";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
