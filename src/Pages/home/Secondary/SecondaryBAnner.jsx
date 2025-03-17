

const ElectronicsRental = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white ">
      {/* Left Side - Image */}
      <div className="relative flex-1 max-w-lg">
        <img
          src="https://i.ibb.co.com/pth2LXr/big-monitor-768x511.webp"
          alt="Electronics Rental"
          className="w-full object-cover rounded-lg "
        />

      </div>

      {/* Right Side - Content */}
      <div className="flex-1 max-w-2xl lg:ml-12 text-center lg:text-left">
        <p className="text-gray-500 font-semibold mb-2">Sustainable Electronics</p>
        <h1 className="text-4xl font-bold text-black leading-tight">
          Affordable Electronics Rental for Everyone
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          We offer the most affordable and convenient solution for all your electronic needs. Whether
          you are planning a business trip, holiday, or simply need a gadget for a short period, we
          have got you covered.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold">Convenient</h3>
            <p className="text-gray-600">
              Choose from a wide selection of the latest electronics, delivered straight to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Affordable</h3>
            <p className="text-gray-600">
              Save money by renting instead of buying expensive electronics that quickly become outdated.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Explore Products
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsRental;
