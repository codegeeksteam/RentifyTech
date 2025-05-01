// // import { useEffect, useState } from "react";
// // import Navbar from "../../Components/Navbar";
// // import { Link } from "react-router-dom";
// // import HelmetTitle from "../../Components/HelmetTitle";

// // function OurNews() {
// //   const [filter, setFilter] = useState("All");
// //   const [blogs, setBlogs] = useState([]);
// //   // const [loading, setLoading] = useState(true);

// //   const categories = [
// //     "All",
// //     "Product Updates",
// //     "Student Guide",
// //     "Creator Tips",
// //     "Gaming",
// //     "Work Setup",
// //     "Photography",
// //   ];

   

// // //  
// // useEffect(() => {
// //   const fetchBlogs = async () => {
// //     try {
// //       const response = await fetch(' http://localhost:4000/posts');
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch blogs');
// //       }
// //       const data = await response.json();
// //       setBlogs(data);
// //     } catch (error) {
// //       console.error('Error fetching blogs:', error);
// //     } finally {
// //       // setLoading(false);
// //     }
// //   };

// //   fetchBlogs();
// // }, []);
// // const ourNews = blogs;

// //   // Filter posts based on selected category
// //   const filteredPosts =
// //     filter === "All"
// //       ? ourNews
// //       : ourNews.filter((post) => post.category === filter);

// //   // Get featured posts
// //   const featuredPosts = ourNews.filter((post) => post.featured);
// //   return (
// //     <div className="min-h-screen">
// //       <HelmetTitle title={"About"}></HelmetTitle>
// //       <Navbar />

// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-r from-blue-200 to-indigo-400 text-white py-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h1 className="text-5xl font-bold mb-4">RentifyTech Blog</h1>
// //           <p className="text-xl max-w-2xl mx-auto">
// //             Insights, Updates, and Tech Tips to Help You Make the Most of Your
// //             Rentals
// //           </p>
// //         </div>
// //       </div>

// //       {/* Featured Posts */}
// //       {featuredPosts.length > 0 && (
// //         <div className="container mx-auto px-4 py-12">
// //           <h2 className="text-2xl font-bold mb-6">
// //             Featured Posts
// //           </h2>
// //           <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
// //             {featuredPosts.map((post) => (
// //               <div
// //                 key={post._id}
// //                 className="min-w-[300px] md:min-w-[400px] rounded-lg shadow-md overflow-hidden flex-shrink-0"
// //               >
// //                 <div className="relative h-48 overflow-hidden">
// //                   <img
// //                     src={post.img}
// //                     alt={post.title}
// //                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
// //                   />
// //                   <div className="absolute top-4 left-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">
// //                     Featured
// //                   </div>
// //                 </div>
// //                 <div className="p-5">
// //                   <div className="flex justify-between items-center mb-3">
// //                     <span className="text-blue-600 text-sm font-medium">
// //                       {post.category}
// //                     </span>
// //                     <span className="text-gray-400 text-sm">{post.date}</span>
// //                   </div>
// //                   <h3 className="text-lg font-bold mb-2 line-clamp-2">
// //                     {post.title}
// //                   </h3>
// //                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">
// //                     {post.description}
// //                   </p>
// //                   <Link className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
// //                     Read More <span className="ml-1">→</span>
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Category Filter */}
// //       <div className="container mx-auto px-4 mb-8">
// //         <div className="flex flex-wrap gap-2 justify-center">
// //           {categories.map((category) => (
// //             <button
// //               key={category}
// //               onClick={() => setFilter(category)}
// //               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
// //                 filter === category
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-white text-gray-700 hover:bg-gray-100"
// //               }`}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Blog Grid */}
// //       <div className="container mx-auto px-4 pb-12">
// //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //           {filteredPosts.map((post) => (
// //             <div
// //               key={post._id}
// //               className="rounded-lg shadow-md overflow-hidden"
// //             >
// //               <img
// //                 src={post.img}
// //                 alt={post.title}
// //                 className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
// //               />
// //               <div className="p-5">
// //                 <div className="flex justify-between items-center mb-2">
// //                   <span className="text-blue-600 text-sm font-medium">
// //                     {post.category}
// //                   </span>
// //                   <span className="text-gray-400 text-sm">{post.date}</span>
// //                 </div>
// //                 <h3 className="text-lg font-bold mb-2 line-clamp-2">
// //                   {post.title}
// //                 </h3>
// //                 <p className="text-gray-400 text-sm mb-4 line-clamp-2">
// //                   {post.description}
// //                 </p>
// //                 <Link className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
// //                   Read More <span className="ml-1">→</span>
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OurNews;
// import { useEffect, useState } from "react";
// import { Clock, Search, Bookmark, Eye, ChevronRight, Calendar, Share2 } from "lucide-react";
// import Footer from "../../Components/Footer";
// import Navbar from "../../Components/Navbar";
// import { Link } from "react-router-dom";

// const ModernBlogPage = () => {
//   const [filter, setFilter] = useState("All");
//   const [blogs, setBlogs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [featuredIndex, setFeaturedIndex] = useState(0);

//   const categories = [
//     "All",
//     "Product Updates",
//     "Student Guide",
//     "Creator Tips",
//     "Gaming",
//     "Work Setup",
//     "Photography",
//   ];

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(' http://localhost:4000posts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch blogs');
//         }
//         const data = await response.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//         // Fallback to dummy data if API fails
//         setBlogs([
//           {
//             "_id": "67f750475f95dc0335039fe7",
//             "title": "Latest Updates on Keyboard and TWS Rentals: Enhance Your Productivity and Sound Quality",
//             "description": "Discover how our latest keyboard models and True Wireless Stereo (TWS) rentals can transform your work and entertainment experience. We've added new mechanical keyboards and premium TWS options to our collection.",
//             "img": "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg",
//             "date": "25 Jan, 2025",
//             "author": "Tech Team",
//             "category": "Product Updates",
//             "readTime": "5 min read",
//             "featured": true
//           },
//           // Add more fallback posts if needed
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     // Auto-rotate featured posts every 5 seconds
//     const rotateInterval = setInterval(() => {
//       const featuredPosts = blogs.filter(post => post.featured);
//       if (featuredPosts.length > 0) {
//         setFeaturedIndex(prevIndex => (prevIndex + 1) % featuredPosts.length);
//       }
//     }, 5000);

//     fetchBlogs();
    
//     return () => clearInterval(rotateInterval);
//   }, []);

//   // Filter posts based on selected category and search query
//   const filteredPosts = blogs.filter(post => {
//     const matchesCategory = filter === "All" || post.category === filter;
//     const matchesSearch = searchQuery === "" || 
//       post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       post.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // Get featured posts
//   const featuredPosts = blogs.filter(post => post.featured);
//   const currentFeatured = featuredPosts[featuredIndex];

//   // Calculate dots for featured carousel
//   const featuredDots = [];
//   for (let i = 0; i < featuredPosts.length; i++) {
//     featuredDots.push(
//       <button 
//         key={i} 
//         className={`w-2 h-2 rounded-full mx-1 ${i === featuredIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
//         onClick={() => setFeaturedIndex(i)}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar/>
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-gray-900">RentifyTech</h1>
//               <span className="ml-2 text-sm font-semibold px-2 py-1 bg-gray-100 rounded text-gray-600">BLOG</span>
//             </div>
            
//             <div className="flex items-center space-x-6">
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Search articles..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-64"
//                 />
//                 <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>
//               <button className="text-gray-500 hover:text-gray-700">
//                 <Bookmark size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Featured Post Hero */}
//       {currentFeatured && (
//         <div className="bg-white py-8">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
//               <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
//                 <img 
//                   src={currentFeatured.img} 
//                   alt={currentFeatured.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
//                   Featured
//                 </div>
//               </div>
//               <div className="md:w-2/5 p-6 md:p-8 bg-white flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="text-sm font-medium text-gray-600">{currentFeatured.category}</span>
//                     <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
//                     <span className="text-sm text-gray-500 flex items-center">
//                       <Clock size={14} className="mr-1" />
//                       {currentFeatured.readTime}
//                     </span>
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{currentFeatured.title}</h2>
//                   <p className="text-gray-600 mb-6">{currentFeatured.description}</p>
//                 </div>
//                 <div>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
//                       <div>
//                         <p className="text-sm font-medium">{currentFeatured.author}</p>
//                         <p className="text-xs text-gray-500">{currentFeatured.date}</p>
//                       </div>
//                     </div>
//                     {/* <button className="text-gray-800 font-medium hover:text-gray-600 flex items-center text-sm">
//                       Read Article <ChevronRight size={16} />
//                     </button> */}

// <Link
//   to={`/blog/${post._id}`}
//   className="text-gray-800 font-medium hover:text-gray-600 flex items-center text-sm"
// >
//   Read Article <ChevronRight size={16} />
// </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {featuredPosts.length > 1 && (
//               <div className="flex justify-center mt-4">
//                 {featuredDots}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Category Filter */}
//       <div className="container mx-auto px-4 py-8 border-b border-gray-200">
//         <div className="flex flex-wrap gap-2 justify-start">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 filter === category
//                   ? "bg-gray-800 text-white"
//                   : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold mb-8 text-gray-900">Latest Articles</h2>
        
//         {loading ? (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[1, 2, 3, 4, 5, 6].map(n => (
//               <div key={n} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
//                 <div className="w-full h-52 bg-gray-200" />
//                 <div className="p-5">
//                   <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
//                   <div className="h-6 bg-gray-200 rounded mb-4" />
//                   <div className="h-4 bg-gray-200 rounded mb-2" />
//                   <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
//                   <div className="h-4 bg-gray-200 rounded w-1/4" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredPosts.length > 0 ? (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {filteredPosts.map((post) => (
//               <div
//                 key={post._id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="relative">
//                   <img
//                     src={post.img}
//                     alt={post.title}
//                     className="w-full h-52 object-cover"
//                   />
//                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-5">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
//                       {post.category}
//                     </span>
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <Calendar size={14} className="mr-1" />
//                       {post.date}
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 hover:text-gray-700">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {post.description}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
//                       <span className="text-xs text-gray-500">{post.author}</span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <span className="text-xs text-gray-500 flex items-center">
//                         <Clock size={12} className="mr-1" />
//                         {post.readTime}
//                       </span>
//                       <button className="text-gray-500 hover:text-gray-900">
//                         <Share2 size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-gray-600">No articles found matching your criteria.</p>
//             <button 
//               onClick={() => {setFilter("All"); setSearchQuery("");}}
//               className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Newsletter */}
       
      
//        <Footer/>
//     </div>
//   );
// };

// export default ModernBlogPage;


import { useEffect, useState } from "react";
import { Clock, Search, Bookmark, ChevronRight, Calendar, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const BlogPage = () => {
  const [filter, setFilter] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const categories = [
    "All",
    "Product Updates",
    "Student Guide",
    "Creator Tips",
    "Gaming",
    "Work Setup",
    "Photography",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4000/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback to dummy data if API fails
        setBlogs([
          {
            "_id": "67f750475f95dc0335039fe7",
            "title": "Latest Updates on Keyboard and TWS Rentals",
            "description": "Discover how our latest keyboard models and True Wireless Stereo (TWS) rentals can transform your work and entertainment experience.",
            "img": "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404177.jpg",
            "date": "25 Jan, 2025",
            "author": "Tech Team",
            "category": "Product Updates",
            "readTime": "5 min read",
            "featured": true,
            "content": "<p>This is the full content of the blog post with HTML formatting.</p>"
          },
          {
            "_id": "67f750475f95dc0335039fe8",
            "title": "Student's Guide to Tech Rentals",
            "description": "How to access high-end equipment for your academic projects without spending your entire semester budget.",
            "img": "https://img.freepik.com/free-photo/students-using-digital-tablets_23-2148933999.jpg",
            "date": "20 Jan, 2025",
            "author": "Campus Team",
            "category": "Student Guide",
            "readTime": "4 min read",
            "featured": true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    // Auto-rotate featured posts every 5 seconds
    const rotateInterval = setInterval(() => {
      const featuredPosts = blogs.filter(post => post.featured);
      if (featuredPosts.length > 0) {
        setFeaturedIndex(prevIndex => (prevIndex + 1) % featuredPosts.length);
      }
    }, 5000);

    fetchBlogs();
    
    return () => clearInterval(rotateInterval);
  }, []);

  // Filter posts based on selected category and search query
  const filteredPosts = blogs.filter(post => {
    const matchesCategory = filter === "All" || post.category === filter;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogs.filter(post => post.featured);
  const currentFeatured = featuredPosts[featuredIndex];

  // Calculate dots for featured carousel
  const featuredDots = [];
  for (let i = 0; i < featuredPosts.length; i++) {
    featuredDots.push(
      <button 
        key={i} 
        className={`w-2 h-2 rounded-full mx-1 ${i === featuredIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
        onClick={() => setFeaturedIndex(i)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RentifyTech</h1>
              <span className="ml-2 text-sm font-semibold px-2 py-1 bg-gray-100 rounded text-gray-600">BLOG</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-64"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Post Hero */}
      {currentFeatured && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
              <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={currentFeatured.img} 
                  alt={currentFeatured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="md:w-2/5 p-6 md:p-8 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-600">{currentFeatured.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock size={14} className="mr-1" />
                      {currentFeatured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{currentFeatured.title}</h2>
                  <p className="text-gray-600 mb-6">{currentFeatured.description}</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">{currentFeatured.author}</p>
                        <p className="text-xs text-gray-500">{currentFeatured.date}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blogs/${currentFeatured._id}`}
                      className="text-gray-800 font-medium hover:text-gray-600 flex items-center text-sm"
                    >
                      Read Article <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {featuredPosts.length > 1 && (
              <div className="flex justify-center mt-4">
                {featuredDots}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8 border-b border-gray-200">
        <div className="flex flex-wrap gap-2 justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Latest Articles</h2>
        
        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-52 bg-gray-200" />
                <div className="p-5">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
                  <div className="h-6 bg-gray-200 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 hover:text-gray-700">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </span>
                      <Link 
                        to={`/blogs/${post._id}`}
                        className="text-blue-600 font-medium hover:text-blue-800 text-sm"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found matching your criteria.</p>
            <button 
              onClick={() => {setFilter("All"); setSearchQuery("");}}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  );
};

export default BlogPage;