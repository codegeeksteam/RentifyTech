import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HelmetTitle from "../../Components/HelmetTitle";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const NewDetails = () => {
  const [gadget, setGadget] = useState({
    pricing: {},
    availability: {},
    specifications: [],
    includes: [],
    images: [],
    seller: {},
  });
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const gadgetData = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  useEffect(() => {
    const fetchGadget = async () => {
      try {
        const response = await axiosSecure.get(`/gadget/${gadgetData._id}`);
        setGadget(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gadget:", err);
        setError("Failed to load gadget.");
        setLoading(false);
      }
    };

    fetchGadget();
  }, [axiosSecure, gadgetData._id]);

  // State for selected rental period
  const [selectedPeriod, setSelectedPeriod] = useState("daily");

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(0);

  // Handle rental period selection
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  if (loading) {
    return (
      <>
        {/* <HelmetTitle title={'Loading...'} /> */}
        <Navbar />
        <div className="flex justify-center items-center h-64">  <Watch
  visible={true}
  height="40"
  width="40"
  radius="48"
  color="#000000"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>;
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <HelmetTitle title={"Sorry!"} />
        <Navbar />
        <div className="h-[50vh] p-5 text-red-600 text-center">{error}</div>;
        <Footer />
      </>
    );
  }

// Add To Card Function
  const handelAddtoCart = async () => {
    if (user && user.email) {
      // sent card item to the database
      const cartItem = {
        id: gadget._id,
        userEmail: user?.email,
        name: gadget.name,
        description: gadget.description,
        category: gadget.category,
        rentalPeriod:  selectedPeriod,
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleTimeString(),
        rentalPrice: gadget.pricing[selectedPeriod],
        image: gadget.images[selectedImage],
        quantity: 1,
      };
      console.log('cartItem', cartItem);
      const res = await axiosSecure.post("/cart", cartItem);
       // Log the response from the server
      if (res?.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: `${gadget.name} Added Successful!`,
          icon: "success",
        });
        // refetch cart
        refetch()
      }
    } else {
      Swal.fire({
        title: "You are not logged in?",
        text: "Please log in to your account!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent to the user login page
          navigate("/signIn", { state: { from: location } });
        }
      });
    }
  };


  return (
    <>
      <HelmetTitle title={gadget.name} />
      <Navbar />
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          {/* Breadcrumb navigation */}
          <nav className="mb-4 text-sm">
            <ol className="flex">
              <li className="text-gray-500 hover:text-black">
                <Link to={"/all-gadgets"}>Home</Link>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-gray-500 hover:text-black">
                <a href="#">{gadget.category}</a>
              </li>
              <li className="mx-2 text-gray-500">/</li>
              <li className="text-black">{gadget.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* gadget Images */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg overflow-hidden">
                <img
                  src={gadget.images[selectedImage]}
                  alt={gadget.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {gadget.images.map((image, index) => (
                  <button
                    key={index}
                    className={`bg-white p-2 rounded border hover:border-black ${
                      selectedImage === index
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${gadget.name} view ${index + 1}`}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* gadget Information */}
            <div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">
                  {gadget.name}
                </h1>
                <p className="text-gray-600 mb-2">
                  Brand: <span className="font-medium">{gadget.brand}</span>
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(gadget?.reviews?.average || 0)
                            ? "text-black"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {gadget?.reviews?.count < 1
                      ? "No reviews"
                      : `${gadget.reviews.average}/5 (${gadget.reviews.count} reviews)`}
                  </span>
                </div>

                <div className="flex items-center">
                  <div
                    className={`px-2 py-1 rounded text-sm ${
                      gadget.availability.status === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : gadget.availability.status === "Out of Stock"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {gadget.availability.status}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {gadget.availability.quantity} unit(s) available
                  </span>
                </div>
              </div>

              {/* Rental Options */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Rental Options</h2>

                <div className="grid grid-cols-4 gap-2 mb-4">
                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === "hourly"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => handlePeriodChange("hourly")}
                  >
                    <div className="text-xs mb-1">Hourly</div>
                    <div className="font-semibold">
                      ${gadget.pricing.hourly}
                    </div>
                  </button>

                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === "daily"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => handlePeriodChange("daily")}
                  >
                    <div className="text-xs mb-1">Daily</div>
                    <div className="font-semibold">${gadget.pricing.daily}</div>
                  </button>

                  <button
                    className={`py-2 px-3 rounded-md border ${
                      selectedPeriod === "weekly"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => handlePeriodChange("weekly")}
                  >
                    <div className="text-xs mb-1">Weekly</div>
                    <div className="font-semibold">
                      ${gadget.pricing.weekly}
                    </div>
                  </button>

                  <div className="py-2 px-3 rounded-md border border-gray-200 bg-gray-50">
                    <div className="text-xs mb-1">Deposit</div>
                    <div className="font-semibold">
                      ${gadget.pricing.deposit}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handelAddtoCart}
                    className={`flex-1 text-white py-3 cursor-pointer px-4 rounded-lg font-medium ${
                      gadget.availability.status === "In Stock"
                        ? "bg-black hover:bg-gray-800"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={gadget.availability.status !== "In Stock"}
                  >
                    {gadget.availability.status === "In Stock"
                      ? "Add to Cart "
                      : "Not Available"}
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 rounded-lg font-medium border ${
                      gadget.availability.status === "In Stock"
                        ? "bg-white hover:bg-gray-50 text-black border-gray-200"
                        : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                    }`}
                    disabled={gadget.availability.status !== "In Stock"}
                  >
                    Reserve Now
                  </button>
                </div>
              </div>

              {/* Seller Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-lg font-semibold mb-3">
                  Seller Information
                </h2>
                <div className="flex items-center">
                  <img
                    src={gadget.seller.image}
                    alt={gadget.seller.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium">{gadget.seller.name}</p>
                    <p className="text-sm text-gray-600">
                      {gadget.seller.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">What's Included</h2>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {gadget.includes.map((item, index) => (
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

          {/* gadget Details Tabs */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="border-b border-gray-200">
              <div className="flex -mb-px space-x-8">
                <button className="text-black text-2xl border-b-2 border-gray-500 font-medium py-2">
                  Description
                </button>
              </div>
            </div>

            <div className="py-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {gadget.description}
              </p>

              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {gadget.specifications.map((spec, index) => (
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
                {gadget.usageGuide}
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Rental Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                {gadget.rentalPolicy}
              </p>
            </div>
          </div>

          {/* Related gadgets Section (placeholder) */}
          <div className="my-12 border-t border-gray-200 pt-8">
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
                      alt="Related gadget"
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

export default NewDetails;
