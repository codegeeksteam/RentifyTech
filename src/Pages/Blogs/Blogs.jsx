import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import HelmetTitle from "../../Components/HelmetTitle";

function OurNews() {
  const [filter, setFilter] = useState("All");
  const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Product Updates",
    "Student Guide",
    "Creator Tips",
    "Gaming",
    "Work Setup",
    "Photography",
  ];

   

//  
useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://rentify-tech-server.vercel.app/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      // setLoading(false);
    }
  };

  fetchBlogs();
}, []);
const ourNews = blogs;

  // Filter posts based on selected category
  const filteredPosts =
    filter === "All"
      ? ourNews
      : ourNews.filter((post) => post.category === filter);

  // Get featured posts
  const featuredPosts = ourNews.filter((post) => post.featured);
  return (
    <div className="min-h-screen">
      <HelmetTitle title={"About"}></HelmetTitle>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-200 to-indigo-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">RentifyTech Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, Updates, and Tech Tips to Help You Make the Most of Your
            Rentals
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            Featured Posts
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {featuredPosts.map((post) => (
              <div
                key={post._id}
                className="min-w-[300px] md:min-w-[400px] rounded-lg shadow-md overflow-hidden flex-shrink-0"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Link className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                    Read More <span className="ml-1">→</span>
                  </Link>
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

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-600 text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
                <Link className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                  Read More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurNews;
