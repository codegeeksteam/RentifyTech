 

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Clock, Calendar, Share2, ChevronLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import Footer from "../../Components/Footer";
// import Navbar from "../../Components/Navbar";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         // console.log(`Fetching post with ID: ${id}`); // Debug log
//         const response = await fetch(`https://rentify-tech-server.vercel.app/posts/${id}`);
        
//         console.log('Response status:', response.status); // Debug log
//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error('Error response:', errorData); // Debug log
//           throw new Error(response.status === 404 
//             ? "Blog post not found" 
//             : "Failed to fetch blog post");
//         }
  
//         const data = await response.json();
//         console.log('Received data:', data); // Debug log
//         setBlog(data);
//         // ...
//       } catch (err) {
//         console.error("Full error:", err); // Debug log
//         setError(err.message);
//       }
//     };
  
//     fetchBlogData();
//   }, [id]);
   

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="container mx-auto px-4 py-12">
//           <div className="animate-pulse">
//             <div className="h-8 w-1/4 bg-gray-200 rounded mb-6"></div>
//             <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
//             <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
//             <div className="h-96 bg-gray-200 rounded mb-8"></div>
//             <div className="space-y-4">
//               {[1, 2, 3, 4, 5].map(n => (
//                 <div key={n} className="h-4 bg-gray-200 rounded w-full"></div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

// //   if (!blog) {
// //     return (
// //       <div className="min-h-screen bg-gray-50">
// //         <Navbar />
// //         <div className="container mx-auto px-4 py-12 text-center">
// //           <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
// //           <Link to="/blogs" className="text-blue-600 hover:underline">
// //             ← Back to all posts
// //           </Link>
// //         </div>
// //         <Footer />
// //       </div>
// //     );
// //   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="container mx-auto px-4 py-8">
//         <Link 
//           to="/blog" 
//           className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <ChevronLeft size={18} className="mr-1" />
//           Back to all posts
//         </Link>

//         <article className="max-w-4xl mx-auto">
//           <div className="mb-8">
//             <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
//               {blog.category}
//             </span>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {blog.title}
//             </h1>
            
//             <div className="flex items-center gap-4 text-gray-500 mb-6">
//               <div className="flex items-center">
//                 <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
//                 <span>{blog.author}</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar size={16} className="mr-1" />
//                 <span>{blog.date}</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock size={16} className="mr-1" />
//                 <span>{blog.readTime}</span>
//               </div>
//             </div>
//           </div>

//           <div className="mb-12">
//             <img 
//               src={blog.img} 
//               alt={blog.title} 
//               className="w-full h-auto rounded-lg shadow-md mb-8"
//             />
            
//             <div className="prose max-w-none">
//               {blog.content ? (
//                 <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//               ) : (
//                 <>
//                   <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
//                   <p className="text-gray-700 mb-4">
//                     This is a detailed expansion of the blog post. In a real implementation, 
//                     this would be replaced with the actual content from your database.
//                   </p>
//                   <p className="text-gray-700 mb-4">
//                     The content would include several paragraphs explaining the topic in depth,
//                     with relevant examples, images, and possibly embedded media.
//                   </p>
//                   <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
//                   <ul className="list-disc pl-6 mb-6">
//                     <li className="mb-2">Detailed analysis of the topic</li>
//                     <li className="mb-2">Practical tips and advice</li>
//                     <li className="mb-2">Expert opinions and insights</li>
//                     <li>Future trends and predictions</li>
//                   </ul>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-8 mb-12">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
//               <div className="flex gap-4">
//                 <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
//                   <Share2 size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </article>

//         {relatedBlogs.length > 0 && (
//           <div className="mt-16">
//             <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {relatedBlogs.map((post) => (
//                 <div
//                   key={post._id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="relative">
//                     <img
//                       src={post.img}
//                       alt={post.title}
//                       className="w-full h-52 object-cover"
//                     />
//                   </div>
//                   <div className="p-5">
//                     <div className="flex justify-between items-center mb-3">
//                       <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
//                         {post.category}
//                       </span>
//                       <div className="flex items-center text-gray-500 text-sm">
//                         <Calendar size={14} className="mr-1" />
//                         {post.date}
//                       </div>
//                     </div>
//                     <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                       {post.description}
//                     </p>
//                     <Link 
//                       to={`/blogs/${post._id}`}
//                       className="text-blue-600 font-medium hover:text-blue-800 text-sm"
//                     >
//                       Read Article →
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BlogDetails;


// //


import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Calendar, Share2, ChevronLeft } from "lucide-react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://rentify-tech-server.vercel.app/posts/${id}`);
        if (!response.ok) {
          throw new Error(response.status === 404
            ? "Blog post not found"
            : "Failed to fetch blog post");
        }

        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      if (!blog) return;

      try {
        const res = await fetch(`https://rentify-tech-server.vercel.app/posts?category=${blog.category}`);
        const data = await res.json();
        const filtered = data.filter(post => post._id !== blog._id);
        setRelatedBlogs(filtered);
      } catch (err) {
        console.error("Failed to load related blogs:", err);
      }
    };

    fetchRelatedBlogs();
  }, [blog]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 w-1/4 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map(n => (
                <div key={n} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog || error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">{error || "Blog post not found"}</h2>
          <Link to="/blogs" className="text-blue-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/blogs"
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ChevronLeft size={18} className="mr-1" />
          Back to all posts
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-500 mb-6 flex-wrap">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-auto rounded-lg shadow-md mb-8"
            />

            <div className="prose max-w-none">
              {blog.content ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <>
                  <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
                  <p className="text-gray-700 mb-4">
                    This is a detailed expansion of the blog post. In a real implementation,
                    this would be replaced with the actual content from your database.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The content would include several paragraphs explaining the topic in depth,
                    with relevant examples, images, and possibly embedded media.
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Detailed analysis of the topic</li>
                    <li className="mb-2">Practical tips and advice</li>
                    <li className="mb-2">Expert opinions and insights</li>
                    <li>Future trends and predictions</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          
        </article>
 
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
