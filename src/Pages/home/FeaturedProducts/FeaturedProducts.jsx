import React, { useEffect, useState } from 'react';

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
                <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-48 object-contain"
                                src={product.imageUrl}
                                alt={product.name}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="text-gray-900 font-bold mt-4">{product.price}</p>
                                <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-blue-600 transition duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;