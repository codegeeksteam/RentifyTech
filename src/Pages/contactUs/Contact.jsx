 

// import React, { useRef, useState } from 'react';
// import emailjs from "@emailjs/browser";
// import Footer from '../../Components/Footer';
// import Navbar from '../../Components/Navbar';
// import HelmetTitle from '../../Components/HelmetTitle';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus("Sending...");

//     emailjs
//       .sendForm("service_a609f54", "template_nbhb31q", form.current, "DXMrIyiC32rc37Gkd")
//       .then(() => {
//         setStatus("Message sent successfully! We'll get back to you soon.");
//         e.target.reset();
//       })
//       .catch(() => setStatus("Failed to send message. Please try again."))
//       .finally(() => setIsSubmitting(false));
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100">
//       <HelmetTitle title={'Contact Us'} />
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="relative py-20 bg-black text-white text-center">
//         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center"></div>
//         <div className="relative z-10 container mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
//           <p className="text-xl max-w-lg mx-auto">Have questions or want to work with us? We're just a message away.</p>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto bg-white">
//           {/* Left Section - Image with Overlay */}
//           <div className="w-full md:w-1/2 relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 z-10"></div>
//             <img
//               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//               alt="Technology Background"
//               className="w-full h-full object-cover"
//             />
//             {/* Contact Info Overlay */}
//             <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
//               <div className="mb-6">
//                 <p className="text-lg font-semibold">Email</p>
//                 <a href="mailto:codegeeksteam@gmail.com" className="text-lg hover:text-blue-300 transition">
//                   codegeeksteam@gmail.com
//                 </a>
//               </div>
              
//               <div className="mb-6">
//                 <p className="text-lg font-semibold">Locations</p>
//                 <p className="text-lg">Jamuna Future Park Dhaka Bangladesh </p>
//               </div>
              
//               <div className="mb-6">
//                 <p className="text-lg font-semibold">Office Hours</p>
//                 <p className="text-lg">Monday - Friday: 9AM - 5PM EST</p>
//               </div>
              
//               {/* Social Icons */}
//               <div className="mt-8">
//                 <p className="text-lg font-semibold mb-4">Connect With Us</p>
//                 <div className="flex gap-6">
//                   <a href="#" className="text-white hover:text-blue-300 transition">
//                     <FontAwesomeIcon icon={faTwitter} size="2x" />
//                   </a>
//                   <a href="#" className="text-white hover:text-blue-300 transition">
//                     <FontAwesomeIcon icon={faLinkedin} size="2x" />
//                   </a>
//                   <a href="#" className="text-white hover:text-blue-300 transition">
//                     <FontAwesomeIcon icon={faInstagram} size="2x" />
//                   </a>
//                   <a href="#" className="text-white hover:text-blue-300 transition">
//                     <FontAwesomeIcon icon={faGithub} size="2x" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Form */}
//           <div className="w-full md:w-1/2 p-8 md:p-12">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
//               <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
//             </div>
            
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="user_name"
//                   placeholder="Full Name"
//                   className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition"
//                   required
//                 />
//               </div>
              
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="user_email"
//                   placeholder="Email Address"
//                   className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition"
//                   required
//                 />
//               </div>
              
//               <div className="relative">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   className="w-full py-3 px-4 border-b-2 border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:border-blue-600 focus:bg-white transition h-32"
//                   required
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
//               </button>
              
//               {status && (
//                 <div className={`mt-4 p-3 rounded-lg text-center ${status.includes("successfully") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
//                   {status}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
      
//       {/* Map Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="bg-white rounded-xl shadow-lg p-4 max-w-5xl mx-auto">
//           <div className="aspect-w-16 aspect-h-9">
//           <iframe 
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3280089730442!2d90.42217491498247!3d23.81363988456282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1618994996524!5m2!1sen!2sbd"
//   width="100%" 
//   height="450" 
//   style={{ border: 0 }} 
//   allowFullScreen="" 
//   loading="lazy"
//   className="rounded-lg"
//   title="Jamuna Future Park, Dhaka, Bangladesh"
// ></iframe>
//           </div>
//         </div>
//       </div>
      
      
      
//       <Footer />
//     </div>
//   );
// };

// export default Contact;



import React, { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import HelmetTitle from '../../Components/HelmetTitle';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock, 
  FaPhone, 
  FaPaperPlane, 
  FaCircleNotch,
  FaAngleRight
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [isVisible, setIsVisible] = useState({
    hero: false,
    form: false,
    faq: false,
    map: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

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

  // FAQs for the contact page
  const faqs = [
    {
      question: "How does the rental process work?",
      answer: "Our rental process is simple: Browse our catalog, select your desired items, choose a rental period, complete checkout, and we'll deliver the equipment to your location. When the rental period is over, simply return the items using our prepaid shipping label."
    },
    {
      question: "What if the equipment gets damaged?",
      answer: "All our rentals include basic protection coverage. For any damage beyond normal wear and tear, we assess the situation case by case. We offer additional premium protection plans that cover most accidental damages."
    },
    {
      question: "Can I extend my rental period?",
      answer: "Yes! You can extend your rental period through your account dashboard or by contacting our customer service. Extensions are subject to availability and should be requested at least 48 hours before your scheduled return date."
    },
    {
      question: "Do you offer same-day delivery?",
      answer: "We offer same-day delivery in select cities for orders placed before 11 AM. During checkout, you'll see if your location qualifies for same-day delivery based on your postal code."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For corporate clients, we also offer invoicing options with approved credit applications."
    }
  ];

  // Contact methods with icons
  const contactMethods = [
    {
      icon: <FaPhone className="text-blue-500" />,
      title: "Call Us",
      content: "+880 1234 567890",
      action: "tel:+8801234567890",
      actionText: "Call now"
    },
    {
      icon: <FaEnvelope className="text-blue-500" />,
      title: "Email Us",
      content: "codegeeksteam@gmail.com",
      action: "mailto:codegeeksteam@gmail.com",
      actionText: "Send email"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      title: "Visit Us",
      content: "Jamuna Future Park, Dhaka, Bangladesh",
      action: "https://maps.google.com/?q=Jamuna+Future+Park+Dhaka+Bangladesh",
      actionText: "Get directions"
    },
    {
      icon: <FaClock className="text-blue-500" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 5PM EST",
      action: "#schedule",
      actionText: "See full schedule"
    }
  ];

  // Department tabs
  const departments = [
    { id: "general", label: "General Inquiries" },
    { id: "support", label: "Technical Support" },
    { id: "sales", label: "Sales & Rentals" },
    { id: "business", label: "Business Relations" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <HelmetTitle title={'Contact Us | ElecRental'} />
      <Navbar />
      
      {/* Hero Section */}
      <div 
        data-section="hero"
        className={`relative py-28 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden ${
          isVisible.hero ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-fixed bg-center"></div>
          {/* Animated dots overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500 bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            REACH OUT TO US
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-xl mx-auto mb-12 text-blue-100">
            Have questions about our rental services or need technical support? We're here to help you find the perfect tech solution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white text-black bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-white bg-opacity-20  w-14 h-14 rounded-full flex items-center justify-center">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{method.title}</h3>
                <p className="text-blue-100 text-black mb-4">{method.content}</p>
                <a href={method.action} className="inline-flex items-center text-black hover:text-white">
                  {method.actionText} <FaAngleRight className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "70px" }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#f9fafb" }}></path>
          </svg>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div 
        data-section="form"
        className={`container mx-auto px-4 py-24 -mt-8 relative z-20 ${
          isVisible.form ? 'animate-fadeIn' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Section - Info and Social */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-purple-700 p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full"></div>
                <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Let's talk about your project</h3>
                
                <p className="mb-8 text-blue-100">
                  Want to discuss rental options for your event or business? Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <FaEnvelope className="mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:codegeeksteam@gmail.com" className="text-blue-200 hover:text-white transition">
                        codegeeksteam@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-blue-200">Jamuna Future Park<br/>Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <p className="text-blue-200">Monday - Friday: 9AM - 5PM EST<br/>Saturday: 10AM - 2PM EST</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Icons */}
                <div>
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                      <FaTwitter />
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                      <FaInstagram />
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                
                {/* Department selector tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {departments.map(dept => (
                    <button
                      key={dept.id}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        activeTab === dept.id 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveTab(dept.id)}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition min-h-32"
                    rows={5}
                    required
                  ></textarea>
                </div>

                {/* Custom checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="text-gray-600">
                      Subscribe to our newsletter for exclusive offers and rental tips
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <FaCircleNotch className="animate-spin mr-2" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
                
                {status && (
                  <div 
                    className={`mt-4 p-4 rounded-lg text-center ${
                      status.includes("successfully") 
                        ? "bg-green-50 text-green-800 border border-green-200" 
                        : "bg-red-50 text-red-800 border border-red-200"
                    } animate-fadeIn`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div 
        data-section="faq"
        className={`container mx-auto px-4 py-24 ${
          isVisible.faq ? 'animate-fadeIn' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.6s' }}
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions & Answers</h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about our rental services and policies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? Contact our support team.</p>
          <Link to="/faq" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all">
            View All FAQs
          </Link>
        </div>
      </div>
      
      {/* Map Section */}
      <div 
        data-section="map"
        className={`container mx-auto px-4 py-16 ${
          isVisible.map ? 'animate-fadeIn' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.9s' }}
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-6">Visit Our Store</h3>
              <p className="text-gray-600 mb-8">
                Come experience our products in person at our flagship showroom located in Jamuna Future Park.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">
                      Jamuna Future Park<br />
                      KA-244, Kuril, Progoti Shoroni<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Store Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 10AM - 8PM<br />
                      Saturday: 10AM - 6PM<br />
                      Sunday: 12PM - 5PM
                    </p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Jamuna+Future+Park+Dhaka+Bangladesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Get Directions
              </a>
            </div>
            
            <div className="lg:col-span-2">
              <div className="h-full min-h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3280089730442!2d90.42217491498247!3d23.81363988456282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb333248370356dee!2sJamuna%20Future%20Park!5e0!3m2!1sen!2sbd!4v1618994996524!5m2!1sen!2sbd"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Jamuna Future Park, Dhaka, Bangladesh"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for exclusive offers, new product alerts, and rental tips.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                required
              />
              <button 
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* CSS Animation Classes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;