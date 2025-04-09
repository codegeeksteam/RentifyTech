import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import HelmetTitle from '../../Components/HelmetTitle';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_a609f54", "template_nbhb31q", form.current, "DXMrIyiC32rc37Gkd")
      .then(() => {
        setStatus("Sent");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message ❌"));
  };

  return (
    <div>
      <HelmetTitle title={'About'}/>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="flex bg-white rounded-tl-[100px] rounded-br-[100px] shadow-2xl overflow-hidden w-full max-w-4xl">
          {/* Left Section - Image */}
          <div className="w-1/2">
            <img
              src="https://i.ibb.co.com/nTy19jJ/technology-theme-black-background-with-blue-highlights-futuristic-technological-vibes-163892-4596-1.jpg"
              alt="Virtual Banking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Form and Contact Info */}
          <div className="w-1/2 p-10">
            <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-black"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-black"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-black h-24"
                required
              />
              <button
                type="submit"
                className="bg-white text-black border border-black hover:bg-black hover:text-white py-2 px-6 rounded"
              >
                SEND MASSAGE
              </button>
              {status && <p className="mt-4 text-center text-lg font-medium">{status}</p>}
            </form>

            {/* Contact Info */}
            <div className="mt-8">
              <p className="font-semibold">Contact</p>
              <a href="mailto:codegeeksteam@gmail.com" className="text-lg text-blue-600 transition">
                codegeeksteam@gmail.com
              </a>
              <p className="font-semibold mt-4">Based in</p>
              <p>New York, California, Ohio</p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <i className="fa-brands fa-square-x-twitter"></i>
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
