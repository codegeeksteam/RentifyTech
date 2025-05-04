import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Cart from './Cart';  // Your cart component

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Cart /> {/* Your Cart component is wrapped inside Elements */}
    </Elements>
  );
}

export default App;
