import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-white px-4 py-10">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl">
          {/* Left Section - Image */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src="/contact-image.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Form and Info */}
          <div className="md:w-1/2 w-full p-6 md:p-10 space-y-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Contact Us
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Message"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 h-24 resize-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div>
                <p className="font-semibold">Contact</p>
                <p className="text-blue-600">hi@green.com</p>
              </div>
              <div>
                <p className="font-semibold mt-4">Based in</p>
                <p>New York, California, Ohio</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-blue-600 text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-blue-600 text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-600 text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
