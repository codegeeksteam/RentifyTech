import React from "react";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
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
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminDashboard = ({ handleSignOut }) => {
  return (
      <nav className="flex-1 px-2 py-4 bg-gray-700">
        <h2 className="text-white font-bold mx-auto my-2 py-2 text-3xl">Admin Dashboard</h2>
        <NavLink>
          <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
            <Home size={18} />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink to={"/dashboard/allUsers"}>
          <a
            href="#"
            className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900"
          >
            <Users size={18} />
            <span>Users Management</span>
          </a>
        </NavLink>

        <NavLink to={"/dashboard/analytics"}>
          <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
            <BarChart2 size={18} />
            <span>Analytics</span>
          </div>
        </NavLink>

        <NavLink>
          <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
            <Package size={18} />
            <span>Gadget Management</span>
          </div>
        </NavLink>

        <NavLink to={'/dashboard/adminProfile'}>
          <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-900">
            <Settings size={18} />
            <span>Profile</span>
          </div>
        </NavLink>

        {/* <NavLink to={"/dashboard/addCategory"}>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
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
          Add a Category
        </a>
      </NavLink> */}
        <div className="divider divider-neutral"></div>
        <div className="flex flex-col justify-between bg-gray-700">
          <NavLink to={"/"} className="flex-1">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
            >
              <FaHome />
              Home
            </a>
          </NavLink>
          <NavLink className="flex-2">
            <a
              onClick={handleSignOut}
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
            >
              <CiLogout size={18} /> Logout
            </a>
          </NavLink>
        </div>
      </nav>
  );
};

export default AdminDashboard;
