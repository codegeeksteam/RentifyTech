

const RentalSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  mb-8">Select Your Rental Period</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white py-8 px-8 rounded-lg shadow-lg">
            <div><h1 className="text-7xl font-bold text-right opacity-20">01</h1></div>
            <h3 className="text-3xl font-semibold mb-4">Browse our <br /> Inventory</h3>
            <p className="text-gray-600">
              Explore our diverse range of AV equipment available for rent. We offer a wide selection to meet your specific needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <div><h1 className="text-7xl font-bold text-right opacity-20">02</h1></div>
            <h3 className="text-3xl font-semibold mb-4">Select your <br /> Equipment</h3>
            <p className="text-gray-600">
              Explore our diverse range of AV equipment available for rent. We offer a wide selection to meet your specific needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <div><h1 className="text-7xl font-bold text-right opacity-20">03</h1></div>
            <h3 className="text-3xl font-semibold mb-4">Confirm <br /> and Reserve</h3>
            <p className="text-gray-600">
              Browse through our inventory, choose the items you need, and easily book them for the desired rental period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalSection;