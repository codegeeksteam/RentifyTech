import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import {
  Home,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Package,
  Calendar,
  HelpCircle,
  BarChart2,
  Truck,
  DollarSign,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const UsersDashboard = ({ handleSignOut }) => {
  return (
    <nav className="flex-1 px-2 py-4 bg-gray-700">
      <h2 className="text-white font-bold mx-auto my-2 py-2 text-3xl">
        User Dashboard
      </h2>

      <NavLink to={'/dashboard/overview'}>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
          <Home size={18} className="text-gray-100" />
          <span className="text-gray-100">Overview</span>
        </div>
      </NavLink>

      <NavLink
        to={'/dashboard/myGadget'}
        className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        My Gadget
      </NavLink>

      <NavLink to={'/dashboard/wishlist'}>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
          <ShoppingBag size={18} />
          <span>My Wishlist</span>
        </div>
      </NavLink>

      <NavLink to={'/dashboard/payments'}>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
          <DollarSign size={18} />
          <span>Payments</span>
        </div>
      </NavLink>

      <NavLink to={'/dashboard/profile'}>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
          <CgProfile size={18} />
          <span>My Profile</span>
        </div>
      </NavLink>

      <div className="divider divider-neutral"></div>

      <div className="flex flex-col justify-between bg-gray-700">
        <NavLink
          to={'/'}
          className="flex-1 flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
        >
          <FaHome />
          Home
        </NavLink>

        <NavLink
          className="flex-2 flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
          onClick={handleSignOut}
        >
          <CiLogout size={18} /> Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default UsersDashboard;
