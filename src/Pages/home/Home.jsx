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
import RentalSection from "./RentalSection/RentalSection";
import OurProcess from "../../Components/OurProcess/OurProcess";


const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurProcess />
      <Features />
      <FeaturedProducts></FeaturedProducts>
      <NormalBanner />
      <ElectronicsRental />
      <LattesrBanner />
      <Electronics />
      <Testimonials />
      <OurNews />
      <Footer />
    </div>
  );
};

export default Home;
