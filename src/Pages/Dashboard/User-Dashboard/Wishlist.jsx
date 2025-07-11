import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useWishList from "../../../Hooks/useWishList";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

function Wishlist() {
  const [wishList, refetch] = useWishList(); // Assuming useWishList returns [data, refetch]
  const axiosSecure = useAxiosSecure();
  const [localCart, setLocalCart] = useState([]);

  // wishlist ডেটা আপডেট হলে localCart আপডেট করা
  useEffect(() => {
  // ডিবাগ: wishlist ডেটা চেক
    setLocalCart(wishList || []);
  }, [wishList]);


  const removeItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/wishListDelete/${item._id}`);
          if (res.data.deletedCount > 0) {
            setLocalCart((wishlist) => wishlist.filter((wish) => wish._id !== item._id));
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.gadgetName} has been deleted.`,
              icon: "success",
            });
          }
      }
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">My Wishlist</h2>
        </div>
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
          {localCart.length} items
        </span>
      </div>

      <div className="space-y-4 mb-6">
        {wishList.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                <img
                  src={item.gadgetImage}
                  alt={item.gadgetName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{item.gadgetName}</h3>
                <div className="grid grid-cols-3 gap-1 mb-3 text-xs">
                  <div className="text-center">
                    <span className="font-bold">${item.pricing?.hourly}</span>
                    <span className="block text-gray-400">hour</span>
                  </div>
                  <div className="text-center">
                    <span className="font-bold">${item.pricing?.daily}</span>
                    <span className="block text-gray-400">day</span>
                  </div>
                  <div className="text-center">
                    <span className="font-bold">${item.pricing?.weekly}</span>
                    <span className="block text-gray-400">week</span>
                  </div>
                </div>
                <div className="mt-1">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.gadgetAvailability?.status === "In Stock"
                        ? "bg-black text-white"
                        : item.gadgetAvailability?.status === "Coming Soon"
                        ? "bg-gray-200 text-black"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.gadgetAvailability?.status}
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
                onClick={() => removeItem(item)}
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