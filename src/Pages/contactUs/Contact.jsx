import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
         <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Left Section - Image */}
        <div className="w-1/2">
          <img
            src="/contact-image.jpg"
            alt="Virtual Banking"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Form and Contact Info */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500 h-24"
            />
            <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Contact Us</button>
          </form>

          {/* Contact Info */}
          <div className="mt-8">
            <p className="font-semibold">Contact</p>
            <p className="text-blue-600">hi@green.com</p>
            <p className="font-semibold mt-4">Based in</p>
            <p>New York, California, Ohio</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
   
  );
};

export default Contact;
