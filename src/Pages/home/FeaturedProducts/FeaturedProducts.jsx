import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useWishList from "../../../Hooks/useWishList";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [wishList, refetch] = useWishList();
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const response = await axiosSecure.get(`/gadgets`);
        setFeaturedProducts(
          response.data
            .filter((gadget) => gadget.approvalStatus === "Published")
            .slice(-6)
        );
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gadgets:", err);
        setError("Failed to load gadgets.");
        setLoading(false);
      }
    };

    fetchGadgets();
  }, [axiosSecure]);

  if (loading) {
    return <div> </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  //Handle Wishlist
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
    const res = await axiosSecure.post("/wishlist", newData);
    if (res.data.insertedId) {
      refetch();
      Swal.fire({
        title: "Success!",
        text: `${gadget.name} Wishlist Added Successful!`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Gadgets</h2>
        {featuredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No Gadgets found.</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((gadget) => (
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
                      {/* Reflection effect */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        style={{
                          transform: "rotateX(90deg) translateZ(-20px)",
                          transformOrigin: "bottom center",
                        }}
                      />
                      {/* Floating shadow */}
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
                    <p className="text-xs text-gray-400">{gadget.brand}</p>
                    <p className="text-gray-400 text-xs">
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
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {gadget.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mb-3 text-xs">
                    <div className="text-center">
                      <span className="font-bold">
                        ${gadget.pricing.hourly}
                      </span>
                      <span className="block text-gray-400">hour</span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold">${gadget.pricing.daily}</span>
                      <span className="block text-gray-400">day</span>
                    </div>
                    <div className="text-center">
                      <span className="font-bold">
                        ${gadget.pricing.weekly}
                      </span>
                      <span className="block text-gray-400">week</span>
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
                    <Link to={`/gadget/${gadget._id}`}>
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
