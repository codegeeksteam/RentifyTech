// const ElectronicsRental = () => {
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white ">
//       {/* Left Side - Image */}
//       <div className="relative flex-1 max-w-lg">
//         <img
//           src="https://i.ibb.co.com/pth2LXr/big-monitor-768x511.webp"
//           alt="Electronics Rental"
//           className="w-full object-cover rounded-lg "
//         />

//       </div>

//       {/* Right Side - Content */}
//       <div className="flex-1 max-w-2xl lg:ml-12 text-center lg:text-left">
//         <p className="text-gray-500 font-semibold mb-2">Sustainable Electronics</p>
//         <h1 className="text-4xl font-bold text-black leading-tight">
//           Affordable Electronics Rental for Everyone
//         </h1>
//         <p className="text-gray-600 mt-4 text-lg">
//           We offer the most affordable and convenient solution for all your electronic needs. Whether
//           you are planning a business trip, holiday, or simply need a gadget for a short period, we
//           have got you covered.
//         </p>

//         <div className="flex flex-col lg:flex-row gap-8 mt-6">
//           <div>
//             <h3 className="text-xl font-semibold">Convenient</h3>
//             <p className="text-gray-600">
//               Choose from a wide selection of the latest electronics, delivered straight to your doorstep.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold">Affordable</h3>
//             <p className="text-gray-600">
//               Save money by renting instead of buying expensive electronics that quickly become outdated.
//             </p>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//           <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
//             Explore Products
//           </button>
//           <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ElectronicsRental;

const ElectronicsRental = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Image with modern frame */}
          <div className="relative flex-1 max-w-xl">
            <div className="relative z-10 aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://i.ibb.co.com/pth2LXr/big-monitor-768x511.webp"
                alt="Electronics Rental"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Sustainable Electronics
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Premium Electronics
              </span>
              <br />
              Rental Made Simple
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Access the latest tech without the commitment. Our flexible rental
              plans give you high-end electronics when you need them, without
              the long-term costs.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenient</h3>
                <p className="text-gray-600">
                  Next-day delivery with easy returns. We handle the logistics.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
                <p className="text-gray-600">
                  Save up to 70% compared to buying. No maintenance costs.
                </p>
              </div>
            </div>

            {/* Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium overflow-hidden group">
                <span className="relative z-10">Browse Available Tech</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </button>

              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition duration-300 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsRental;
