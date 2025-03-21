import { useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

const ProductDetailsPage = () => {
  // Hardcoded product data with comprehensive details
  const product = {
    id: 'cam-sony-a7iii',
    name: 'Sony Alpha A7 III Mirrorless Camera',
    brand: 'Sony',
    category: 'Cameras',
    images: [
      'https://www.startech.com.bd/image/cache/catalog/dslr-camera/sony/%20alpha-a7-m3/a7-mark-3-500x500.jpg',
      'https://www.startech.com.bd/image/cache/catalog/dslr-camera/sony/%20alpha-a7-m3/a7-mark-3-1-500x500.jpg',
      'https://www.startech.com.bd/image/cache/catalog/dslr-camera/sony/%20alpha-a7-m3/a7-mark-3-3-500x500.jpg',
      'https://www.startech.com.bd/image/cache/catalog/dslr-camera/sony/%20alpha-a7-m3/a7-mark-3-2-500x500.jpg',
    ],
    pricing: {
      hourly: 15.99,
      daily: 39.99,
      weekly: 199.99,
      deposit: 500.0,
    },
    availability: {
      status: 'In Stock',
      quantity: 3,
      nextAvailable: 'Immediately',
    },
    specifications: [
      { name: 'Sensor', value: '24.2MP Full-Frame Exmor R BSI CMOS Sensor' },
      { name: 'Image Processor', value: 'BIONZ X Image Processor' },
      { name: 'ISO Range', value: '100-51200 (Expandable to 50-204800)' },
      {
        name: 'Video Recording',
        value: '4K UHD at 30/24 fps, Full HD at 120 fps',
      },
      {
        name: 'Autofocus System',
        value: '693-Point Phase-Detection AF System',
      },
      { name: 'Viewfinder', value: '0.5" 2.36m-Dot XGA OLED Tru-Finder EVF' },
      { name: 'Monitor', value: '3.0" 922k-Dot Tilting Touchscreen LCD' },
      { name: 'Connectivity', value: 'Wi-Fi, NFC, Bluetooth, USB Type-C' },
      { name: 'Battery Life', value: 'Approximately 710 Shots' },
      { name: 'Weight', value: '650g (Body Only)' },
    ],
    includes: [
      'Camera Body',
      'Sony FE 28-70mm f/3.5-5.6 OSS Lens',
      '2x Batteries',
      'Battery Charger',
      '64GB SD Card',
      'Camera Bag',
      'Lens Cleaning Kit',
    ],
    description:
      "The Sony Alpha A7 III is a versatile full-frame mirrorless camera that offers exceptional image quality, fast performance, and advanced features. Perfect for photography enthusiasts and professionals looking to capture high-quality images and videos. The camera's robust design and reliable performance make it an excellent choice for various shooting scenarios, from portrait and landscape photography to event coverage and video production.",
    usageGuide:
      'For optimal results, we recommend using Aperture Priority mode (A) for most shooting situations. The camera performs best in moderate lighting conditions, though its excellent ISO performance allows for quality low-light shooting as well. The included 28-70mm lens is versatile for everyday shooting, but you may want to consider renting additional lenses for specialized work.',
    rentalPolicy:
      'All rentals include damage protection coverage up to $2000. Equipment must be returned in the same condition as provided, normal wear excluded. Late returns incur additional daily charges. Proof of ID and valid credit card required at pickup.',
    reviews: {
      average: 4.8,
      count: 42,
    },
  };

  // State for selected rental period
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(0);

  // Handle rental period selection
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          {/* Breadcrumb navigation */}
          <nav className="mb-4 text-sm">
            <ol className="flex">
              <li className="text-gray-500 hover:text-black">
                <a href="#">Home</a>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-gray-500 hover:text-black">
                <a href="#">{product.category}</a>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-black">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`bg-white p-2 rounded border hover:border-black ${
                      selectedImage === index
                        ? 'border-black'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-2">
                  Brand: <span className="font-medium">{product.brand}</span>
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.reviews.average)
                            ? 'text-black'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {product.reviews.average}/5 ({product.reviews.count}{' '}
                    reviews)
                  </span>
                </div>

                <div className="flex items-center">
                  <div
                    className={`px-2 py-1 rounded text-sm ${
                      product.availability.status === 'In Stock'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {product.availability.status}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.availability.quantity} unit(s) available
                  </span>
                </div>
              </div>

              {/* Rental Options */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Rental Options</h2>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === 'hourly'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => handlePeriodChange('hourly')}
                  >
                    <div className="text-xs mb-1">Hourly</div>
                    <div className="font-semibold">
                      ${product.pricing.hourly}
                    </div>
                  </button>

                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === 'daily'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => handlePeriodChange('daily')}
                  >
                    <div className="text-xs mb-1">Daily</div>
                    <div className="font-semibold">
                      ${product.pricing.daily}
                    </div>
                  </button>

                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === 'weekly'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => handlePeriodChange('weekly')}
                  >
                    <div className="text-xs mb-1">Weekly</div>
                    <div className="font-semibold">
                      ${product.pricing.weekly}
                    </div>
                  </button>

                  <div className="py-2 px-3 rounded-md border border-gray-200 bg-gray-50">
                    <div className="text-xs mb-1">Deposit</div>
                    <div className="font-semibold">
                      ${product.pricing.deposit}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-black py-3 px-4 rounded-lg border border-gray-200 font-medium">
                    Reserve Now
                  </button>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">What's Included</h2>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-black mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="border-b border-gray-200">
              <div className="flex -mb-px space-x-8">
                <button className="text-black text-2xl border-b-2 border-gray-500 font-medium py-2">
                  Description
                </button>
                {/* <button className="text-gray-500 hover:text-black py-2">
                  Specifications
                </button>
                <button className="text-gray-500 hover:text-black py-2">
                  Usage Guide
                </button>
                <button className="text-gray-500 hover:text-black py-2">
                  Rental Policy
                </button> */}
              </div>
            </div>

            <div className="py-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>

              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex">
                      <dt className="w-1/3 font-medium text-gray-900">
                        {spec.name}
                      </dt>
                      <dd className="w-2/3 text-gray-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3">Usage Guide</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.usageGuide}
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Rental Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.rentalPolicy}
              </p>
            </div>
          </div>

          {/* Related Products Section (placeholder) */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-100 aspect-square">
                    <img
                      src="/api/placeholder/250/250"
                      alt="Related product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">
                      Related Gadget {item}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">Brand Name</p>
                    <p className="font-semibold">$29.99/day</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
