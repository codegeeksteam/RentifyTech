// src/Components/CheckoutForm.jsx
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

    const res = await fetch('http://localhost:4000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const { clientSecret } = await res.json();

    const card = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: 'Test User',
        },
      },
    });

    setProcessing(false);

    if (error) {
      Swal.fire('Payment Failed', error.message, 'error');
    } else if (paymentIntent.status === 'succeeded') {
      Swal.fire('Success', 'Payment completed!', 'success');
      onSuccess(); // e.g. close modal
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-3 border border-gray-300 rounded" />
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {processing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
