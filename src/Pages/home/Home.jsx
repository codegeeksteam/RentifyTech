import React from "react";
import Navbar from "../../Components/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Footer from "../../Components/Footer";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import OurNews from "./ourNews/OurNews";
import Banner from "./Banner/Banner";
import LattesrBanner from "./LatesrBanner/LatestBanner";
import NormalBanner from "./LatesrBanner/NormalBanner";
import Features from "./Features/Features";
import ElectronicsRental from "./Secondary/SecondaryBAnner";
import Electronics from "./ElecronicsRental/Electronis";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features/>

      <FeaturedProducts></FeaturedProducts>
      <ElectronicsRental/>

      
      <NormalBanner />
     
      <LattesrBanner />
      <Electronics/>
      <Testimonials />
      <OurNews />
      <Footer />
    </div>
  );
};

export default Home;
