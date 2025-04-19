import React from "react";
import Navbar from "../../Components/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Footer from "../../Components/Footer";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Banner from "./Banner/Banner";
import NormalBanner from "./LatesrBanner/NormalBanner";
import Features from "./Features/Features";
import ElectronicsRental from "./Secondary/SecondaryBAnner";
import Electronics from "./ElecronicsRental/Electronis";
import OurProcess from "../../Components/OurProcess/OurProcess";
import HelmetTitle from "../../Components/HelmetTitle";
// import LiveChat from "../../Components/LiveChat/LiveChat";

const Home = () => {
  return (
    <div className="">
      <HelmetTitle title={'Home'}/>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <OurProcess />
      <NormalBanner />
      {/* <ServiceSection /> */}
      <ElectronicsRental />
      {/* <LattesrBanner /> */}
      <Electronics />
      <Testimonials />
      {/* <LiveChat/> */}
      {/* <OurNews />  FIXME: I create a new blog page  */}
      <Footer />
    </div>
  );
};

export default Home;
