import React from 'react';
import { useState } from 'react';
import { Heart, Trash2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Mechanical Keyboard',
      price: '$89.99',
      image: 'https://vibegaming.com.bd/wp-content/uploads/2023/08/v227.jpg',
      added: '2 days ago',
      priority: 'High',
    },
    {
      id: 2,
      name: 'Ultra-wide Monitor',
      price: '$349.99',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2025/02/BEST-ULTRAWIDE-MONITORS-2048px-422.jpg?auto=webp&quality=75&width=1024',
      added: '1 week ago',
      priority: 'Medium',
    },
    {
      id: 3,
      name: 'Desk Lamp',
      price: '$24.99',
      image:
        'https://lw-cdn.com/images/9622910CDB03/k_f4a89ab5a88f4a999d0c078faac7ee03;w_1600;h_1600;q_100/10013616.jpg',
      added: '3 weeks ago',
      priority: 'Low',
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">My Wishlist</h2>
        </div>
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
          {wishlistItems.length} items
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="mr-4">{item.price}</span>
                </div>
                <div className="mt-1">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.priority === 'High'
                        ? 'bg-black text-white'
                        : item.priority === 'Medium'
                        ? 'bg-gray-200 text-black'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-sm bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800">
                Rent Now
              </button>
              <button
                className="p-1 hover:bg-gray-100 rounded-full"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/all-gadgets"
        className="flex items-center font-semibold justify-center w-full bg-gray-100 hover:bg-gray-200 text-black py-3 rounded-md transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default Wishlist;
