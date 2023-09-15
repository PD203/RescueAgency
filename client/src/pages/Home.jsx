import React from "react";
import Agencylist from "../components/Agencylist";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ourmission from "../components/Ourmission";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Agencylist />
      <Ourmission/>
      <Footer/>
    </div>
  );
};

export default Home;