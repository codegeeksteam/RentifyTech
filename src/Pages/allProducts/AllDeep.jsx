import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import "./AllGadgets.css";
import HelmetTitle from "../../Components/HelmetTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useWishList from "../../Hooks/useWishList";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Watch } from "react-loader-spinner";

const AllDeep = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [allGadgetsData, setAllGadgetsData] = useState([]);
  const [wishList, refetch] = useWishList();

  // Fetch all gadgets from the backend
  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const response = await axiosSecure.get(`/gadgets`);
        setAllGadgetsData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gadgets:", err);
        setError("Failed to load gadgets. Please try again later.");
        setLoading(false);
      }
    };

    fetchGadgets();
  }, [axiosSecure]);

  // States for filtering, pagination, and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGadgets, setFilteredGadgets] = useState(allGadgetsData);
  const GadgetsPerPage = 12;

  // Get unique categories for filter dropdown
  const categories = [
    "All",
    ...new Set(allGadgetsData.map((gadget) => gadget.category)),
  ];

  // Filter and sort gadgets whenever filter states change
  useEffect(() => {
    let result = [...allGadgetsData];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (gadget) =>
          gadget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          gadget.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "All") {
      result = result.filter((gadget) => gadget.category === categoryFilter);
    }

    // Sort gadgets
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.pricing.daily - b.pricing.daily);
        break;
      case "price-high":
        result.sort((a, b) => b.pricing.daily - a.pricing.daily);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // 'recommended'
        break;
    }

    setFilteredGadgets(
      result.filter((gadget) => gadget.approvalStatus === "Published")
    );
    setCurrentPage(1); // Reset to first page after filtering
  }, [searchTerm, categoryFilter, sortBy, allGadgetsData]);

  // Pagination logic
  const indexOfLastGadget = currentPage * GadgetsPerPage;
  const indexOfFirstGadget = indexOfLastGadget - GadgetsPerPage;
  const currentGadgets = filteredGadgets.slice(
    indexOfFirstGadget,
    indexOfLastGadget
  );
  const totalPages = Math.ceil(filteredGadgets.length / GadgetsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handle wishlist button click
  const handleWishListbtn = async (gadget) => {
    if (!user) {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in to your account!",
        icon: "warning",
        confirmButtonText: "LOGIN",
      });
      return;
    }

    const newData = {
      email: user.email,
      gadgetId: gadget._id,
      gadgetName: gadget.name,
      gadgetImage: gadget.images[0],
      pricing: gadget.pricing,
      gadgetAvailability: gadget.availability,
      gadgetReviews: gadget.reviews,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    // Add to wishlist
  const res =  await axiosSecure.post("/wishlist", newData);
    if(res.data.insertedId){
      refetch()
      Swal.fire({
        title: "Success!",
        text: `${gadget.name} Wishlist Added Successful!`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  if (loading) {
    return (
      <>
        <HelmetTitle title={"All Gadgets"} />
        <Navbar />
        <div className="flex justify-center items-center h-64">

        <Watch
  visible={true}
  height="40"
  width="40"
  radius="48"
  color="#000000"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <HelmetTitle title={"All Gadgets"} />
        <Navbar />
        <div className="h-[50vh] p-5 text-red-600 text-center">{error}</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <HelmetTitle title={"All Gadgets"} />
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Rental Gadgets</h1>
            <p className="text-gray-500">
              Find the perfect equipment for your next project
            </p>
          </header>

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="border placeholder-gray-500 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5"
                placeholder="Search Gadgets..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-1/2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  value={categoryFilter}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:w-1/2">
                <label
                  htmlFor="sort"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Sort by
                </label>
                <select
                  id="sort"
                  className="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-4 text-sm text-gray-500">
            Showing {filteredGadgets.length === 0 ? 0 : indexOfFirstGadget + 1}-
            {Math.min(indexOfLastGadget, filteredGadgets.length)} of{" "}
            {filteredGadgets.length} results
          </div>

          {/* Gadget Grid with 3D animations */}
          {filteredGadgets.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                No Gadgets found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentGadgets.map((gadget) => (
                <div
                  key={gadget._id}
                  className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group perspective-1000"
                >
                  <div className="relative overflow-hidden h-48">
                    <Link to={`/gadget/${gadget._id}`}>
                      <div className="relative w-full h-full preserve-3d group-hover:rotate-y-10 group-hover:scale-105 transition-all duration-500 ease-out">
                        <img
                          src={gadget.images[0]}
                          alt={gadget.name}
                          className="absolute w-full h-full object-cover rounded-t-lg backface-hidden"
                          style={{
                            transformStyle: "preserve-3d",
                            transform: "translateZ(20px)",
                            filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",
                          }}
                        />
                        <div
                          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                          style={{
                            transform: "rotateX(90deg) translateZ(-20px)",
                            transformOrigin: "bottom center",
                          }}
                        />
                        <div
                          className="absolute -bottom-4 left-1/4 w-1/2 h-2 rounded-full blur-md opacity-10 group-hover:opacity-20 transition-all duration-300"
                          style={{
                            transform: "translateZ(-30px)",
                          }}
                        />
                      </div>
                    </Link>
                    {gadget.availability.status !== "In Stock" && (
                      <div className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded">
                        {gadget.availability.status}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs text-gray-500">{gadget.brand}</p>
                      <p className="text-gray-500 text-xs">
                        {gadget?.reviews?.count < 1
                          ? "No reviews"
                          : `${gadget.reviews.average}/5 (${gadget.reviews.count})`}
                      </p>
                    </div>
                    <Link
                      to={`/gadget/${gadget._id}`}
                      className="text-lg font-medium mb-2"
                    >
                      {gadget.name}
                    </Link>
                    <div className="mb-2">
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {gadget.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-1 mb-3 text-xs">
                      <div className="text-center">
                        <span className="font-bold">
                          ${gadget.pricing.hourly}
                        </span>
                        <span className="block text-gray-500">hour</span>
                      </div>
                      <div className="text-center">
                        <span className="font-bold">
                          ${gadget.pricing.daily}
                        </span>
                        <span className="block text-gray-500">day</span>
                      </div>
                      <div className="text-center">
                        <span className="font-bold">
                          ${gadget.pricing.weekly}
                        </span>
                        <span className="block text-gray-500">week</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">
                          {gadget.availability.quantity} available
                        </span>
                      </div>
                      <div>
                        <button onClick={() => handleWishListbtn(gadget)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            className={`transition-all cursor-pointer duration-300 ${
                              wishList.some(
                                (item) => item.gadgetId === gadget._id
                              )
                                ? "text-red-500 fill-red-500"
                                : "fill-black/30 text-transparent"
                            }`}
                          >
                            <path
                              d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          gadget.availability.status === "In Stock"
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={gadget.availability.status !== "In Stock"}
                      >
                        {gadget.availability.status === "In Stock"
                          ? "Rent Now"
                          : gadget.availability.status}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-12">
              <nav aria-label="Page navigation">
                <ul className="flex items-center -space-x-px h-10">
                  <li>
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight rounded-l-lg border ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300"
                          : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                          currentPage === index + 1
                            ? "text-white bg-black border-black hover:bg-gray-800"
                            : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() =>
                        paginate(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className={`flex items-center justify-center px-4 h-10 leading-tight rounded-r-lg border ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300"
                          : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllDeep;
