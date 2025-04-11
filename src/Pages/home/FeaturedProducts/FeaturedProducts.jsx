import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('/featuredProducts.json')
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>
        {/* strokeLinejoin */}
        <div className="grid grid-cols-1 p-2 lg:p-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((gadget) => (
            <div
              key={gadget.id}
              className="border border-gray-200 rounded-lg shadow-sm transition-shadow group"
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
                  <div className="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-xs text-gray-400">{gadget.brand}</p>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 text-xs text-gray-400">
                      {gadget.rating} ({gadget.reviews})
                    </span>
                  </div>
                </div>
                <Link
                  to={'/cam-sony-a7iii'}
                  className="text-lg font-medium mb-2"
                >
                  {gadget.name}
                </Link>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bol">
                      ${gadget.price}
                    </span>
                    <span className="text-gray-400 text-sm"> / day</span>
                  </div>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      gadget.available
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
