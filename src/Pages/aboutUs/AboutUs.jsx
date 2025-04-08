import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Teamcard from "./Teamcard";
import LatestNews from "./LatestNews";
import Gallery from "./Gallery";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <section className="w-11/12 mx-auto pb-20">
        <div className="my-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <span className="divider"></span>
        </div>

        {/* about us banner */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co.com/YBWh2rMk/frame-155.webp"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-5 my-auto">
              <p className="text-lg font-semibold text-gray-600">
                Quality & Efficience
              </p>
              <h1 className="text-3xl md:text-5xl font-bold">
                Exceptional <br /> Craftsmanship, Endless Possibilities
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                At our Company, we have been a trusted name in the industry for
                many years. We specialize in providing top-notch electronics and
                IT solutions for homeowners, contractors, and designers. Our
                commitment to excellence starts from the moment you step into
                our showroom or browse our online catalog.
              </p>
            </div>
          </div>

          {/* responsive overlay banner text */}
          <div className="bg-black/80   p-4 md:p-6 text-center w-full md:w-1/2 absolute bottom-4 md:top-[80%] left-0 md:left-[16%] rounded-xl">
            <h1 className="text-xl  md:text-3xl lg:text-4xl font-bold text-white uppercase">
              Where every detail matters in crafting your perfect floor
            </h1>
          </div>
        </div>
        {/* about us banner end */}
      </section>

      {/* Hero background section */}
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/0yPcrQcv/lonovo-think-x1-5-scaled.webp")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="my-20"
      >
        <div className="py-20 px-4 md:px-0 w-11/12 mx-auto">
          <div className="w-full md:w-2/3 lg:w-1/2 space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Sustainable Electronics
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Affordable Electronics Rental for Everyone
            </h1>
            <p className="text-base md:text-lg text-white">
              With years of experience and a passion for design, we specialize
              in creating stunning kitchens that combine functionality and
              style. From concept to delivery, our team of experts will work
              closely with you to bring your vision to life.
            </p>
            <button className="btn bg-blue-500 text-white border-none text-lg md:text-xl font-bold">
              Explore Products
            </button>
          </div>
        </div>
      </div>

      <Teamcard />
      <LatestNews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default AboutUs;
