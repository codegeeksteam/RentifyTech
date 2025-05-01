 

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import HelmetTitle from '../../Components/HelmetTitle';

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Waseque Arafat",
      role: "Full Stack Developer",
      image: "https://i.ibb.co.com/FsrgXvR/20220326-170758-01.jpg",
      bio: "Expert in building modern web applications with React and Node.js",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 2,
      name: "Khaled Bin Monowar Hossain ",
      role: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/111820117",
      bio: "10+ years of experience in technology leadership and innovation",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 3,
      name: "MD. Sirazul Islam",
      role: "Full Stack Developer",
      image: "https://i.ibb.co.com/0yCBMSHF/miraz.jpg",
      bio: "Specialized in frontend architecture and performance optimization",
      social: {
        linkedin: "https://www.linkedin.com/in/sirazul-islam-1a4893318/",
        twitter: "https://x.com/SirazulIsl48",
        email: "sirazulislam3734@gmail.com",
      },
    },
    {
      id: 4,
      name: "Maria Garcia",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Creating intuitive and beautiful user experiences for digital products",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 4,
      name: "Shahriar Araf ",
      role: "Full Stack Developer",
      image: "https://i.ibb.co.com/5z3j793/Whats-App-Image-2025-05-01-at-16-16-10.jpg",
      bio: "Creating intuitive and beautiful user experiences for digital products",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      id: 6,
      name: "Maria Garcia",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Creating intuitive and beautiful user experiences for digital products",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  // Latest news data
  const newsData = [
    {
      date: "February 21, 2024",
      category: "Audio",
      title: "Elevate Your Sound: Rent the Latest Audio Gear at Unbeatable Prices!",
      image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/image_image_main_-600x600.webp",
      excerpt: "Discover our premium selection of audio equipment available for rent at prices that won't break the bank."
    },
    {
      date: "February 21, 2024",
      category: "Gadgets",
      title: "Tech Upgrade: Explore Our Top 10 Trending Gadgets for Rent!",
      image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/mask_group-3-600x235.webp",
      excerpt: "Stay current with the latest technology without the commitment. Check out what's trending in our rental catalog."
    },
    {
      date: "February 20, 2024",
      category: "Gaming",
      title: "Game On: Rent High-Performance Gaming Consoles for Ultimate Entertainment!",
      image: "https://electrental.webdevia.com/wp-content/uploads/2023/12/frame_155.webp",
      excerpt: "Experience next-gen gaming without the hefty price tag. Our gaming consoles are ready for your next adventure."
    },
  ];

  // Gallery images
  const galleryImages = [
    "https://i.ibb.co.com/Kz66MXhg/gadefa.webp",
    "https://i.ibb.co.com/tG9KpSr/80s.jpg",
    "https://www.yankodesign.com/images/design_news/2021/09/retro-home-gadgets/retro_home_gadgets_modern_functionality_15.jpg",
    "https://e-techno-electronic.myshopify.com/cdn/shop/files/L03-banner-03.webp?v=1710236180&width=1920",
    "https://weburbanist.com/wp-content/uploads/2015/01/retro-tech-rotary-iphone-dock-468x351.jpg",
    "https://i.ibb.co.com/jB0t8Fx/key.jpg",
  ];

  // Company stats
  const companyStats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "500+", label: "Products Available" },
    { value: "50+", label: "Expert Staff" },
    { value: "10+", label: "Years of Service" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <HelmetTitle title={'About Us | ElecRental'} />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 font-medium text-sm mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About RentifyTech</h1>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Experience premium electronics without the premium price tag. 
              We're revolutionizing access to cutting-edge technology through our flexible rental services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co.com/YBWh2rMk/frame-155.webp" 
                  alt="Team working together" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8  rounded-xl p-6 text-white hidden md:block">
                <h3 className="text-xl font-bold">Est. 2012</h3>
                <p>A decade of excellence</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Exceptional Technology, <br />
                <span className="text-blue-600">Endless Possibilities</span>
              </h2>
              <p className="text-lg text-gray-600">
                At ElecRental, we have been a trusted name in the industry for over a decade. We specialize in providing top-notch electronics and IT solutions for individuals, businesses, and event organizers. 
                Our commitment to excellence starts from the moment you browse our catalog to the day you return your rented equipment.
              </p>
              <p className="text-lg text-gray-600">
                With a wide range of high-quality products, personalized services, and a team of knowledgeable professionals, we are here to make cutting-edge technology accessible to everyone.
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/blogs" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                  Learn More
                </Link>
                <Link to="/all-gadgets" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 md:px-8  ">
        <div className="max-w-7xl mx-auto text-center">
          <FaQuoteLeft className="text-5xl opacity-30 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Our mission is to democratize access to technology by providing affordable rental options without compromising on quality
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            We believe everyone deserves access to the tools that power modern life
          </p>
        </div>
      </section>

      {/* Hero Background Section */}
      <section 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://i.ibb.co.com/0yPcrQcv/lonovo-think-x1-5-scaled.webp")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
        className="py-24 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full md:w-3/5 lg:w-1/2 space-y-6">
            <h3 className="text-xl font-semibold text-blue-400">
              Sustainable Electronics
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Affordable Technology Rental for Everyone
            </h2>
            <p className="text-lg text-gray-300">
              With years of experience and a passion for innovation, we specialize in providing cutting-edge electronics that combine functionality and style. From laptops to gaming consoles, our team of experts will work closely with you to find the perfect technology solution for your needs.
            </p>
            <div className="pt-4">
              <Link to="/all-gadgets" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all">
                Explore Products <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success, dedicated to bringing you the best technology rental experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest News</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and announcements from ElecRental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                    Read More <FaArrowRight className="ml-2" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-semibold text-blue-400 mb-2">
                Tech You Desire,
              </h3>
              <h3 className="text-3xl font-semibold">
                <span className="text-white">Moments You </span>
                <span className="text-yellow-300">Create.</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group h-72"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-6">
                    <a href="#" className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
                      View Larger
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8   text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">Ready to experience premium technology without the premium cost?</h2>
          <p className="text-xl text-black max-w-2xl mx-auto mb-8">
            Browse our extensive catalog and find the perfect tech for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/all-gadgets" className= " btn  bg-sky-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all text-lg">
              Explore Products
            </Link>
            <Link to="/contact" className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;