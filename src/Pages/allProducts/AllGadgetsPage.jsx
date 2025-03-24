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
      image:
        'https://images.squarespace-cdn.com/content/v1/579bbd35b3db2bfbd63eb3ae/c8c56199-41fd-436f-acaf-0ca67487d511/canon6dreviewwithsamplephotos.jpg',
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
      image:
        'https://www.ryans.com/storage/products/main/rode-wireless-pro-2-person-24ghz-wireless-11703397432.webp',
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
      image:
        'https://digitalshopbd.com/public/uploads/all/pOotuMppVUMDbf4csF1DeYOgsO2z1cz3EsneGRGH.jpg',
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
      image:
        'https://www.glazerscamera.com/cdn/shop/products/55202-_HeroAssetTemplate_1200x1200.jpg?v=1637773438',
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
      image:
        'https://www.startech.com.bd/image/cache/catalog/camera/video-camera/panasonic/ag-cx6/ag-cx6-01-500x500.webp',
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
      image:
        'https://cameraclix.com.au/cdn/shop/products/mkbfra4-bh-det13_1800x1800.jpg?v=1627603072',
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
      image:
        'https://sm.ign.com/ign_pk/cover/a/alienware-/alienware-x16_dxsk.jpg',
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
      image:
        'https://diamu.com.bd/wp-content/uploads/2022/05/DJI-Mini-3-Pro-5-600x600.jpg',
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
      image:
        'https://www.audio-technica.com/media/catalog/product/cache/177161fc218aa2dd413f2b73f6832b88/a/t/atm10a_01.png',
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
      image:
        'https://digitalshopbd.com/public/uploads/all/E9msTmFIWkMEKdnv1yjYOLTIQ18QlVKTVvblKaZn.jpg',
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
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8PMN47Ifaki5et84sqQ-Zwr1lWw7v0p9kg&s',
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
      image:
        'https://ca.neewer.com/cdn/shop/collections/56201274_1130981433769478_1291467037715470866_n_d97dec4b-8cb8-4c4e-ab02-6c0311223b83.webp',
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
      image:
        'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2024/04/dsc09112-copy.jpg',
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
      image:
        'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.news_app_ed.jpg',
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
      image:
        'https://www.cined.com/content/uploads/2023/07/ZHIYUN-CRANE-4-gimbal2.jpg',
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
      image: 'https://assets.cathayphoto.com.sg/product/SR_3453_1.jpg',
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
      image:
        'https://www.techlandbd.com/image/cache/catalog/Benq/benq-rd280u-29-inch-4k-hdr-programming-monitor-01-400x280h.jpg',
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
      image:
        'https://www.computervillage.com.bd/image/cache/catalog/uploads/products/photos/item_Canon-EF-100-400mm-f-4.5-5.6L-IS-II-USM-Telephoto-Zoom-Lens-price-__1653149777-550x350h.jpeg',
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
      image:
        'https://adminapi.applegadgetsbd.com/storage/media/large/4905-85049.jpg',
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
      image:
        'https://sm.pcmag.com/pcmag_me/review/b/bose-quiet/bose-quietcomfort-ultra-headphones_bknf.jpg',
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
      image:
        'https://cdn.mos.cms.futurecdn.net/4LipsXNLPxqeoULL3RQV86-1200-80.jpg',
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
      image:
        'https://gadgetstudiobd.com/wp-content/uploads/2023/01/jbl-boombox-3-portable-bluetooth-speaker7-e1740992565152.webp',
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
      image:
        'https://i.guim.co.uk/img/media/d063ed41b7d29f7f190dc13f5544ed87298d54e3/405_476_4645_2787/master/4645.jpg',
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
      image:
        'https://i5.walmartimages.com/seo/Wacom-One-Digital-Drawing-Tablet-13-3in-Graphics-Display-19in-Length-x-14in-Width-x-5in-Height_3ee336e9-f1be-46e2-8535-f973e828f5aa_1.68a3a405dd701708614f40a7cb5c726d.jpeg',
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
      image:
        'https://i5.walmartimages.com/seo/LPT-Oculus-Quest-2-Advanced-All-In-One-Virtual-Reality-Headset-256-GB-for-Christmas-Holiday_16a9974e-a5b0-4cad-a98e-730148409bef.3e8858a1d3beb01ff2fbc79a880beedf.jpeg',
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
      image:
        'https://computerimporter.com/image/cache/catalog/products/action-cam/gopro2-400x400.jpg',
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
      image:
        'https://digitalshopbd.com/public/uploads/all/xvVLkN4WkSO3X1lmnZxFQXRxgmHPcmmJYfcBEmzk.jpg',
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
      image:
        'https://cdn.shopify.com/s/files/1/0460/2567/0805/products/STEELSERIES-ARCTIS-3-GAMING-HEADSET-BLACK.jpg',
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
      image:
        'https://laptopbd.net/wp-content/uploads/2022/04/download-1-33.jpg',
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
      image:
        'https://i0.wp.com/netgearstore.com.bd/wp-content/uploads/2021/09/pf-69bcb2d0-XR1000F1.webp',
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
      image:
        'https://mobileimages.lowes.com/productimages/891566e6-bb0d-43c1-9fae-ac87a775349b/67783427.jpeg',
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
      image:
        'https://xiaomistores.co.za/wp-content/uploads/2023/05/BHR4854GL_wr_05.jpg',
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
      image:
        'https://www.gadstyle.com/wp-content/uploads/2024/10/sony-wf-c510-truly-wireless-in-ear-bluetooth-earbuds-1.webp',
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
      image:
        'https://media.wired.com/photos/5eebfa29e8f495017d8cec03/1:1/w_1800,h_1800,c_limit/Gear-HiMirror-Slide-SOURCE-HiMirror.jpg',
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
      image:
        'https://static3.nordic.pictures/38954985-thickbox_default/bose-frames-tenor-smartglasses-bluetooth.jpg',
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
      image:
        'https://down-sg.img.susercontent.com/file/sg-11134207-7rd5c-lvzsez9apnre18',
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
      image:
        'https://www.nespresso.com/ecom/medias/sys_master/public/10386920505374/M-0350-PDP-Background.jpg',
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
      image:
        'https://pyxis.nymag.com/v1/imgs/c01/736/96c58e4d2174f35e9b8b49103bdbcd7d73-ode-oura-ring-secondary.jpg',
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
                  className="bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <Link to={'/cam-sony-a7iii'}>
                      <img
                        src={gadget.image}
                        alt={gadget.name}
                        className="group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-t-lg w-full h-48 object-cover"
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
                    <Link
                      to={'/cam-sony-a7iii'}
                      className="text-lg font-medium mb-2 text-black"
                    >
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
