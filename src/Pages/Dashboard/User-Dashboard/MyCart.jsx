import { useState, useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import HelmetTitle from '../../../Components/HelmetTitle';
import Swal from 'sweetalert2';


function MyCart() {
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure()
  const [localCart, setLocalCart] = useState([]);

  // cart ডেটা আপডেট হলে localCart আপডেট করা
  useEffect(() => {
  // ডিবাগ: cart ডেটা চেক
    setLocalCart(cart || []);
  }, [cart]);

  // কোয়ান্টিটি বাড়ানোর ফাংশন
  const increaseQuantity = (id) => {
    setLocalCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // কোয়ান্টিটি কমানোর ফাংশন
  const decreaseQuantity = (id) => {
    const item = localCart.find((item) => item.id === id);
    if (item.quantity <= 1) return; // কোয়ান্টিটি ১-এর কম হবে না
    setLocalCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // আইটেম রিমুভ করার ফাংশন
  const removeItem = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/cartDelete/${product._id}`)
        if(res.data.deletedCount > 0){
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

  // সাবটোটাল, ট্যাক্স, এবং টোটাল ক্যালকুলেশন
  const subtotal = localCart.reduce(
    (total, product) => total + product.rentalPrice * product.quantity,
    0
  ) || 0;
  const tax = subtotal * 0.07; // 7% ট্যাক্স
  const serviceFee = 5.99;
  const total = subtotal + tax + serviceFee;

  return (
    <div>
      <HelmetTitle title={'Cart'} />
    
      <section className="min-h-[40vh]">
        <div className="min-h-screen">
          <div className="max-w-6xl mx-auto p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-8 text-black">
              Your Rental Cart
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
              {/* কার্ট আইটেম - বাম পাশে */}
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
                            $
                            {(product.rentalPrice * product.quantity).toFixed(2)}{' '}
                            / {product.rentalPeriod}
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
                                onClick={() => increaseQuantity(product.id, product.name)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(product)}
                          className="text-sm bg-red-600  py-1 px-2 rounded-full text-white hover:text-black"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* অর্ডার সামারি - ডান পাশে */}
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
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
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
    </div>
  );
}


export default MyCart