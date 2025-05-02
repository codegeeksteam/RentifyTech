// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const CheckoutForm = ({ amount, onSuccess, userName = 'Guest' }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [processing, setProcessing] = useState(false);
//   const secureAxios = useAxiosSecure();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if Stripe and Elements are loaded
//     if (!stripe || !elements) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Stripe or Elements not loaded. Please try again.',
//       });
//       return;
//     }

//     // Validate amount
//     const parsedAmount = parseFloat(amount);
//     if (isNaN(parsedAmount) || parsedAmount <= 0) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Amount',
//         text: 'Please provide a valid payment amount.',
//       });
//       return;
//     }

//     try {
//       setProcessing(true);

//       // Debug: Log the amount being sent
//       console.log('Sending POST request to /create-payment-intent with amount:', parsedAmount);

//       const { data } = await secureAxios.post('/create-payment-intent', { amount: parsedAmount });
//       console.log('API Response:', data); // Debug: Log the API response


//       if(data.data.insertedId){
//         console.log('Payment Intent Created:', data?.insertedId); // Debug: Log the payment intent ID
//       }

//       const clientSecret = data.client_secret;
//     console.log('Client Secret:', clientSecret); // Debug: Log the client secret
//       const card = elements.getElement(CardElement);
//       const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card,
//           billing_details: {
//             name: userName,
//           },
//         },
//       });

//       if (error) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Payment Failed',
//           text: error.message,
//         });
//       } else if (paymentIntent.status === 'succeeded') {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: 'Payment completed!',
//         });
//         onSuccess(); // Callback after successful payment
//       }
//     } catch (err) {
//       console.error('API Error:', err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: err.message || 'Something went wrong. Please try again.',
//       });
//     } finally {
//       setProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <CardElement className="p-3 border border-gray-300 rounded" />
//       <button
//         type="submit"
//         disabled={!stripe || !elements || processing}
//         className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
//       >
//         {processing ? 'Processing...' : `Pay $${amount}`}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ amount, onSuccess, userName = 'Guest', gadgetsName , localCart, orderId}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  const [processing, setProcessing] = useState(false);
  const secureAxios = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if Stripe and Elements are loaded
    if (!stripe || !elements) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Stripe or Elements not loaded. Please try again.',
      });
      return;
    }

    // Validate amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Amount',
        text: 'Please provide a valid payment amount.',
      });
      return;
    }

    try {
      setProcessing(true);

      // Send request to create payment intent
      const { data } = await secureAxios.post('/create-payment-intent', { amount: parsedAmount, gadgetsName: gadgetsName,userName: user?.displayName, email: user?.email, localCart, orderId });

      const clientSecret = data.clientSecret;
      const card = elements.getElement(CardElement);

      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: userName,
          },
        },
      });

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Payment Failed',
          text: error.message,
        });
      } else if (paymentIntent.status === 'succeeded') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Payment completed!',
        });
        navigate("/dashboard/payments")
        onSuccess(); // Callback after successful payment
      }
    } catch (err) {
      console.error('API Error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-3 border border-gray-300 rounded" />
      <button
        type="submit"
        disabled={!stripe || !elements || processing}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {processing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
