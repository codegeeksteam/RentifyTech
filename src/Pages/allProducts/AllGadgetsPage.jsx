import { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

const AllGadgetsPage = () => {
  // Hardcoded gadget data - 38 Gadgets with variation
  const allGadgetsData = [
    {
      id: 1,
      name: 'Professional DSLR Camera',
      brand: 'Canon',
      category: 'Photography',
      image: '/api/placeholder/300/300',
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      available: true,
    },
    {
      id: 2,
      name: 'Wireless Microphone Set',
      brand: 'Rode',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 29.99,
      rating: 4.6,
      reviews: 87,
      available: true,
    },
    {
      id: 3,
      name: 'Ultra-wide Lens 16-35mm',
      brand: 'Sony',
      category: 'Photography',
      image: '/api/placeholder/300/300',
      price: 34.99,
      rating: 4.9,
      reviews: 56,
      available: true,
    },
    {
      id: 4,
      name: 'Portable LED Light Panel',
      brand: 'Aputure',
      category: 'Lighting',
      image: '/api/placeholder/300/300',
      price: 24.99,
      rating: 4.7,
      reviews: 93,
      available: false,
    },
    {
      id: 5,
      name: '4K Video Camera',
      brand: 'Panasonic',
      category: 'Video',
      image: '/api/placeholder/300/300',
      price: 59.99,
      rating: 4.5,
      reviews: 42,
      available: true,
    },
    {
      id: 6,
      name: 'Professional Tripod',
      brand: 'Manfrotto',
      category: 'Accessories',
      image: '/api/placeholder/300/300',
      price: 19.99,
      rating: 4.4,
      reviews: 118,
      available: true,
    },
    {
      id: 7,
      name: 'Gaming Laptop',
      brand: 'Alienware',
      category: 'Computers',
      image: '/api/placeholder/300/300',
      price: 89.99,
      rating: 4.9,
      reviews: 74,
      available: true,
    },
    {
      id: 8,
      name: 'Drone with 4K Camera',
      brand: 'DJI',
      category: 'Drones',
      image: '/api/placeholder/300/300',
      price: 79.99,
      rating: 4.7,
      reviews: 105,
      available: true,
    },
    {
      id: 9,
      name: 'Condenser Microphone',
      brand: 'Audio-Technica',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 22.99,
      rating: 4.6,
      reviews: 67,
      available: false,
    },
    {
      id: 10,
      name: 'Mirrorless Camera',
      brand: 'Sony',
      category: 'Photography',
      image: '/api/placeholder/300/300',
      price: 54.99,
      rating: 4.8,
      reviews: 91,
      available: true,
    },
    {
      id: 11,
      name: 'Studio Headphones',
      brand: 'Sennheiser',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 24.99,
      rating: 4.5,
      reviews: 78,
      available: true,
    },
    {
      id: 12,
      name: 'Ring Light Kit',
      brand: 'Neewer',
      category: 'Lighting',
      image: '/api/placeholder/300/300',
      price: 16.99,
      rating: 4.3,
      reviews: 145,
      available: true,
    },
    {
      id: 13,
      name: '360 Degree Camera',
      brand: 'Insta360',
      category: 'Photography',
      image: '/api/placeholder/300/300',
      price: 44.99,
      rating: 4.7,
      reviews: 62,
      available: true,
    },
    {
      id: 14,
      name: 'MacBook Pro',
      brand: 'Apple',
      category: 'Computers',
      image: '/api/placeholder/300/300',
      price: 99.99,
      rating: 4.9,
      reviews: 156,
      available: true,
    },
    {
      id: 15,
      name: 'Gimbal Stabilizer',
      brand: 'Zhiyun',
      category: 'Video',
      image: '/api/placeholder/300/300',
      price: 32.99,
      rating: 4.4,
      reviews: 83,
      available: true,
    },
    {
      id: 16,
      name: 'Wireless Lavalier Mic',
      brand: 'Rode',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 27.99,
      rating: 4.6,
      reviews: 94,
      available: false,
    },
    {
      id: 17,
      name: 'Professional Monitor',
      brand: 'BenQ',
      category: 'Computers',
      image: '/api/placeholder/300/300',
      price: 65.99,
      rating: 4.8,
      reviews: 71,
      available: true,
    },
    {
      id: 18,
      name: 'Telephoto Lens',
      brand: 'Canon',
      category: 'Photography',
      image: '/api/placeholder/300/300',
      price: 39.99,
      rating: 4.7,
      reviews: 108,
      available: true,
    },
    // Added 20 new products
    {
      id: 19,
      name: 'Smartphone Gimbal',
      brand: 'DJI',
      category: 'Accessories',
      image: '/api/placeholder/300/300',
      price: 69.99,
      rating: 4.6,
      reviews: 56,
      available: true,
    },
    {
      id: 20,
      name: 'Noise Cancelling Headphones',
      brand: 'Bose',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 119.99,
      rating: 4.8,
      reviews: 145,
      available: true,
    },
    {
      id: 21,
      name: 'Smartwatch Series 6',
      brand: 'Apple',
      category: 'Wearables',
      image: '/api/placeholder/300/300',
      price: 399.99,
      rating: 4.9,
      reviews: 312,
      available: true,
    },
    {
      id: 22,
      name: 'Bluetooth Speaker',
      brand: 'JBL',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 49.99,
      rating: 4.7,
      reviews: 89,
      available: true,
    },
    {
      id: 23,
      name: 'Smart Home Hub',
      brand: 'Amazon',
      category: 'Smart Home',
      image: '/api/placeholder/300/300',
      price: 89.99,
      rating: 4.6,
      reviews: 205,
      available: true,
    },
    {
      id: 24,
      name: 'Digital Drawing Tablet',
      brand: 'Wacom',
      category: 'Accessories',
      image: '/api/placeholder/300/300',
      price: 129.99,
      rating: 4.7,
      reviews: 112,
      available: true,
    },
    {
      id: 25,
      name: 'VR Headset',
      brand: 'Oculus',
      category: 'Virtual Reality',
      image: '/api/placeholder/300/300',
      price: 299.99,
      rating: 4.8,
      reviews: 185,
      available: true,
    },
    {
      id: 26,
      name: '4K Action Camera',
      brand: 'GoPro',
      category: 'Video',
      image: '/api/placeholder/300/300',
      price: 199.99,
      rating: 4.9,
      reviews: 67,
      available: true,
    },
    {
      id: 27,
      name: 'Mini Drone',
      brand: 'DJI',
      category: 'Drones',
      image: '/api/placeholder/300/300',
      price: 99.99,
      rating: 4.7,
      reviews: 118,
      available: true,
    },
    {
      id: 28,
      name: 'Gaming Headset',
      brand: 'SteelSeries',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 79.99,
      rating: 4.6,
      reviews: 99,
      available: true,
    },
    {
      id: 29,
      name: 'Laptop Cooling Pad',
      brand: 'Cooler Master',
      category: 'Computers',
      image: '/api/placeholder/300/300',
      price: 39.99,
      rating: 4.4,
      reviews: 121,
      available: true,
    },
    {
      id: 30,
      name: 'Wireless Router',
      brand: 'Netgear',
      category: 'Computers',
      image: '/api/placeholder/300/300',
      price: 69.99,
      rating: 4.7,
      reviews: 87,
      available: true,
    },
    {
      id: 31,
      name: 'Smart Thermostat',
      brand: 'Nest',
      category: 'Smart Home',
      image: '/api/placeholder/300/300',
      price: 129.99,
      rating: 4.6,
      reviews: 54,
      available: true,
    },
    {
      id: 32,
      name: 'Electric Scooter',
      brand: 'Xiaomi',
      category: 'Vehicles',
      image: '/api/placeholder/300/300',
      price: 499.99,
      rating: 4.9,
      reviews: 65,
      available: true,
    },
    {
      id: 33,
      name: 'Bluetooth Earbuds',
      brand: 'Sony',
      category: 'Audio',
      image: '/api/placeholder/300/300',
      price: 89.99,
      rating: 4.8,
      reviews: 112,
      available: true,
    },
    {
      id: 34,
      name: 'Smart Mirror',
      brand: 'HiMirror',
      category: 'Smart Home',
      image: '/api/placeholder/300/300',
      price: 199.99,
      rating: 4.7,
      reviews: 78,
      available: true,
    },
    {
      id: 35,
      name: 'Smart Glasses',
      brand: 'Bose',
      category: 'Wearables',
      image: '/api/placeholder/300/300',
      price: 249.99,
      rating: 4.6,
      reviews: 56,
      available: true,
    },
    {
      id: 36,
      name: 'Portable Power Bank',
      brand: 'Anker',
      category: 'Accessories',
      image: '/api/placeholder/300/300',
      price: 29.99,
      rating: 4.6,
      reviews: 134,
      available: true,
    },
    {
      id: 37,
      name: 'Smart Coffee Maker',
      brand: 'Nespresso',
      category: 'Smart Home',
      image: '/api/placeholder/300/300',
      price: 179.99,
      rating: 4.7,
      reviews: 65,
      available: true,
    },
    {
      id: 38,
      name: 'Smart Ring',
      brand: 'Oura',
      category: 'Wearables',
      image: '/api/placeholder/300/300',
      price: 299.99,
      rating: 4.8,
      reviews: 120,
      available: true,
    },
  ];

  // States for filtering, pagination, and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredGadgets, setFilteredGadgets] = useState(allGadgetsData);
  const GadgetsPerPage = 12;

  // Get unique categories for filter dropdown
  const categories = [
    'All',
    ...new Set(allGadgetsData.map((gadget) => gadget.category)),
  ];

  // Filter and sort Gadgets whenever filter states change
  useEffect(() => {
    let result = [...allGadgetsData];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (gadget) =>
          gadget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          gadget.brand.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (categoryFilter !== 'All') {
      result = result.filter((gadget) => gadget.category === categoryFilter);
    }

    // Sort Gadgets
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // 'recommended'
        // Do nothing, keep original order
        break;
    }

    setFilteredGadgets(result);
    setCurrentPage(1); // Reset to first page after filtering
  }, [searchTerm, categoryFilter, sortBy]);

  // Get current Gadgets for pagination
  const indexOfLastgadget = currentPage * GadgetsPerPage;
  const indexOfFirstgadget = indexOfLastgadget - GadgetsPerPage;
  const currentGadgets = filteredGadgets.slice(
    indexOfFirstgadget,
    indexOfLastgadget,
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredGadgets.length / GadgetsPerPage);

  // Change page
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Rental Gadgets</h1>
            <p className="text-gray-600">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5"
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
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
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
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sort by
                </label>
                <select
                  id="sort"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredGadgets.length === 0 ? 0 : indexOfFirstgadget + 1}-
            {Math.min(indexOfLastgadget, filteredGadgets.length)} of{' '}
            {filteredGadgets.length} results
          </div>

          {/* gadget Grid */}
          {filteredGadgets.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
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
                  key={gadget.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <Link to={'/cam-sony-a7iii'}>
                      <img
                        src={gadget.image}
                        alt={gadget.name}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </Link>
                    {!gadget.available && (
                      <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                        Out of Stock
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs text-gray-500">{gadget.brand}</p>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="ml-1 text-xs text-gray-600">
                          {gadget.rating} ({gadget.reviews})
                        </span>
                      </div>
                    </div>
                    <Link to={'/cam-sony-a7iii'} className="text-lg font-medium mb-2 text-black">
                      {gadget.name}
                    </Link>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-black">
                          ${gadget.price}
                        </span>
                        <span className="text-gray-500 text-sm"> / day</span>
                      </div>
                      <button
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          gadget.available
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!gadget.available}
                      >
                        {gadget.available ? 'Add to Cart' : 'Unavailable'}
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
                          ? 'text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300'
                          : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-100'
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
                            ? 'text-white bg-black border-black hover:bg-gray-800'
                            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-100'
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
                          ? 'text-gray-400 cursor-not-allowed bg-gray-100 border-gray-300'
                          : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-100'
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

export default AllGadgetsPage;
