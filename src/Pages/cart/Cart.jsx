import Footer from '../../Components/Footer';
import HelmetTitle from '../../Components/HelmetTitle';
import Navbar from '../../Components/Navbar';

function Cart() {
  // Hardcoded cart products data
  const cartProducts = [
    {
      id: 3,
      name: 'DSLR Camera',
      description: '4K video recording with high-quality lens included',
      image:
        'https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-6d-mark-ii%20/eos-6d-mark-ii-01-500x500.webp',
      rentalPrice: 35.0,
      rentalPeriod: '24 hours',
      quantity: 2,
    },
    {
      id: 1,
      name: 'Professional Laptop',
      description: 'High-performance laptop for editing and creative work',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-LAPTOPS-PHOTO-VIDEO-EDITING-2048px-6.jpg',
      rentalPrice: 25.99,
      rentalPeriod: '24 hours',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Studio Microphone',
      description:
        'Professional condenser microphone for clear audio recording',
      image:
        'https://i.pinimg.com/736x/44/e7/f7/44e7f760862a655074b8b18ecedb4b5d.jpg',
      rentalPrice: 12.5,
      rentalPeriod: '24 hours',
      quantity: 1,
    },
  ];

  // Calculate order summary values
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.rentalPrice * product.quantity,
    0,
  );
  const tax = subtotal * 0.07; // 7% tax
  const serviceFee = 5.99;
  const total = subtotal + tax + serviceFee;
  return (
    <div>
      <HelmetTitle title={'Cart'} />
      <Navbar />
      <section className="min-h-[50vh]">
        <div className="min-h-screen bg-white">
          <div className="max-w-6xl mx-auto p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-8 text-black">
              Your Rental Cart
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Cart Items - Left Side */}
              <div className="md:w-2/3">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h2 className="text-xl font-semibold mb-4 text-black">
                    Cart Items (
                    {cartProducts.reduce((acc, item) => acc + item.quantity, 0)}
                    )
                  </h2>

                  {cartProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-start border-b border-gray-200 py-4 last:border-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded mr-4"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-black">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {product.description}
                        </p>
                        <p className="text-gray-800">
                          ${product.rentalPrice.toFixed(2)} /{' '}
                          {product.rentalPeriod}
                        </p>

                        <div className="mt-2 flex items-center">
                          <label className="text-sm text-gray-600 mr-2">
                            Qty:
                          </label>
                          <div className="flex items-center border border-gray-300 rounded">
                            <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                              −
                            </button>
                            <span className="px-2 py-1">
                              {product.quantity}
                            </span>
                            <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <button className="text-sm text-gray-500 hover:text-black">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary - Right Side */}
              <div className="md:w-1/3">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-4">
                  <h2 className="text-xl font-semibold mb-4 text-black">
                    Order Summary
                  </h2>

                  <div className="space-y-2 pb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-black">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-black">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="text-black">
                        ${serviceFee.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium">
                    Proceed to Checkout
                  </button>

                  <p className="text-xs text-gray-500 mt-4">
                    By proceeding, you agree to our Terms & Conditions and
                    acknowledge that rental periods begin at time of pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
