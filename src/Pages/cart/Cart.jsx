 

import { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import HelmetTitle from '../../Components/HelmetTitle';
import Navbar from '../../Components/Navbar';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import CheckoutForm from './CheckoutForm';

function Cart() {
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure()
  const [localCart, setLocalCart] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    setLocalCart(cart || []);
  }, [cart]);

  const increaseQuantity = (id) => {
    setLocalCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const item = localCart.find((item) => item.id === id);
    if (item.quantity <= 1) return;
    setLocalCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/cartDelete/${product._id}`);
        if (res.data.deletedCount > 0) {
          setLocalCart((prev) => prev.filter((item) => item._id !== product._id));
          Swal.fire({
            title: "Deleted!",
            text: `${product.name} has been deleted.`,
            icon: "success"
          });
        };
      }
    });
  };

  const subtotal = localCart.reduce(
    (total, product) => total + product.rentalPrice * product.quantity,
    0
  ) || 0;
  const tax = subtotal * 0.07;
  const serviceFee = 5.99;
  const total = subtotal + tax + serviceFee;

  // Payment success handler
  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    Swal.fire({
      title: "Payment Successful!",
      text: "Your rental has been confirmed. You'll receive a confirmation email shortly.",
      icon: "success",
      confirmButtonText: "Great!"
    });
  };

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
              <div className="md:w-2/3 sticky top-0">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h2 className="text-xl font-semibold mb-4 text-black">
                    Cart Items ({localCart.length})
                  </h2>

                  {localCart.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                  ) : (
                    localCart.map((product) => (
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
                          <h3 className="font-medium text-2xl text-black">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {product.description.substring(0, 100)}
                          </p>
                          <p className="text-gray-800">
                            ${ (product.rentalPrice * product.quantity).toFixed(2) } / {product.rentalPeriod}
                          </p>

                          <div className="mt-2 flex items-center">
                            <label className="text-sm text-gray-600 mr-2">
                              Qty:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() => decreaseQuantity(product.id)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                −
                              </button>
                              <span className="px-2 py-1">
                                {product.quantity}
                              </span>
                              <button
                                onClick={() => increaseQuantity(product.id)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(product)}
                          className="text-sm bg-red-600 py-1 px-2 rounded-full text-white hover:text-black"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
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
                      <span className="text-black">${serviceFee.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    disabled={localCart.length === 0}
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Proceed to Checkout
                  </button>

                  <p className="text-xs text-gray-500 mt-4">
                    By proceeding, you agree to our Terms & Conditions and acknowledge that rental periods begin at time of pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Complete Payment</h3>
                <button 
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Order Summary</h4>
                  <div className="space-y-2">
                    {localCart.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-gray-600">{item.name} (x{item.quantity})</span>
                        <span className="font-medium">${(item.rentalPrice * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-3 pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <CheckoutForm 
                  amount={total.toFixed(2)} 
                  onSuccess={handlePaymentSuccess}
                  onCancel={() => setIsPaymentModalOpen(false)}
                />
              </div>
              
              <div className="text-xs text-gray-500 mt-4">
                <p>Your payment is secured with 256-bit SSL encryption. We don't store your credit card details.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;