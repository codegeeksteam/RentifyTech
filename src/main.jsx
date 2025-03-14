import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/Main/MainLayout.jsx";
import Home from "./Pages/home/Home.jsx";
import AboutUs from "./Pages/aboutUs/AboutUs.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SignUp from "./Pages/signUp/SignUp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", 
        element: <Home />
      },
      {
        path:'/about-us',
        element:<AboutUs/>
      },
      {
        path:'/signUp',
        element:<SignUp />
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>
);
