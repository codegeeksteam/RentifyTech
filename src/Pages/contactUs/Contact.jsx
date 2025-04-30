 

import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import HelmetTitle from '../../Components/HelmetTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    emailjs
      .sendForm("service_a609f54", "template_nbhb31q", form.current, "DXMrIyiC32rc37Gkd")
      .then(() => {
        setStatus("Message sent successfully! We'll get back to you soon.");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message. Please try again."))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <HelmetTitle title={'Contact Us'} />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-black text-white text-center">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-lg mx-auto">Have questions or want to work with us? We're just a message away.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto bg-white">
          {/* Left Section - Image with Overlay */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Technology Background"
              className="w-full h-full object-cover"
            />
            {/* Contact Info Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="mb-6">
                <p className="text-lg font-semibold">Email</p>
                <a href="mailto:codegeeksteam@gmail.com" className="text-lg hover:text-blue-300 transition">
                  codegeeksteam@gmail.com
                </a>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-semibold">Locations</p>
                <p className="text-lg">Jamuna Future Park Dhaka Bangladesh </p>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-semibold">Office Hours</p>
                <p className="text-lg">Monday - Friday: 9AM - 5PM EST</p>
              </div>
              
              {/* Social Icons */}
              <div className="mt-8">
                <p className="text-lg font-semibold mb-4">Connect With Us</p>
                <div className="flex gap-6">
                  <a href="#" className="text-white hover:text-blue-300 transition">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="#" className="text-white hover:text-blue-300 transition">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition"
                  required
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition"
                  required
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition h-32"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
              
              {status && (
                <div className={`mt-4 p-3 rounded-lg text-center ${status.includes("successfully") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3280089730442!2d90.42217491498247!3d23.81363988456282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1618994996524!5m2!1sen!2sbd"
  width="100%" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy"
  className="rounded-lg"
  title="Jamuna Future Park, Dhaka, Bangladesh"
></iframe>
          </div>
        </div>
      </div>
      
      
      
      <Footer />
    </div>
  );
};

export default Contact;