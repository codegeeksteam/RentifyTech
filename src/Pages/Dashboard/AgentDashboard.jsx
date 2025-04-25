import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { Home,Settings, Package, BarChart2, Truck,} from 'lucide-react';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const AgentDashboard = ({ handleSignOut }) => {
  return (
    <nav className="flex-1 px-2 py-4 bg-gray-700">
    <h2 className="text-white font-bold mx-auto my-2 py-2 text-3xl">Agent Dashboard</h2>

      <NavLink to={'/dashboard/myAll'}>
        <div
          href="#"
          className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-100 hover:text-black"
        >
          <Home size={18} />
          <span>Dashboard</span>
        </div>
      </NavLink>

      <NavLink to={'/dashboard/myAll'}>
        <div
          href="#"
          className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-100 hover:text-black"
        >
        <Package size={18} />
          <span>Gadget Management</span>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-100 hover:text-black">
        <Truck size={18} />
        <span>Delivery</span>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-100 hover:text-black">
        <BarChart2 size={18} />
        <span>Reports</span>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex items-center px-4 py-2 gap-3 text-gray-100 hover:bg-gray-100 hover:text-black">
        <Settings size={18} />
        <span>Settings</span>
        </div>
      </NavLink>
      <div className="divider divider-neutral"></div>
      <div className="flex flex-col justify-between bg-gray-700">
        <NavLink to={'/'} className="flex-1">
          <div
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-black"
          >
            <FaHome />
            Home
          </div>
        </NavLink>
        <NavLink to={'/add-gadget'} className="flex-1">
          <p className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-black">
            <FiPlus />
            Add Gadget
          </p>
        </NavLink>
        <NavLink className="flex-2">
          <div
            onClick={handleSignOut}
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-black"
          >
            <CiLogout size={18} /> Logout
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default AgentDashboard;
