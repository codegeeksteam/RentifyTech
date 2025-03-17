import React from "react";
import Navbar from "../../Components/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Footer from "../../Components/Footer";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import OurNews from "./ourNews/OurNews";
import Banner from "./Banner/Banner";
import LattesrBanner from "./LatesrBanner/LatestBanner";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials />
      <OurNews />
      <LattesrBanner />
      <Footer />
    </div>
  );
};

export default Home;
