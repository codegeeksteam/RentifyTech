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
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import MyGadgets from './Pages/Dashboard/User-Dashboard/MyGadgets.jsx';
import UserRoute from './Route/UserRoute.jsx';
import AgentRoute from './Route/AgentRoute.jsx';
import MyAll from './Pages/Dashboard/Agent-Dashboard/MyAll.jsx';
import AdminRoute from './Route/AdminRoute.jsx';
import AllUsers from './Pages/Dashboard/Admin-Dashboard/AllUsers.jsx';
import AddCategory from './Pages/Dashboard/Admin-Dashboard/AddCategory.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import AddProduct from './Pages/addProduct/AddProduct.jsx';
import Contact from './Pages/contactUs/contact.jsx';
import ThemeProvider from './Provider/ThemeProvider.jsx';
import UpdateProduct from './Pages/updateProduct/UpdateProduct.jsx';
import AllDeep from './Pages/allProducts/AllDeep.jsx';
import NewDetails from './Pages/productDetails/NewDetails.jsx';
import Analytics from './Pages/Dashboard/Admin-Dashboard/Analytics.jsx';
import AdminDashboard from './Pages/Dashboard/AdminDashboard.jsx';
import AdminDassh from './Pages/Dashboard/Admin-Dashboard/AdminDassh.jsx';
import AdminProfile from './Pages/Dashboard/Admin-Dashboard/AdminProfile.jsx';
import Payments from './Pages/Dashboard/User-Dashboard/Payments.jsx';
import Wishlist from './Pages/Dashboard/User-Dashboard/Wishlist.jsx';
import Profile from './Pages/Dashboard/User-Dashboard/Profile.jsx';
import Overview from './Pages/Dashboard/User-Dashboard/Overview.jsx';
import MyCart from './Pages/Dashboard/User-Dashboard/MyCart.jsx';
import BlogDetails from './Pages/Blogs/BlogDetails.jsx';

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
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact-us',
        element: <Contact></Contact>,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },{
        path:"/blogs/:id",
        element :<BlogDetails/>
      },
      {
        path: '/add-gadget',
        element: <AddProduct />,
      },
      {
        path: '/update-gadget/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://rentify-tech-server.vercel.app/gadget/${params.id}`),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/all-gadgets',
        // element: <AllGadgetsPage />,
        element: <AllDeep></AllDeep>,
        // element: <NewAll />,
      },
      {
        path: '/gadget/:id',
        // element: <ProductDetailsPage />,
        element: <NewDetails></NewDetails>,
        loader: ({ params }) =>
          fetch(`https://rentify-tech-server.vercel.app/gadget/${params.id}`),
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
    children: [
      //User Route
      {
        path: 'overview',
        element: (
          <UserRoute>
            <Overview />
          </UserRoute>
        ),
      },
      {
        path: 'myCart',
        element: (
          <UserRoute>
            <MyCart />
          </UserRoute>
        ),
      },
      {
        path: 'payments',
        element: (
          <UserRoute>
            <Payments />
          </UserRoute>
        ),
      },
      {
        path: 'wishlist',
        element: (
          <UserRoute>
            <Wishlist />
          </UserRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <UserRoute>
            <Profile />
          </UserRoute>
        ),
      },
      {
        path: 'myCart',
        element: (
          <UserRoute>
            <MyCart />
          </UserRoute>
        ),
      },
      // Agent Route
      {
        path: 'myAll',
        element: (
          <AgentRoute>
            <MyAll />
          </AgentRoute>
        ),
      },
      // Admin Route
      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/',
        element: (
          <AdminRoute>
            <AdminDassh />
          </AdminRoute>
        ),
      },

      {
        path: 'analytics',
        element: (
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        ),
      },
      {
        path: 'adminProfile',
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: 'addCategory',
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
