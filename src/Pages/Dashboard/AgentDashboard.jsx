import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const AgentDashboard = ({ handleSignOut }) => {
  return (
    <nav className="flex-1 px-2 py-4 bg-gray-700">
      <NavLink to={'/dashboard/myAll'}>
        <div
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
          Agent Dashboard
        </div>
      </NavLink>
      <div className="divider divider-neutral"></div>
      <div className="flex flex-col justify-between bg-gray-700">
        <NavLink to={'/'} className="flex-1">
          <div
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
          >
            <FaHome />
            Home
          </div>
        </NavLink>
        <NavLink to={'/add-gadget'} className="flex-1">
          <p className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900">
            <FiPlus />
            Add Gadget
          </p>
        </NavLink>
        <NavLink className="flex-2">
          <div
            onClick={handleSignOut}
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-900"
          >
            <CiLogout size={18} /> Logout
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default AgentDashboard;
