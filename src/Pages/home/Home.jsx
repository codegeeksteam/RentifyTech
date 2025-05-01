import React from "react";
import Navbar from "../../Components/Navbar";
import Testimonials from "./testimonials/Testimonials";
import Footer from "../../Components/Footer";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Banner from "./Banner/Banner";
import NormalBanner from "./LatesrBanner/NormalBanner";
import ElectronicsRental from "./Secondary/SecondaryBAnner";
import Electronics from "./ElecronicsRental/Electronis";
import OurProcess from "../../Components/OurProcess/OurProcess";
import HelmetTitle from "../../Components/HelmetTitle";
import TestimonialSlider from "./testimonials/TestimonialSlider";
// import LiveChat from "../../Components/LiveChat/LiveChat";

const Home = () => {
  console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div className="">
      <HelmetTitle title={'Home'}/>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <OurProcess />
      <NormalBanner />
      <ElectronicsRental />
      <Electronics />
      <TestimonialSlider />
      {/* <LiveChat/> */}
      {/* <OurNews />  FIXME: I create a new blog page  */}
      <Footer />
    </div>
  );
};

export default Home;
