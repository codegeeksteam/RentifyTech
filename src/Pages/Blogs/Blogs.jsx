 

import { useState } from "react";
import Navbar from "../../Components/Navbar";

function OurNews() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Product Updates", "Student Guide", "Creator Tips", "Gaming", "Work Setup", "Photography"];
  
  const ourNews = [
    {
      _id: "blog001",
      title: "Latest Updates on Keyboard and TWS Rentals: Enhance Your Productivity and Sound Quality",
      description: "Discover how our latest keyboard models and True Wireless Stereo (TWS) rentals can transform your work and entertainment experience. We've added new mechanical keyboards and premium TWS options to our collection.",
      img: "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg",
      date: "25 Jan, 2025",
      author: "Tech Team",
      category: "Product Updates",
      readTime: "5 min read",
      featured: true
    },
    {
      _id: "blog002",
      title: "The Best Student Gadgets to Rent: Laptops and iPads for Every Study Need",
      description: "Find out which devices are perfect for your academic journey. From powerful laptops for programming to iPads for digital note-taking, we've got your study needs covered.",
      img: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg",
      date: "20 Feb, 2025",
      author: "Education Specialist",
      category: "Student Guide",
      readTime: "7 min read",
      featured: false
    },
    {
      _id: "blog003",
      title: "Level Up Your Content Creation: Renting Cameras and Mics for High-Quality Production",
      description: "Ready to start your content creation journey? Learn about our professional-grade cameras and microphones that can help you produce stunning content without breaking the bank.",
      img: "https://img.freepik.com/free-photo/table-with-content-creator-stuff-camera-microphone-tripod-headphones-working-from-home_1268-17410.jpg",
      date: "11 Mar, 2025",
      author: "Content Team",
      category: "Creator Tips",
      readTime: "6 min read",
      featured: true
    },
    {
      _id: "blog004",
      title: "Gaming Setup Essentials: Premium Gaming Gear Available for Rent",
      description: "Elevate your gaming experience with our premium gaming equipment rentals. From high-refresh-rate monitors to mechanical gaming keyboards and professional-grade gaming chairs.",
      img: "https://img.freepik.com/free-photo/high-angle-gaming-setup-with-controller_23-2149829777.jpg",
      date: "15 Mar, 2025",
      author: "Gaming Expert",
      category: "Gaming",
      readTime: "4 min read",
      featured: false
    },
    {
      _id: "blog005",
      title: "Work From Home Setup Guide: Essential Tech Rentals for Remote Work",
      description: "Create the perfect home office with our curated selection of tech rentals. Learn about ergonomic solutions, productivity tools, and video conferencing equipment.",
      img: "https://img.freepik.com/free-photo/home-office-setup-with-laptop-desk_23-2149073026.jpg",
      date: "18 Mar, 2025",
      author: "Remote Work Specialist",
      category: "Work Setup",
      readTime: "8 min read",
      featured: false
    },
    {
      _id: "blog006",
      title: "Photography Equipment Guide: Choose the Right Camera for Your Next Project",
      description: "Navigate through our extensive collection of photography equipment. From DSLRs to mirrorless cameras, find the perfect gear for your photography needs.",
      img: "https://img.freepik.com/free-photo/professional-camera-equipment-table_23-2149255838.jpg",
      date: "22 Mar, 2025",
      author: "Photography Expert",
      category: "Photography",
      readTime: "6 min read",
      featured: false
    },
    {
      _id: "blog007",
      title: "5 Reasons to Rent Audio Equipment Instead of Buying",
      description: "Discover why renting high-end microphones, speakers, and mixers can be more cost-effective than purchasing. Learn how to access premium sound without the premium price tag.",
      img: "https://img.freepik.com/free-photo/audio-equipment-arrangement-indoors_23-2149712316.jpg",
      date: "2 Apr, 2025",
      author: "Audio Specialist",
      category: "Audio Equipment",
      readTime: "4 min read",
      featured: true
    },
    {
      _id: "blog008",
      title: "Ultimate Guide to Drone Rentals: Capture Breathtaking Aerial Footage",
      description: "Everything you need to know about renting drones for photography and videography. Compare models, learn about regulations, and get tips for stunning aerial shots.",
      img: "https://img.freepik.com/free-photo/drone-flying-nature_23-2149406076.jpg",
      date: "10 Apr, 2025",
      author: "Drone Expert",
      category: "Photography",
      readTime: "9 min read",
      featured: false
    },
    {
      _id: "blog009",
      title: "How to Choose the Perfect Monitor for Your Design Projects",
      description: "Selecting the right monitor can make or break your design work. Learn about color accuracy, resolution, and other key factors when renting a monitor for creative work.",
      img: "https://img.freepik.com/free-photo/modern-workspace-with-computer-monitor_23-2149379754.jpg",
      date: "15 Apr, 2025",
      author: "Design Consultant",
      category: "Work Setup",
      readTime: "7 min read",
      featured: false
    },
    {
      _id: "blog010",
      title: "Virtual Reality Equipment: A Renter's Guide to Immersive Experiences",
      description: "Explore the world of VR without committing to expensive purchases. Our guide covers the best VR headsets available for rent and what experiences they excel at.",
      img: "https://img.freepik.com/free-photo/person-wearing-vr-glasses_23-2149126915.jpg",
      date: "22 Apr, 2025",
      author: "VR Specialist",
      category: "Gaming",
      readTime: "6 min read",
      featured: true
    },
    {
      _id: "blog011",
      title: "Budget-Friendly Tech Solutions for Startups: What to Rent vs. Buy",
      description: "Launching a startup? Learn which tech items make sense to rent and which are worth purchasing outright. Make smart financial decisions with our comprehensive guide.",
      img: "https://img.freepik.com/free-photo/startup-team-discussing-project_23-2147850192.jpg",
      date: "1 May, 2025",
      author: "Startup Advisor",
      category: "Business Solutions",
      readTime: "10 min read",
      featured: false
    },
    {
      _id: "blog012",
      title: "The Complete Guide to Renting Smartphones for App Testing",
      description: "Ensure your app works flawlessly across devices without purchasing dozens of smartphones. Our rental options cover the latest iOS and Android devices for comprehensive testing.",
      img: "https://img.freepik.com/free-photo/various-smartphones-desk_23-2147785129.jpg",
      date: "8 May, 2025",
      author: "App Development Expert",
      category: "Developer Tools",
      readTime: "5 min read",
      featured: false
    },
    {
      _id: "blog013",
      title: "Podcasting Equipment Rentals: Everything You Need to Start Recording",
      description: "Launch your podcast without breaking the bank. From microphones to audio interfaces, learn which equipment rentals will help you sound professional from day one.",
      img: "https://img.freepik.com/free-photo/podcasting-equipment-studio_23-2149416579.jpg",
      date: "15 May, 2025",
      author: "Podcast Producer",
      category: "Audio Equipment",
      readTime: "6 min read",
      featured: true
    },
    {
      _id: "blog014",
      title: "Tablet Comparison: Which Model is Best for Digital Art and Design",
      description: "Choosing between iPad Pro, Surface Pro, or Wacom tablets? Our comprehensive comparison helps artists and designers select the perfect tablet rental for their creative needs.",
      img: "https://img.freepik.com/free-photo/digital-artist-using-tablet_23-2149430926.jpg",
      date: "22 May, 2025",
      author: "Digital Artist",
      category: "Design Tools",
      readTime: "8 min read",
      featured: false
    },
    {
      _id: "blog015",
      title: "Mechanical Keyboard Guide: Finding Your Perfect Typing Experience",
      description: "Dive into the world of mechanical keyboards. Learn about switch types, keycap materials, and how to choose the perfect rental keyboard for gaming, typing, or programming.",
      img: "https://img.freepik.com/free-photo/colorful-keyboard-close-up_23-2149410747.jpg",
      date: "1 Jun, 2025",
      author: "Keyboard Enthusiast",
      category: "Product Updates",
      readTime: "7 min read",
      featured: false
    },
    {
      _id: "blog016",
      title: "Event Tech Rentals: Essential Equipment for Conferences and Meetups",
      description: "Planning an event? Discover which tech equipment you should rent to ensure a smooth experience for speakers and attendees alike, from projectors to sound systems.",
      img: "https://img.freepik.com/free-photo/business-conference-setup_23-2149309154.jpg",
      date: "10 Jun, 2025",
      author: "Event Coordinator",
      category: "Business Solutions",
      readTime: "9 min read",
      featured: true
    },
    {
      _id: "blog017",
      title: "Streaming Setup Guide: Professional Equipment Rentals for Twitch and YouTube",
      description: "Take your streaming presence to the next level with professional equipment. Learn which cameras, lights, and audio gear will help you stand out in a crowded field.",
      img: "https://img.freepik.com/free-photo/streaming-setup-with-camera_23-2149579811.jpg",
      date: "18 Jun, 2025",
      author: "Streaming Coach",
      category: "Creator Tips",
      readTime: "7 min read",
      featured: false
    },
    {
      _id: "blog018",
      title: "Smart Home Tech Rentals: Try Before You Commit",
      description: "Curious about smart home technology? Rent devices like smart speakers, displays, and home automation hubs to test compatibility with your lifestyle before investing.",
      img: "https://img.freepik.com/free-photo/smart-home-devices_23-2149416415.jpg",
      date: "25 Jun, 2025",
      author: "Smart Home Expert",
      category: "Home Tech",
      readTime: "5 min read",
      featured: false
    },
    {
      _id: "blog019",
      title: "Projector Rental Guide: Choosing the Right Model for Home Theater vs. Business",
      description: "Find the perfect projector for your needs, whether you're setting up a home cinema or preparing for a business presentation. Learn about lumens, contrast ratios, and connectivity.",
      img: "https://img.freepik.com/free-photo/projector-home-theater_23-2149408426.jpg",
      date: "2 Jul, 2025",
      author: "AV Specialist",
      category: "Home Tech",
      readTime: "6 min read",
      featured: true
    },
    {
      _id: "blog020",
      title: "3D Printing Equipment Rentals: Bringing Your Designs to Life",
      description: "Explore the possibilities of 3D printing without the initial investment. Learn about different printer types, materials, and which rental options are best for your project needs.",
      img: "https://img.freepik.com/free-photo/3d-printer-action_23-2149370094.jpg",
      date: "10 Jul, 2025",
      author: "3D Printing Engineer",
      category: "Design Tools",
      readTime: "8 min read",
      featured: false
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = filter === "All" 
    ? ourNews 
    : ourNews.filter(post => post.category === filter);
  
  // Get featured posts
  const featuredPosts = ourNews.filter(post => post.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-indigo-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">RentifyTech Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, Updates, and Tech Tips to Help You Make the Most of Your Rentals
          </p>
        </div>
      </div>
      
      {/* Featured Posts Carousel */}
      {featuredPosts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Posts</h2>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {featuredPosts.map((post) => (
              <div 
                key={post.title} 
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                    Read More <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <span className="inline-block h-8 w-8 rounded-full bg-gray-200 mr-2"></span>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
                  Read More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Newsletter Signup */}
      <div className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest tech rental tips and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurNews;