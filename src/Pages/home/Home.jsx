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
import ServiceSection from "../Service/ServiceSection";
import OurProcess from "../../Components/OurProcess/OurProcess";
import HelmetTitle from "../../Components/HelmetTitle";

const Home = () => {
  return (
    <div className="">
      <HelmetTitle title={'Home'}/>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <OurProcess />
      <Features />

      <NormalBanner />
      {/* <ServiceSection /> */}
      <ElectronicsRental />
      {/* <LattesrBanner /> */}
      <Electronics />
      <Testimonials />
      {/* <OurNews />  FIXME: I create a new blog page  */}
      <Footer />
    </div>
  );
};

export default Home;
