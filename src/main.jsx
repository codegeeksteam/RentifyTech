import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/Main/MainLayout.jsx';
import Home from './Pages/home/Home.jsx';
import AboutUs from './Pages/aboutUs/AboutUs.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignUp from './Pages/signUp/SignUp.jsx';
import SignIn from './Pages/signIn/SignIn.jsx';
import Error from './Pages/Erorr/Erorr.jsx';
import Cart from './Pages/cart/Cart.jsx';
import Contact from './Pages/contactUs/contact.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import ProductDetailsPage from './Pages/productDetails/ProductDetailsPage.jsx';
import AllGadgetsPage from './Pages/allProducts/AllGadgetsPage.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <Contact></Contact>,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/all-gadgets',
        element: <AllGadgetsPage/>
      },
      {
        path: '/cam-sony-a7iii',
        element: <ProductDetailsPage />,
      },
      {
        path: '/signIn',
        element: <SignIn />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [{}],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
